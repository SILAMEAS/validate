import {
  Box,
  Button,
  useColorMode,
  useColorModeValue,
  Pressable,
  Modal,
  FormControl,
  Input,
  HStack,
  FlatList,
} from 'native-base';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Card from '@src/components/compoents(ms)/card/Card';
// url
const URL = 'http://10.2.50.9:3001';
// import Card from '../../components/SilaComponents/Card';
import {setDATA, setOne} from '@src/redux/counter/CounterSlice';

// add user
function AddUser({name, email, setname, setemail}: any) {
  const datas: any = useSelector((state: any) => state.counter.DATA);
  const [modalVisible, setModalVisible] = React.useState(false);
  const displach = useDispatch();

  const AddUser = async () => {
    const dataa = {
      name,
      email,
    };
    const res = await fetch(URL + '/user/create', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(dataa),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      setModalVisible(false);
      displach(setDATA([...datas, data]));
    }
  };
  return (
    <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>New User</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={name}
                onChangeText={val => setname(val)}
                _light={{
                  bg: 'blue.900',
                  _hover: {
                    bg: 'Gray.200',
                  },
                  _focus: {
                    bg: 'Gray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'Gray.800',
                  _hover: {
                    bg: 'Gray.900',
                  },
                  _focus: {
                    bg: 'Gray.900:alpha.70',
                  },
                }}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={val => setemail(val)}
                maxLength={16}
                _light={{
                  bg: 'blue.900',
                  _hover: {
                    bg: 'Gray.200',
                  },
                  _focus: {
                    bg: 'Gray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'Gray.800',
                  _hover: {
                    bg: 'Gray.900',
                  },
                  _focus: {
                    bg: 'Gray.900:alpha.70',
                  },
                }}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={AddUser}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <HStack space="4" justifyContent={'flex-end'}>
        <Button
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Add user
        </Button>
      </HStack>
    </>
  );
}
//update user
const Update = ({
  modalVisible,
  setModalVisible,
  email,
  name,
  setname,
  setemail,
  id,
}: any) => {
  // modal one of user

  const Update = async (id: any) => {
    // const datas: any = useSelector((state: any) => state.counter.DATA);
    // const displact = useDispatch();

    const dataa = {
      name,
      email,
    };
    console.log(id);
    const res = await fetch(URL + '/user/update/' + id, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(dataa),
    });
    const data = await res.json();
    console.log(data);

    if (data) {
      setModalVisible(false);
    }
  };
  return (
    <>
      {/* Profile Detail */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Profile Details {id}</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                value={name}
                onChangeText={val => setname(val)}
                colorScheme="red"
                _light={{
                  bg: 'blue.900',
                  _hover: {
                    bg: 'Gray.200',
                  },
                  _focus: {
                    bg: 'Gray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'Gray.800',
                  _hover: {
                    bg: 'Gray.900',
                  },
                  _focus: {
                    bg: 'Gray.900:alpha.70',
                  },
                }}
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={val => setemail(val)}
                _light={{
                  bg: 'blue.900',
                  _hover: {
                    bg: 'Gray.200',
                  },
                  _focus: {
                    bg: 'Gray.200:alpha.70',
                  },
                }}
                _dark={{
                  bg: 'Gray.800',
                  _hover: {
                    bg: 'Gray.900',
                  },
                  _focus: {
                    bg: 'Gray.900:alpha.70',
                  },
                }}
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  Update(id);
                }}
              >
                Update
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
interface Props {
  navigation: any;
}
const CRUD = ({navigation}: Props) => {
  const {GetOne}: any = useSelector((state: any) => state.counter);
  const [name, setname] = React.useState('');
  const [email, setemail] = React.useState('');
  const datas: any = useSelector((state: any) => state.counter.DATA);

  const displact = useDispatch();
  // mode light or dark
  const {toggleColorMode} = useColorMode();
  const text = useColorModeValue('Light', 'Dark');
  const bg = useColorModeValue('warmGray.50', 'coolGray.800');
  // get all users
  const GetData = async () => {
    try {
      const res = await fetch(URL + '/user');
      const data = await res.json();
      displact(setDATA(data));
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  const [modalVisible, setModalVisible] = React.useState(false);
  // get one data
  const GetId = (i: any) => {
    displact(setOne(i));
    setname(i.name);
    setemail(i.email);
    setModalVisible(!modalVisible);
  };
  // run first when open in component
  useEffect(() => {
    GetData();
  }, [modalVisible]);
  return (
    <>
      <Box
        bg={bg}
        _text={text}
        h={'90%'}
        w={'90%'}
        mx={'auto'}
        overflowY="scroll"
      >
        <AddUser
          name={name}
          setname={setname}
          email={email}
          setemail={setemail}
        />
        <FlatList
          data={datas}
          renderItem={({item}: any) => (
            <Pressable
              onPress={() => {
                GetId(item);
              }}
              key={item.id}
            >
              <Card name={item.name} email={item.email} id={item.id} />
            </Pressable>
          )}
        />
        {/* {datas.map((i: any) => {
     return (
       <Pressable
         onPress={() => {
           GetId(i);
         }}
         key={i.id}
       >
         <Card name={i.name} email={i.email} id={i.id} />
       </Pressable>
     );
   })} */}
        <Update
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          name={name}
          setname={setname}
          email={email}
          setemail={setemail}
          id={GetOne.id}
        />
      </Box>
      <Box position={'absolute'} bottom="10">
        <HStack w="100%">
          <Button
            onPress={toggleColorMode}
            mt="10"
            mx="auto"
            w={[24, 24, 48]}
            h={[12, 12, 12]}
          >
            Change mode
          </Button>
          <Button onPress={toggleColorMode} mt="10" mx="auto">
            CRUD
          </Button>
          <Button
            onPress={() => {
              navigation.navigate('View_PDF');
            }}
            mt="10"
            mx="auto"
          >
            PDF
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default CRUD;
