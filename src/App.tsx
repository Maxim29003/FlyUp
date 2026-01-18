import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootStack from './routes/RootStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BootSplash from 'react-native-bootsplash';
import { ErrorBoundary } from '@components/ErrorBoundary/ErrorBoundary';
import { gameStore } from '@store/GameStore';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  if (!gameStore.isHydrated) {
    return null;
  }
  
  return (
    <ErrorBoundary>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
            <RootStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
});


export default App;