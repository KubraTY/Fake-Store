import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {flex: 1},
  body_container: {padding: 10},
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
    paddingVertical: 25,
  },
  title: {
    fontWeight: '500',
    paddingVertical: 5,
    color: '#e55100',
    fontSize: 18,
  },
  desc: {
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#707070',
    paddingBottom: 5,
  },
  price: {
    fontWeight: '700',
    fontSize: 22,
    textAlign: 'right',
    color: '#dd2c00',
    paddingVertical: 15,
  },
});
