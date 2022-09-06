import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  black: {
    color: 'black',
  },
  secondary: {
    color: 'gray',
  },
  orange: {
    color: '#fe724b',
  },
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  topContainer: {
    backgroundColor: '#eaeaea',
    width: '100%',
    height: '44%',
    // position: 'relative',
  },
  frontImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  heart: {
    width: 12,
    height: 12,
  },
  whiteCircleHeart: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MiddleContainer: {
    marginHorizontal: 25,
    justifyContent: 'space-between',
    height: '56%',
  },
  itemTitle: {
    textAlign: 'center',
  },
  card: {
    maxWidth: 65,
    maxHeight: 65,
    marginRight: 30,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  itemList: {
    // alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'flex-start',
  },
  cardItems: {
    maxWidth: 65,
    maxHeight: 65,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  star: {
    width: 15,
    height: 15,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 150,
    marginBottom: 5,
  },
  MainName: {
    fontSize: 27,
    fontWeight: '500',
  },
  cost: {
    fontSize: 27,
    fontWeight: '800',
    marginRight: 10,
  },
  selectSize: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
  },
  sizeContainer: {},
  size: {
    flexDirection: 'row',
    borderColor: '#eeeeee',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
  sizetext: {
    color: 'grey',
    fontWeight: '600',
    fontSize: 15,
  },

  itemcounting: {
    flexDirection: 'row',
    maxWidth: '35%',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    marginRight: 10,
  },
  plusMinus: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingHorizontal: 8,
    marginHorizontal: 5,
  },
  plusMinusText: {
    fontSize: 20,
    fontWeight: '500',
  },
  count: {
    fontSize: 20,
    fontWeight: '500',
  },
  BottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 10,
  },
});
