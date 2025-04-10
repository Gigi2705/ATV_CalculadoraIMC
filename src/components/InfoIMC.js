import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function InfoIMC() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O que é IMC?</Text>
      <Text style={styles.text}>
        O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.
        Ele é calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).
      </Text>

      <Text style={styles.subTitle}>Classificações do IMC:</Text>
      <Text style={styles.text}>• Abaixo de 18.5: Abaixo do peso</Text>
      <Text style={styles.text}>• 18.5 a 24.9: Peso normal</Text>
      <Text style={styles.text}>• 25.0 a 29.9: Sobrepeso</Text>
      <Text style={styles.text}>• 30.0 a 34.9: Obesidade grau 1</Text>
      <Text style={styles.text}>• 35.0 a 39.9: Obesidade grau 2</Text>
      <Text style={styles.text}>• 40.0 ou mais: Obesidade grau 3 (mórbida)</Text>

      <Text style={styles.subTitle}>Por que é importante?</Text>
      <Text style={styles.text}>
        O IMC ajuda a identificar riscos de saúde relacionados ao peso corporal, como diabetes tipo 2, hipertensão e doenças cardíacas.
      </Text>

      <Text style={styles.subTitle}>Observação:</Text>
      <Text style={styles.text}>
        O IMC é uma ferramenta útil, mas não leva em consideração massa muscular, idade, sexo e outros fatores. Sempre procure um profissional de saúde para avaliação completa.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 6,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});
