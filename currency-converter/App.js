import React from 'react'
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home.js';
import { StyleSheet,View } from 'react-native'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Home />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
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
