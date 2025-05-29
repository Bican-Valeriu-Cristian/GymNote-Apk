import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView, Modal, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/WorkoutHistoryStyles';

const STORAGE_KEY = '@workouts';

const InputField = ({ placeholder, value, onChangeText, keyboardType = 'default' }) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    onChangeText={onChangeText}
    keyboardType={keyboardType}
  />
);

export default function WorkoutHistoryScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [fields, setFields] = useState({ workoutName: '', name: '', reps: '', weight: '' });
  const [selected, setSelected] = useState({ workoutIndex: null, editIndex: null });
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(data => data && setWorkouts(JSON.parse(data)));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(workouts));
  }, [workouts]);

  const handleChange = (key, value) => setFields(prev => ({ ...prev, [key]: value }));

  const resetExerciseFields = () => setFields(prev => ({ ...prev, name: '', reps: '', weight: '' }));

  const handleWorkoutAdd = () => {
    if (!fields.workoutName.trim()) return Alert.alert('Error', 'Workout name required');
    setWorkouts([...workouts, { name: fields.workoutName.trim(), exercises: [] }]);
    handleChange('workoutName', '');
  };

  const saveExercise = () => {
    const { name, reps, weight } = fields;
    const { workoutIndex, editIndex } = selected;
    if (!name || !reps || !weight) return Alert.alert('Error', 'Complete all fields');

    const updated = [...workouts];
    if (editIndex !== null) {
      updated[workoutIndex].exercises[editIndex] = { name, reps, weight };
    } else {
      updated[workoutIndex].exercises.push({ name, reps, weight });
    }
    setWorkouts(updated);
    closeModal();
  };

  const handleWorkoutDelete = (i) => {
    Alert.alert('Confirm Delete', 'Delete this workout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
        const updated = workouts.filter((_, wi) => wi !== i);
        setWorkouts(updated);
        setSelected({ workoutIndex: null, editIndex: null });
      }}
    ]);
  };

  const handleExerciseDelete = (i) => {
    const idx = selected.workoutIndex;
    Alert.alert('Confirm Delete', 'Delete this exercise?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
        const updated = [...workouts];
        updated[idx].exercises.splice(i, 1);
        setWorkouts(updated);
      }}
    ]);
  };

  const openModal = (i = null) => {
    if (i !== null) {
      const ex = workouts[selected.workoutIndex].exercises[i];
      setFields({ ...fields, name: ex.name, reps: ex.reps, weight: ex.weight });
    }
    setSelected(prev => ({ ...prev, editIndex: i }));
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    resetExerciseFields();
    setSelected(prev => ({ ...prev, editIndex: null }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Workout History</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Add Workout</Text>
          <InputField placeholder="Workout name" value={fields.workoutName} onChangeText={v => handleChange('workoutName', v)} />
          <Button buttonColor="#4682b1" mode="contained" onPress={handleWorkoutAdd}>Add Workout</Button>
        </View>

        <FlatList
          data={workouts}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[styles.card, styles.workoutItem]}
              onPress={() => setSelected(prev => ({ ...prev, workoutIndex: prev.workoutIndex === index ? null : index }))}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.workoutName}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleWorkoutDelete(index)}>
                  <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
              </View>

              {selected.workoutIndex === index && item.exercises.map((ex, i) => (
                <View key={i} style={{ flexDirection: 'row', marginTop: 6, marginLeft: 10 }}>
                  <TouchableOpacity onPress={() => openModal(i)} style={{ flex: 1 }}>
                    <Text style={styles.exerciseItem}>• {ex.name} - {ex.reps} reps @ {ex.weight} kg</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleExerciseDelete(i)}>
                    <Ionicons name="trash-outline" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              ))}
            </TouchableOpacity>
          )}
        />

        {selected.workoutIndex !== null && selected.editIndex === null && (
          <View style={styles.card}>
            <Text style={styles.label}>Add Exercise</Text>
            {['name', 'reps', 'weight'].map((key) => (
              <InputField
                key={key}
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                value={fields[key]}
                keyboardType={key !== 'name' ? 'numeric' : 'default'}
                onChangeText={(v) => handleChange(key, v)}
              />
            ))}
            <Button buttonColor="#4682b1" mode="contained" onPress={saveExercise}>Add Exercise</Button>
          </View>
        )}

        <Modal visible={modalVisible} transparent animationType="slide" onRequestClose={closeModal}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Edit Exercise</Text>
              {['name', 'reps', 'weight'].map((key) => (
                <InputField
                  key={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={fields[key]}
                  keyboardType={key !== 'name' ? 'numeric' : 'default'}
                  onChangeText={(v) => handleChange(key, v)}
                />
              ))}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                <Button mode="contained" onPress={saveExercise} style={{ flex: 1, marginRight: 10 }}>Save</Button>
                <Button mode="outlined" onPress={closeModal} style={{ flex: 1 }}>Cancel</Button>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
