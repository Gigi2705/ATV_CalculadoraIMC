import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import IMCClassification from './Classification';
import IdealWeight from './IdealWeight';

export default function FormIMC() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setImc] = useState(null);

  const formatInput = (value) => {
    return value.replace(',', '.').replace(/[^0-9.]/g, '');
  };

  const calculateIMC = () => {
    const altura = parseFloat(formatInput(height));
    const peso = parseFloat(formatInput(weight));
    if (!altura || !peso) return;

    const result = peso / (altura * altura);
    setImc(result);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Altura (ex: 1.70)</Text>
      <TextInput
        placeholder="Digite sua altura em metros"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
        style={styles.input}
      />

      <Text style={styles.label}>Peso (ex: 70)</Text>
      <TextInput
        placeholder="Digite seu peso em kg"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={calculateIMC}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

      {imc && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Seu IMC: {imc.toFixed(2)}</Text>
          <IMCClassification imc={imc} />
          <IdealWeight height={parseFloat(formatInput(height))} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
});
