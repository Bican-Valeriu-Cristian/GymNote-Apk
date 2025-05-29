import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../styles/CalorieCalculatorStyles';

export default function CalorieCalculatorScreen() {
  const [sex, setSex] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState(null);

  const calculateCalories = () => {
    const kg = parseFloat(weight);
    if (!sex || !goal || isNaN(kg)) {
      setResult(null);
      return;
    }

    let base = sex === 'male' ? kg * 2.2*15 : kg * 2.2 *14 ;

    if (goal === 'lose') base -= 400;
    if (goal === 'gain') base += 400;

    setResult(Math.round(base));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Introdu datele tale</Text>

      <Text style={styles.label}>Sex:</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.optionButton, sex === 'male' && styles.selected]} onPress={() => setSex('male')}>
          <Text style={styles.optionText}>Masculin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, sex === 'female' && styles.selected]} onPress={() => setSex('female')}>
          <Text style={styles.optionText}>Feminin</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Greutate (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ex: 65"
        value={weight}
        onChangeText={setWeight}
      />

      <Text style={styles.label}>Obiectiv:</Text>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.optionButton, goal === 'maintain' && styles.selected]} onPress={() => setGoal('maintain')}>
          <Text style={styles.optionText}>Menținere</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, goal === 'lose' && styles.selected]} onPress={() => setGoal('lose')}>
          <Text style={styles.optionText}>Slăbire</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.optionButton, goal === 'gain' && styles.selected]} onPress={() => setGoal('gain')}>
          <Text style={styles.optionText}>Masă</Text>
        </TouchableOpacity>
      </View>

      <Button title="Calculează" onPress={calculateCalories} color="#4682b1" />

      {result &&(
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            Nevoia ta zilnică este de {result} Kcal
          </Text>
          <Text style={styles.resultText}>
          Proteina: {(weight * 2.2).toFixed(2)} g
          </Text>
          <Text style={styles.resultText}>
          Carbohidrati: {((result - (weight * 2.2 * 4) - (weight * 9)) / 4).toFixed(2)} g
          </Text>
          <Text style={styles.resultText}>
            Grasime: {weight} g 
          </Text>
          
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
