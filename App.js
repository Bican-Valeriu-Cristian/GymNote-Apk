import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import WorkoutHistoryScreen from './screens/WorkoutHistoryScreen';
import StepCounterScreen from './screens/StepCounterScreen';
import StopwatchScreen from './screens/StopwatchScreen';
import BMICalculatorScreen from './screens/BMICalculatorScreen';
import CalorieCalculatorScreen from './screens/CalorieCalculatorScreen';
import NutritionScreen from './screens/NutritionScreen';
import EducationScreen from './screens/EducationScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Calorie Calculator" component={CalorieCalculatorScreen} />
        <Stack.Screen name="Nutrition" component={NutritionScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Workout History" component={WorkoutHistoryScreen} />
        <Stack.Screen name="Step Counter" component={StepCounterScreen} />
        <Stack.Screen name="Stopwatch" component={StopwatchScreen} />
        <Stack.Screen name="BMI Calculator" component={BMICalculatorScreen} />
        <Stack.Screen name="Educatie" component={EducationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Workout History':
              iconName = 'barbell';
              break;
            case 'Step Counter':
              iconName = 'walk';
              break;
            case 'Stopwatch':
              iconName = 'timer';
              break;
            case 'BMI Calculator':
              iconName = 'body';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout History" component={WorkoutHistoryScreen} />
      <Tab.Screen name="Step Counter" component={StepCounterScreen} />
      <Tab.Screen name="Stopwatch" component={StopwatchScreen} />
      <Tab.Screen name="BMI Calculator" component={BMICalculatorScreen} />
    </Tab.Navigator>
  );
}


