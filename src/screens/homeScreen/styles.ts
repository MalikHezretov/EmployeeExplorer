import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  textInputStyle: {
    flex: 0.9,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    marginRight: 12,
    borderRadius: 3,
  },
  searchButtonStyle: {
    height: 50,
    width: 100,
    backgroundColor: '#2196F3',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonLabelColor: {
    color: '#fff',
  },
});
