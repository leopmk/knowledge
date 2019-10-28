import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}

// para usar o app do reactotron-reacto-native mudar a porta do adb com >> adb reverse tcp:9090 tcp:9090

// const tron = Reactotron.configure().useReactNative().connect({host: '192.168.0.2'});
// para rodar o reactotron-reacto-native diretamente do celular, usar o ip da sua maquina
