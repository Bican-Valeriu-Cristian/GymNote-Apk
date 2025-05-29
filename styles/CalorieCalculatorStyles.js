import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 20,
    color: '#4682b1',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
    gap: 10,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#e0ecff',
    marginRight: 10,
  },
  selected: {
    backgroundColor: '#4682b1',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  resultBox: {
    marginTop: 25,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#eaf4ff',
    alignItems: 'center',
    shadowColor: '#1e90ff',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  resultText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4682b1',
    textAlign: 'center',
  },
});
