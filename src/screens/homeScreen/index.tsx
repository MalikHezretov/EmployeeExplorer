import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {employeeDetailsUrl} from '../../utils';
import {styles} from './styles';

const Home = () => {
  const [employeeName, setEmployeeName] = useState<string | undefined>(
    undefined
  );
  const [directSubordinats, setDirectSubordinates] = useState<Array<any> | undefined>(
    undefined
  );

  const searchForAnEmployee = async () => {
    try {
      let response = await fetch(employeeDetailsUrl(employeeName));
      let result = await response.json();
      console.log('result: ', result);
      setDirectSubordinates(result)
    } catch (error) {
      console.error(error);
    }
  };
  console.log('employeeName: ', employeeName);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.containerStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Type employee name"
            onChangeText={(value: string) => setEmployeeName(value)}
            defaultValue={employeeName}
          />
          <TouchableOpacity
            onPress={() => searchForAnEmployee()}
            style={styles.searchButtonStyle}>
            <Text style={styles.searchButtonLabelColor}>Search</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
