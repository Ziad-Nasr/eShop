import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  black: {
    color: 'black',
  },
  body: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  HeadTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  DeliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  DeliveryPickUp: {
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
  },
  Location: {
    backgroundColor: 'white',
    height: 95,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  pin: {
    width: 25,
    height: 25,
    marginTop: 5,
    marginRight: 5,
    marginLeft: 10,
  },
  Link: {
    textDecorationLine: 'underline',
  },
  Prices: {
    marginBottom: 20,
  },
  OrangeButton: {
    marginBottom: 25,
  },
});
