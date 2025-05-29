import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4682b1',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 30,
    alignItems: 'center',
  },  
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },

  resultText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#444',
  },
  categoryText: {
    fontSize: 20,
    color: '#666',
    marginTop: 8,
  },
});
