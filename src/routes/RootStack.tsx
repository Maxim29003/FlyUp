import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, SCREENS } from './navigations.types';
import MainScreen from '@screens/Main/MainScreen';
import GameScreen from '@screens/Game/GameScreen';
import ResultScreen from '@screens/Record/RecordScreen';
import Header from '@layouts/Header/Header';
import SettingsScreen from '@screens/Settings/SettingsScreen';
import RecordScreen from '@screens/Record/RecordScreen';
import StatisticsScreen from '@screens/Statistics/StatisticsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.MAIN}>
      <Stack.Screen
        name={SCREENS.MAIN}
        component={MainScreen}
        options={{
          header: () => <Header variant="main" />,
        }}
      />
      <Stack.Screen
        name={SCREENS.GAME}
        component={GameScreen}
        options={{
          header: () => <Header variant="game" />,
          gestureEnabled: false,
          fullScreenGestureEnabled: false,
        }}
      />
      <Stack.Screen
        name={SCREENS.RESULT}
        component={ResultScreen}
        options={{
          header: () => <Header variant="back" />,
        }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{
          header: () => <Header variant="back" />,
        }}
      />
      <Stack.Screen
        name={SCREENS.RECORD}
        component={RecordScreen}
        options={{
          header: () => <Header variant="back" />,
        }}
      />
      <Stack.Screen
        name={SCREENS.STATISTIC}
        component={StatisticsScreen}
        options={{
          header: () => <Header variant="back" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
