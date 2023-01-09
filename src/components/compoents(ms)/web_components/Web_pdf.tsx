import {Button, HStack} from 'native-base';
import React from 'react';
import {Constant} from '../Constant';
interface Porps {
  navigation: any;
}

const Web_pdf = ({navigation}: Porps) => {
  const source = 'data:application/pdf;base64,' + Constant.base64;
  return (
    <HStack h="100%">
      <embed
        src="https://www.africau.edu/images/default/sample.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      />
      <embed src={source}></embed>
      <Button
        onPress={() => {
          navigation.navigate('View_CRUD');
        }}
      >
        sd
      </Button>
    </HStack>
  );
};

export default Web_pdf;
