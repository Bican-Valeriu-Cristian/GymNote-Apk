import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/StopwatchStyles'; // Asigură-te că fișierul există

export default function StopwatchScreen() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((ms % 1000) / 10).toString().padStart(2, '0');
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 100);
      }, 100);
    }
  };

  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const addLap = () => {
    if (isRunning) {
      setLaps([formatTime(time), ...laps]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stopwatch</Text>
      <Text style={styles.timer}>{formatTime(time)}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: isRunning ? '#ff6347' : '#32cd32' },
          ]}
          onPress={isRunning ? stopStopwatch : startStopwatch}
        >
          <Text style={styles.buttonText}>{isRunning ? 'Stop' : 'Start'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#4682b4' }]} onPress={resetStopwatch}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#8a2be2' }]} onPress={addLap}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>

      {laps.length > 0 && (
        <ScrollView style={styles.lapContainer}>
          {laps.map((lap, index) => (
            <Text key={index} style={styles.lapText}>
              Lap {laps.length - index}: {lap}
            </Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
