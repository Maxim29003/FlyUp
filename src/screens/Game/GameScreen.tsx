import MainLayout from '@layouts/MainLayout/MainLayout';
import { Label, useHeaderHeight } from '@react-navigation/elements';
import { gameStore } from '@store/GameStore';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useFrameCallback,
  useAnimatedReaction,
} from 'react-native-reanimated';

import GameOverOverlay from './components/GameOverOverlay/GameOverOverlay';
import { useFocusEffect } from '@react-navigation/native';
import EnemyPlaneIcon from '@assets/svg/EnemyPlaneIcon';
import PlaneIcon from '@assets/svg/PlaneIcon';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { scheduleOnRN } from 'react-native-worklets';
import { styles } from './styles';

const GameScreen = observer(() => {
  const isRunning = useSharedValue(false);
  const score = useSharedValue(gameStore.score);
  const isGameOver = useSharedValue(false);
  const { width, height } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const gameHeight = Math.max(0, height - headerHeight - insets.bottom);
  const speed = 500;
  const lanes = 5;
  const laneWidth = width / lanes;
  const enemyPlaneSize = laneWidth * 0.8;

  const planeSize = Math.min(width * 0.4, 200);

  const planeX = useSharedValue(width / 2 - planeSize / 2);
  const planeY = 80;
  const planeTop = gameHeight - planeY - planeSize;

  const randomX = () => {
    'worklet';
    const lane = Math.floor(Math.random() * lanes);
    return lane * laneWidth + (laneWidth - enemyPlaneSize) / 2;
  };

  const enemyPlaneX = useSharedValue(randomX());
  const enemyPlaneY = useSharedValue(-enemyPlaneSize);

  useFocusEffect(
    useCallback(() => {
      isRunning.value = true;
      reset();
      return () => {
        isRunning.value = false;
      };
    }, []),
  );

  const panGesture = Gesture.Pan().onChange(e => {
    let x = e.absoluteX - planeSize / 2;
    x = Math.max(0, Math.min(width - planeSize, x));
    planeX.value = x;
  });

  useFrameCallback(({ timeSincePreviousFrame }) => {
    'worklet';
    if (isGameOver.value || !isRunning.value) return;
    const delta = timeSincePreviousFrame ?? 16;
    enemyPlaneY.value += (delta * speed) / 1000;

    if (enemyPlaneY.value + enemyPlaneSize > gameHeight) {
      enemyPlaneY.value = -enemyPlaneSize;
      enemyPlaneX.value = randomX();
      score.value += 1;
    }

    if (
      enemyPlaneY.value + enemyPlaneSize >= planeTop &&
      enemyPlaneY.value <= planeTop + planeSize &&
      enemyPlaneX.value + enemyPlaneSize >= planeX.value &&
      enemyPlaneX.value <= planeX.value + planeSize
    ) {
      isGameOver.value = true;
    }
  });

  const onGameOver = useCallback(() => {
    gameStore.gameOver();
  }, []);

  const onIncrement = useCallback(() => {
    gameStore.increment();
  }, []);

  const reset = () => {
    isGameOver.value = false;
    planeX.value = width / 2 - planeSize / 2;
    enemyPlaneY.value = -enemyPlaneSize;
    gameStore.reset();
  };

  useAnimatedReaction(
    () => isGameOver.value,
    (value, prev) => {
      'worklet';
      if (value && !prev) {
        console.log('game over');
        scheduleOnRN(onGameOver);
      }
    },
  );

  useAnimatedReaction(
    () => score.value,
    (value, prev) => {
      'worklet';
      if (prev !== null && value > prev) {
        console.log('increment', value);
        scheduleOnRN(onIncrement);
      }
    },
  );

  const enemyPlaneStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: enemyPlaneY.value },
      { translateX: enemyPlaneX.value },
      { rotate: '180deg' },
    ],
  }));

  const planeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: planeX.value }],
  }));

  const AnimatedEnemyPlane = Animated.createAnimatedComponent(EnemyPlaneIcon);
  const AnimatedPlane = Animated.createAnimatedComponent(PlaneIcon);

  return (
    <MainLayout>
      <GestureDetector gesture={panGesture}>
        <View style={styles.absoluteFill}>
          <AnimatedEnemyPlane
            width={enemyPlaneSize}
            height={enemyPlaneSize}
            style={[enemyPlaneStyle, styles.enemyPlane]}
          />
          <AnimatedPlane
            width={planeSize}
            height={planeSize}
            style={[planeStyle, styles.plane, { bottom: planeY }]}
          />
        </View>
      </GestureDetector>
      {gameStore.isGameOver && (
        <GameOverOverlay
          onRestart={() => {
            reset();
          }}
        />
      )}
    </MainLayout>
  );
});

export default GameScreen;
