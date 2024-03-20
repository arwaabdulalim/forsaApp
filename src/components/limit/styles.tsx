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
    height: calcHeight(52),
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
    width: calcWidth(35),
    height: calcHeight(40),
    marginRight: calcWidth(15),
  },
  title: {
    fontSize: calcFont(16),
    color: colors.mustard,
  },
  desc: {
    fontSize: calcFont(12),
    color: colors.mustard,
  },
});

export default styles;
