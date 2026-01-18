# FlyUp

Небольшая аркадная игра на React Native: управляйте самолетом, уклоняйтесь от встречных объектов и набирайте очки. В приложении есть экран игры, статистика и рекорды, а также настройки скорости.

## Возможности

- Аркадный геймплей с управлением свайпом
- Подсчет очков и экран завершения игры
- Статистика попыток и рекорды
- Настройки скорости
- Локальное сохранение данных

## Использованные библиотеки

- React Native, React
- React Navigation (stack + элементы навигации)
- MobX + mobx-react-lite
- mobx-persist-store
- react-native-mmkv (локальное хранилище)
- react-native-reanimated + react-native-worklets
- react-native-gesture-handler
- react-native-bootsplash
- react-native-svg
- react-native-community/slider
- react-native-uuid

## Запуск проекта

Перед запуском убедитесь, что окружение настроено по гайду React Native: https://reactnative.dev/docs/set-up-your-environment

### Установка зависимостей

```sh
npm install
```

### Запуск Metro

```sh
npm start
```

### Android

```sh
npm run android
```

### iOS

Для iOS установите CocoaPods зависимости:

```sh
bundle install
bundle exec pod install
```

Затем запустите приложение:

```sh
npm run ios
```
