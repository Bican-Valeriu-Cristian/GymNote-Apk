import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fbf9',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2e7d32',
    textAlign: 'center',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 100, // Spațiu extra jos pentru a evita suprapunerea
    backgroundColor: '#f8f9fa',
  },
  
  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#388e3c',
    marginTop: 12,
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#4caf50',
  },
  text: {
    fontSize: 16,
    color: '#444',
    marginBottom: 6,
  },
});
