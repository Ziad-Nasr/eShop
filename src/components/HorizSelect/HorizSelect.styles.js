import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  size: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  sizetext: {
    paddingHorizontal: 10,
    color: 'grey',
    fontWeight: '700',
    fontSize: 15,
  },
  Shadow: {
    shadowColor: '#bfc0be',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    marginBottom: 10,
  },
});
