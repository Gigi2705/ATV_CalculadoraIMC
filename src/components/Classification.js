import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function IMCClassification({ imc }) {
  let classification = '';
  let classificationStyle = styles.default;

  if (imc < 18.5) {
    classification = 'Abaixo do peso';
    classificationStyle = styles.abaixoPeso;
  } else if (imc < 25) {
    classification = 'Peso normal';
    classificationStyle = styles.pesoNormal;
  } else if (imc < 30) {
    classification = 'Sobrepeso';
    classificationStyle = styles.sobrepeso;
  } else if (imc < 35) {
    classification = 'Obesidade grau 1';
    classificationStyle = styles.obesidadeGrau1;
  } else if (imc < 40) {
    classification = 'Obesidade grau 2';
    classificationStyle = styles.obesidadeGrau2;
  } else {
    classification = 'Obesidade grau 3 (obesidade mórbida)';
    classificationStyle = styles.obesidadeGrau3;
  }

  return (
    <Text style={styles.classification}>
      Classificação: <Text style={[styles.bold, classificationStyle]}>{classification}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    color: '#555', 
  },
  classification: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  bold: {
    fontWeight: 'bold',
  },
  abaixoPeso: {
    color: '#FFC222',
  },
  pesoNormal: {
    color: '#008000',
  },
  sobrepeso: {
    color: '#FE8330',
  },
  obesidadeGrau1: {
    color: '#FF0000',
  },
  obesidadeGrau2: {
    color: '#800000',
  },
  obesidadeGrau3: {
    color: '#330000',
  },
});
