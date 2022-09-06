import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
  },
  card: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    height: 400,
    borderRadius: 20,
    justifyContent: 'space-around',
    // alignItems: 'center',
    paddingHorizontal: 15,
  },
  NotificationImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
  Title: {
    color: 'black',
    fontSize: 35,
    fontWeight: '500',
    // marginBottom: 5,
    textAlign: 'center',
  },
  Text: {
    textAlign: 'center',
    marginVertical: 2,
  },
  cardContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  SkipContainer: {
    width: 45,
    alignItems: 'center',
    width: '100%',
    marginTop: 15,

    // textAlign: 'center',
  },
  Skip: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
  },
});
