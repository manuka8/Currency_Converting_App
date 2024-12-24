import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,ScrollView } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home.js';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Home />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  container: {
    flex: 1,
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
