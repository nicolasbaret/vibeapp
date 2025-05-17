import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupScreen from './src/screens/SetupScreen';
import { COLORS } from './src/constants/colors';
import { gameModel } from './src/models/gameModel';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const handlePlayerSelect = (players: number) => {
    gameModel.initializeGame(players);
    navigation.navigate('Setup', { players });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>VIBE</Text>
      <View style={styles.buttonContainer}>
        {[2, 3, 4, 5, 6, 7, 8].map(num => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePlayerSelect(num)}>
            <Text style={styles.buttonText}>
              {num} PLAYERS
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerShown: false,
            animation: 'fade'
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Setup" component={SetupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 60,
    marginBottom: 40,
    textShadowColor: COLORS.glow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  buttonContainer: {
    width: '80%',
    gap: 12,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: COLORS.metallic,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
