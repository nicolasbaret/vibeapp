import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/colors';
import { gameServer } from '../utils/gameServer';

type SetupScreenProps = {
  route: {
    params: {
      players: number;
    };
  };
  navigation: any;
};

export default function SetupScreen({ route, navigation }: SetupScreenProps) {
  const { players } = route.params;
  console.log('Current player count from server:', gameServer.getPlayerCount());
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How To Play</Text>
        
        <View style={styles.rulesContainer}>
          <Text style={styles.rule}>1. Players sit in a circle</Text>
          <Text style={styles.rule}>2. Assign player numbers to everyone</Text>
          <Text style={styles.rule}>3. Each turn, players will be prompted with an action</Text>
          <Text style={styles.rule}>4. Follow the prompts and have fun!</Text>
        </View>

        <TouchableOpacity 
          style={styles.exitButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.exitButtonText}>EXIT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 40,
    textShadowColor: COLORS.glow,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  rulesContainer: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.metallic,
    padding: 20,
  },
  rule: {
    color: COLORS.primary,
    fontSize: 24,
    marginVertical: 15,
    lineHeight: 32,
  },
  exitButton: {
    backgroundColor: COLORS.metallic,
    padding: 15,
    borderRadius: 12,
    width: '60%',
    alignItems: 'center',
    shadowColor: COLORS.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 40,
  },
  exitButtonText: {
    color: COLORS.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
});