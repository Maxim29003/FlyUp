import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './routes/RootStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { gameStore } from '@store/GameStore';

export default function App() {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <NavigationContainer
            onReady={async () => {
              await BootSplash.hide({ fade: true });
              gameStore.reset()
            }}
          >
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
}
