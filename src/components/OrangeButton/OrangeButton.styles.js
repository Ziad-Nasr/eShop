import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  Register: {
    backgroundColor: '#fe7052d6',
    color: 'white',
    width: '100%',
    height: 50,
    marginRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  RegisterText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '400',
  },
  Pin: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  // heading: {
  //   fontSize: 18,
  //   fontWeight: '600',
  //   marginBottom: 13,
  // },
});
