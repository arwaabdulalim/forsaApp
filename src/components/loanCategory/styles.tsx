import {StyleSheet} from 'react-native';
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
    margin: calcWidth(4),
  },

  loanTxt: {
    color: colors.white,
    fontSize: calcFont(14),
    textAlign: 'center',
  },
});

export default styles;
