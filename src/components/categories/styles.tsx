import {StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: calcWidth(25),
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: calcHeight(30),
    borderRadius: 6,
    marginHorizontal: calcWidth(10),
    paddingHorizontal: calcWidth(5),
  },
  title: {
    color: colors.black,
    fontSize: calcFont(14),
  },
});

export default styles;
