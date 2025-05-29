import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 25,
    textAlign: 'center',
    color: '#4682b1',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  button: {
    marginTop: 12,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  workoutName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4682b1',
    marginBottom: 8,
  },
  workoutItem: {
    borderLeftWidth: 6,
    borderLeftColor: '#4682b1',
    backgroundColor: '#eaf4ff',
  },
  exerciseItem: {
    fontSize: 15,
    color: '#555',
    marginLeft: 14,
    marginTop: 4,
  },

  // Modal styles noi, utile pentru edit/delete exercitii
  
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15,
    textAlign: 'center',
    color: '#4682b1',
  },
});
