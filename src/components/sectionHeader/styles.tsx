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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: calcWidth(26),
    marginVertical: calcHeight(5),
  },
  title: {
    fontFamily: 'segoeuithibd',
    fontSize: calcFont(18),
  },
  seeTxt: {
    color: colors.black,
    fontFamily: 'segoeuithisi',
    fontSize: calcFont(12),
  },
});

export default styles;
