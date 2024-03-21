import {StyleSheet, Platform} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: calcWidth(156),
    height: calcHeight(56),
    paddingHorizontal: calcWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
    margin: Platform.OS === 'ios' ? calcWidth(5) : calcWidth(10),
  },

  loanTxt: {
    color: colors.white,
    fontSize: calcFont(14),
    textAlign: 'center',
    fontFamily: 'segoeuithis',
  },
});

export default styles;
