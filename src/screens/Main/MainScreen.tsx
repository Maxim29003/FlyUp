import MainLayout from '@layouts/MainLayout/MainLayout';
import UIText from '@ui/UIText/UIText';
import { Spacer } from '@ui/Spacer/Spacer';
import Column from '@layouts/Column/Column';
import UIButton from '@ui/UIButton/UIButton';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';

const MainScreen = () => {
  const navigation = useAppNavigation();
  return (
    <MainLayout>
      <Spacer vertical={30} />
      <Column justify="space-between" flex={1} align='center'>
        <Column align="center">
          <UIText>Fly</UIText>
          <Spacer vertical={4} />
          <UIText>Up</UIText>
        </Column>
        <UIButton variant="primary" text="СТАРТ" onPress={() => navigation.navigate(SCREENS.GAME)} />
      </Column>
      <Spacer vertical={30} />
    </MainLayout>
  );
};

export default MainScreen;

