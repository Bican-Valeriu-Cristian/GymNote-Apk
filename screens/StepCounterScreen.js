import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../styles/StepCounterStyles';

const STEP_GOAL = 10000;
const KCAL_PER_STEP = 0.04;
const STEP_LENGTH_METERS = 0.75;

export default function StepCounterScreen() {
  const [steps, setSteps] = useState('');
  const [kcal, setKcal] = useState(null);
  const [km, setKm] = useState(null);
  const [feedback, setFeedback] = useState('');
  const progressAnim = useRef(new Animated.Value(0)).current;

  const onCalculate = () => {
    const stepCount = parseInt(steps, 10);
    if (isNaN(stepCount) || stepCount < 0) {
      setFeedback('Introdu un număr valid de pași.');
      setKcal(null);
      setKm(null);
      animateProgress(0);
      return;
    }

    const caloriesBurned = (stepCount * KCAL_PER_STEP).toFixed(2);
    setKcal(caloriesBurned);

    const kmWalked = ((stepCount * STEP_LENGTH_METERS) / 1000).toFixed(2);
    setKm(kmWalked);

    // Feedback extins
    if (stepCount >= STEP_GOAL * 2) {
      setFeedback('Ești un campion!');
    } else if (stepCount >= STEP_GOAL * 1.5) {
      setFeedback('Incredibil! Ai depășit cu mult obiectivul!');
    } else if (stepCount >= STEP_GOAL) {
      setFeedback('Bravo! Ai depășit obiectivul de pași!');
    } else if (stepCount >= STEP_GOAL * 0.5) {
      setFeedback('Bine! Mai ai puțin până la obiectiv.');
    } else {
      setFeedback('Hai să te miști mai mult!');
    }

    const progress = stepCount / STEP_GOAL;
    animateProgress(progress);
  };

  const animateProgress = (progress) => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 600,
      useNativeDriver: false,
    }).start();
  };

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1, 1.5, 2],
    outputRange: ['0%', '100%', '150%', '200%'],
    extrapolate: 'clamp',
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.mainTitle}>Step Counter</Text>
      <Text style={styles.subTitle}>Introdu pașii tăi pentru azi</Text>

      <TextInput
        style={styles.input}
        placeholder="Număr pași"
        keyboardType="numeric"
        value={steps}
        onChangeText={setSteps}
      />

      <Button title="Calculează" onPress={onCalculate} color="#4682b1" />

      {kcal !== null && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Calorii arse: {kcal} kcal</Text>
          <Text style={styles.resultText}>Distanță parcursă: {km} km</Text>
          <Text style={styles.feedbackText}>{feedback}</Text>

          <View style={styles.progressBarBackground}>
            <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
          </View>

          <Text style={styles.stepsText}>
            {parseInt(steps) || 0} / {STEP_GOAL} pași
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
