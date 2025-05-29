import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles/NutritionStyles';

export default function NutritionScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>Recomandări Nutriționale</Text>

      <Image
        source={require('../assets/nutrition.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.sectionTitle}>Principii de bază</Text>
      <Text style={styles.text}>✔ Mănâncă echilibrat: proteine, carbohidrați, grăsimi sănătoase</Text>
      <Text style={styles.text}>✔ Hidratează-te – 2L de apă/zi</Text>
      <Text style={styles.text}>✔ Evită zahărul procesat și alimentele ultraprocesate</Text>
      <Text style={styles.text}>✔ Mese regulate (3 mese + 1-2 gustări)</Text>

      <Text style={styles.sectionTitle}>Exemple de mese sănătoase</Text>

      <Text style={styles.mealTitle}>🥣 Mic dejun</Text>
      <Text style={styles.text}>• Ovăz cu lapte vegetal, banană și semințe de chia</Text>
      <Text style={styles.text}>• Ouă fierte + avocado + roșii cherry</Text>

      <Text style={styles.mealTitle}>🥗 Prânz</Text>
      <Text style={styles.text}>• Piept de pui la grătar cu orez brun și broccoli</Text>
      <Text style={styles.text}>• Salată de năut cu legume proaspete și ulei de măsline</Text>

      <Text style={styles.mealTitle}>🍲 Cină</Text>
      <Text style={styles.text}>• Somon la cuptor cu cartofi dulci și spanac</Text>
      <Text style={styles.text}>• Supă cremă de legume cu crutoane integrale</Text>

      <Text style={styles.mealTitle}>🍏 Gustări</Text>
      <Text style={styles.text}>• O mână de migdale crude</Text>
      <Text style={styles.text}>• Iaurt grecesc cu fructe de pădure </Text>
    </ScrollView>
  );
}
