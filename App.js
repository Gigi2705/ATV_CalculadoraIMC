import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import InfoIMC from './src/components/InfoIMC';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Calculadora IMC' }} />
        <Stack.Screen name="InfoIMC" component={InfoIMC} options={{ title: 'O que é IMC?' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
