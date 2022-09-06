import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  preScreen: {
    height: '100%',
    justifyContent: 'space-between',
    // borderColor: 'white',
    // borderStyle: 'solid',
    // borderWidth: 1,
    backgroundColor: '#14245b',
  },
  Texter: {
    fontSize: 50,
  },
  SkipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },

  SkipBorder: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    width: 60,
    height: 30,
    backgroundColor: 'white',
    marginHorizontal: 25,
    borderRadius: 9,
  },
  Skip: {
    textAlign: 'center',
    color: '#fe724b',
    fontSize: 15,
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 25,
  },
  logoOrange: {
    marginRight: 10,
    width: 65,
    height: 65,
  },
  mainTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Title: {
    fontSize: 55,
    color: 'white',
    textAlign: 'center',
  },
  UniqueE: {
    color: '#fe724b',
  },
  Slogan: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '400',
  },
  BottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 55,
  },
  Register: {
    backgroundColor: '#fe724b',
    color: 'white',
    width: '40%',
    height: 50,
    marginRight: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RegisterText: {
    color: 'white',
    fontSize: 17,
  },
  Login: {
    backgroundColor: 'white',
    width: '40%',
    height: 50,
    marginLeft: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginText: {
    color: '#fe724b',
    fontSize: 17,
  },
});
