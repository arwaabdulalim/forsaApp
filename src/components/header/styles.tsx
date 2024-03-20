import {StyleSheet, Platform} from 'react-native';
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
    marginHorizontal: calcWidth(25),
    marginTop: calcHeight(50),
  },
  logo: {
    width: calcWidth(35),
    height: calcHeight(62),
  },
  logoTxt: {
    color: colors.white,
    alignSelf: 'center',
  },

  img: {
    width: calcWidth(20),
    height: calcHeight(20),
  },
  favouriteImg: {
    width: calcWidth(20),
    height: calcHeight(20),
    marginRight: calcWidth(5),
  },
});

export default styles;
