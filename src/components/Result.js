import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IMCClassification from './IMCClassification';

const Result = ({ imc }) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.result}>Seu IMC é: {imc}</Text>
      <IMCClassification imc={parseFloat(imc)} />
    </View>
  );
};

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  result: {
    fontSize: 24,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Result;
