import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function IdealWeight({ height }) {
  if (!height) return null;

  const min = 18.5 * (height * height);
  const max = 24.9 * (height * height);

  return (
    <Text style={styles.text}>
      Peso ideal: entre <Text style={styles.bold}>{min.toFixed(1)}kg</Text> e <Text style={styles.bold}>{max.toFixed(1)}kg</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginTop: 8,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
  },
});
