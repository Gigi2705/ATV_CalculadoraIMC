import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Title from '../components/Title';
import FormIMC from '../components/FormIMC';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
      <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('InfoIMC')}>
        <Text style={styles.infoText}>Saiba mais sobre o IMC</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  infoButton: {
    marginTop: 30,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
