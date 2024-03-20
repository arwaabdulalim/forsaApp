import {StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';

const styles = StyleSheet.create({
  img: {
    width: calcWidth(98),
    height: calcHeight(82),
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
  },
  userName: {
    fontSize: calcFont(14),
  },
  languageWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginHorizontal: 30,
  },
  downArrow: {
    width: calcWidth(20),
    height: calcHeight(20),
  },
  selectorView: {flexDirection: 'row', justifyContent: 'space-evenly'},
  shareTxt: {
    marginHorizontal: 30,
  },
});
export default styles;
