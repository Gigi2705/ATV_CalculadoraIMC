import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function IMCClassification({ imc }) {
  let classification = '';

  if (imc < 18.5) classification = 'Abaixo do peso';
  else if (imc < 25) classification = 'Peso normal';
  else if (imc < 30) classification = 'Sobrepeso';
  else if (imc < 35) classification = 'Obesidade grau 1';
  else if (imc < 40) classification = 'Obesidade grau 2';
  else classification = 'Obesidade grau 3 (obesidade mórbida)';

  return <Text style={styles.classification}>Classificação: <Text style={styles.bold}>{classification}</Text></Text>;
}

const styles = StyleSheet.create({
  classification: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
});
