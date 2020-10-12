import * as React from 'react';
import { Provider as PaperProvider} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './src/screens/main/main';
import {name as appName} from './app.json';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F5F5F5',
    accent: '#f1c40f',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
