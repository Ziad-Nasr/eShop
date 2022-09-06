import {StyleSheet} from 'react-native';
import {camelCase} from 'react-native-svg/lib/typescript/xml';

export default styles = StyleSheet.create({
  black: {
    color: 'black',
  },
  secondary: {
    color: 'gray',
  },
  body: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    height: '100%',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  whiteLogo: {
    backgroundColor: 'white',
    borderRadius: 7,
    height: 45,
    width: 45,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    // marginTop: -8,
  },
  logoInfo: {
    flexDirection: 'row',
  },
  Cards: {
    marginTop: 10,
  },
  card: {
    marginVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderBottomColor: '#f6f6f6',
    borderWidth: 0.3,
    opacity: 0.2,
    marginVertical: 10,
  },
  OrangeButton: {
    marginVertical: 15,
  },
  newCard: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 7,
    marginTop: 20,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
  CardNew: {
    marginHorizontal: 22,
    marginVertical: 20,
  },
  form: {
    marginBottom: 15,
  },
  NewCardSubmitContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
  NewCardSubmit: {
    width: 75,
    height: 35,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fe7052d6',
    justifyContent: 'center',
  },
  ButtonSubmit: {
    fontSize: 17,
    color: 'black',
  },
});
