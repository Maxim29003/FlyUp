import HomeIcon from '@assets/svg/HomeIcon';
import RefreshIcon from '@assets/svg/RefreshIcon';
import useAppNavigation from '@hooks/useAppNavigation';
import Column from '@layouts/Column/Column';
import Row from '@layouts/Row/Row';
import { SCREENS } from '@routes/navigations.types';
import { gameStore } from '@store/GameStore';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIButton from '@ui/UIButton/UIButton';
import UIText from '@ui/UIText/UIText';
import { View } from 'react-native';
import { styles } from './styles';

const GameOverOverlay = ({ onRestart }: { onRestart: () => void }) => {
    const navigation = useAppNavigation();
  return (
    <View style={styles.overlay}>
      <Column align="center" justify="center" style={{ width: '80%' }}>
        <UIText
          variant="titleMedium"
          color={Colors.WHITE}
          style={{ textAlign: 'center' }}
        >
          ИГРА ОКОНЧЕНА
        </UIText>

        <Spacer vertical={32} />

        <Row
          align="center"
          justify="space-between"
          style={styles.scoreRow}
        >
          <UIText variant="label" color={Colors.WHITE_50}>
            Очки
          </UIText>
          <UIText variant="heading" color={Colors.GREEN}>
            {gameStore.score}
          </UIText>
        </Row>
        <Spacer vertical={32} />

        <UIButton
          variant="primary"
          text="Еще раз"
          onPress={onRestart}
          icon={<RefreshIcon />}
        />
        <Spacer vertical={12} />

        <UIButton
          variant="secondary"
          text="Меню"
          onPress={() => {
            navigation.navigate(SCREENS.MAIN);
          }}
          icon={<HomeIcon />}
        />
      </Column>
    </View>
  );
};

export default GameOverOverlay;
