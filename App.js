import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './components/Loading';
import RootNavigation from './navigation/RootNavigation';
import AuthProvider from './context/AuthContext';

export default function App() {

  const [loaded] = useFonts({
    'DmSans': require('./assets/fonts/DMSans-Medium.ttf'),
    'DmSans-B': require('./assets/fonts/DMSans-Bold.ttf'),
    'DmSans-Sm': require('./assets/fonts/DMSans-SemiBold.ttf'),
  })
  if (!loaded) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <SafeAreaView style={styles.container}>
          <RootNavigation />
        </SafeAreaView>
      </AuthProvider>
      <StatusBar style='light' />
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
