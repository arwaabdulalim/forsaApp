import {StyleSheet} from 'react-native';
import {
  calcFont,
  calcHeight,
  calcWidth,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  imgWrapper: {
    width: calcWidth(323),
    height: calcHeight(140),
    borderWidth: 3,
    borderColor: colors.tiffany,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
  img: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandImg: {
    width: calcWidth(70),
    height: calcHeight(70),
    marginRight: calcWidth(12),
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
