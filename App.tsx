import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import {Dimensions, StyleSheet} from 'react-native';
// import config from './nativebase.config';
import {Root} from './src/components/RootComponent';
import {BaseTheme} from './src/theme';
import {Provider} from 'react-redux';
import {store} from '@src/redux/Store';

const {height} = Dimensions.get('window');
export default function App() {
  return (
    <NativeBaseProvider theme={BaseTheme}>
      <View style={styles.screen}>
        <Provider store={store}>
          <Root />
        </Provider>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  screen: {
    height: height,
  },
});
