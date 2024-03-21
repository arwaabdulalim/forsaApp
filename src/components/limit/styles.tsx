import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: calcWidth(315),
    height: Platform.OS === 'ios' ? calcHeight(55) : calcHeight(70),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: calcWidth(15),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.mustard,
    alignSelf: 'center',
    marginVertical: calcHeight(14),
  },
  img: {
    width: calcWidth(30),
    height: calcHeight(30),
    marginRight: calcWidth(30),
  },
  title: {
    fontSize: calcFont(14),
    color: colors.mustard,
    fontFamily: 'segoeuithis',
  },
  desc: {
    fontSize: calcFont(12),
    color: colors.mustard,
    fontFamily: 'segoeuithis',
  },
});

export default styles;
