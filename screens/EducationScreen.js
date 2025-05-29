import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  Modal, ScrollView,
} from 'react-native';
import styles from '../styles/EducationStyles'; // stiluri externe

const articles = [
    {
        id: '1',
        title: 'Cum să crești masa musculară',
        summary: 'Sfaturi practice pentru a construi masă musculară eficient.',
        content: `1. Mănâncă mai multe calorii decât arzi.\n2. Consumă suficiente proteine.\n3. Fă exerciții de forță regulate.\n4. Dormi 7-8 ore pe noapte.\n5. Fii consecvent și monitorizează progresul.`
      },
      {
        id: '2',
        title: 'De ce somnul contează',
        summary: 'Somnul afectează performanța, recuperarea și sănătatea generală.',
        content: `• Lipsa somnului reduce forța și concentrarea.\n• În timpul somnului, mușchii se recuperează.\n• Minimum 7-9 ore pe noapte sunt recomandate.\n• Evită ecranele și cofeina înainte de somn.`
      },
      {
        id: '3',
        title: 'Importanța încălzirii înainte de antrenament',
        summary: 'Evită accidentările și crește performanța prin încălzire.',
        content: `• Încălzirea pregătește mușchii și articulațiile pentru efort.\n• Scade riscul de accidentări și întinderi musculare.\n• Crește fluxul sanguin și performanța generală.\n• Exemple: 5-10 minute de mers rapid, sărituri, rotații ale brațelor.`
      },
      {
        id: '4',
        title: 'Greșeli frecvente în antrenamentele de forță',
        summary: 'Ce trebuie să eviți pentru a progresa corect.',
        content: `• Formă greșită: pune accent pe tehnică, nu pe greutăți mari.\n• Fără pauze suficiente: mușchii au nevoie de timp pentru recuperare.\n• Neglijarea zilelor de odihnă: odihna ajută la creșterea musculară.\n• Nu notezi progresul: ține evidența greutăților și a repetărilor.`
      },
      {
        id: '5',
        title: 'Hidratarea în timpul antrenamentului',
        summary: 'Apa influențează energia și recuperarea.',
        content: `• Pierzi apă prin transpirație, chiar dacă nu simți sete.\n• Bea câteva înghițituri la fiecare 15-20 de minute de efort.\n• Deshidratarea scade energia și coordonarea musculară.\n• După antrenament, rehidratează-te complet.`
      }
];

export default function EducationScreen() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openArticle = (article) => setSelectedArticle(article);
  const closeArticle = () => setSelectedArticle(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tips & Articole</Text>

      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openArticle(item)}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.summary}>{item.summary}</Text>
          </TouchableOpacity>
        )}
      />

      <Modal visible={!!selectedArticle} animationType="slide" onRequestClose={closeArticle}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{selectedArticle?.title}</Text>
          <ScrollView>
            <Text style={styles.modalContent}>{selectedArticle?.content}</Text>
          </ScrollView>
          <TouchableOpacity onPress={closeArticle} style={styles.closeButton}>
            <Text style={styles.closeText}>Închide</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
