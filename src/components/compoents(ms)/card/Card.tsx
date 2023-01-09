import React from 'react';
import {
  Box,
  HStack,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack,
  Image,
  Stack,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {setDATA} from '@src/redux/counter/CounterSlice';
interface Obj {
  name: string;
  id: string;
  email: string;
}
const Card = (obj: Obj) => {
  const datas: any = useSelector((state: any) => state.counter.DATA);
  const displact = useDispatch();
  const HandleDelete = async () => {
    const res = await fetch('http://10.2.50.9:3001/user/delete/' + obj.id, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (data) {
      const newData = datas.filter((i: any) => i.id !== obj.id);
      displact(setDATA(newData));
    }
  };
  return (
    <NativeBaseProvider>
      <Box
        bg="primary.600"
        py="4"
        px="3"
        borderRadius="5"
        rounded="md"
        width={['100%', '30%']}
        maxWidth="100%"
        mt={3}
        key={obj.id}
        h={[' 90%']}
      >
        <HStack justifyContent="space-between">
          <VStack space="2" justifyContent={'space-around'}>
            <Pressable
              rounded="xs"
              bg="primary.400"
              alignSelf="flex-start"
              py="1"
              px="3"
            >
              <Text
                textTransform="uppercase"
                fontSize="sm"
                fontWeight="bold"
                color="white"
              >
                Name : {obj.name}
              </Text>
            </Pressable>
            <Text fontSize="xl" color="white">
              Email : {obj.email}
            </Text>
          </VStack>

          <VStack justifyContent={'flex-end'} space="2">
            <Stack justifyContent={'center'} alignItems="center" space={2}>
              <Image
                source={{
                  uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
                }}
                alt="Aang flying and surrounded by clouds"
                height="100"
                rounded="full"
                width="100"
              />
              <Text
                color="white"
                fontSize="sm"
                bg={'red.500'}
                rounded="lg"
                textAlign="center"
                onPress={HandleDelete}
                width="5rem"
                py={1}
              >
                Delete
              </Text>
            </Stack>
          </VStack>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Card;
