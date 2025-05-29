import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Welcome to GymNote</Text>
      <Text style={styles.subtitle}>Your personal fitness companion</Text>

      <Image
        source={require('../assets/fitness.png')}
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Workout History')}>
          <Text style={styles.buttonText}>Workout History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Step Counter')}>
          <Text style={styles.buttonText}>Step Counter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stopwatch')}>
          <Text style={styles.buttonText}>Stopwatch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BMI Calculator')}>
          <Text style={styles.buttonText}>BMI Calculator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calorie Calculator')}>
          <Text style={styles.buttonText}>Kcal Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Nutrition')}>
          <Text style={styles.buttonText}>Nutrition</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Educatie')}>
          <Text style={styles.buttonText}>Education</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
