import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFD384',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
  },
  body_container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
  },
  product_title: {
    fontSize: 18,
    fontWeight: '300',
    padding: 5,
  },
  product_price: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: '500',
    color: '#E14D2A',
  },
});
