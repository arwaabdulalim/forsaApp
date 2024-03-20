import {StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    height: calcHeight(50),
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.silver,
    marginHorizontal: calcWidth(5),
    marginTop: calcHeight(20),
  },
  img: {
    width: calcWidth(90),
    height: calcHeight(50),
  },
});

export default styles;
