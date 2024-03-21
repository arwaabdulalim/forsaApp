import {StyleSheet} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  imgWrapper: {
    width: calcWidth(315),
    height: calcHeight(140),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  img: {
    width: calcWidth(315),
    height: calcHeight(140),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandImg: {
    width: calcWidth(70),
    height: calcHeight(70),
    marginHorizontal: calcWidth(25),
  },
  arrow: {
    width: calcWidth(4),
    height: calcHeight(8),
    marginLeft: calcWidth(5),
  },
  title: {
    color: colors.black,
    fontSize: calcFont(15),
    fontFamily: 'segoeuithis',
    alignSelf: 'center',
  },
});

export default styles;
