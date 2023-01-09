import {Box, Button, View} from 'native-base';
import React from 'react';
import {Platform} from 'react-native';
// import {Constant} from '../Constant';

const Moblie_pdf = ({navigation}: any) => {
  if (Platform.OS == 'web') {
    return <div>Web PDF</div>;
  }
  const Pdf = require('react-native-pdf').default;
  const source = {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
    cache: true,
  };
  // const source1 = {uri: 'data:application/pdf;base64,' + Constant.base64};
  return (
    <Box safeArea>
      <View h="100%" width={'100%'}>
        <Pdf
          trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages: any) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page: any) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error: any) => {
            console.log(error);
          }}
          onPressLink={(uri: any) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '100%', height: '100%'}}
        />
        {/* <Pdf
          trustAllCerts={false}
          source={source1}
          onLoadComplete={(numberOfPages: any) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page: any) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error: any) => {
            console.log(error);
          }}
          onPressLink={(uri: any) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={{width: '100%', height: '40%'}}
        /> */}
        <Button
          position={'absolute'}
          bottom="10"
          right={'0'}
          onPress={() => {
            navigation.navigate('View_CRUD');
          }}
        >
          back
        </Button>
      </View>
    </Box>
  );
};

export default Moblie_pdf;
