import {StyleSheet} from 'react-native';
import {
  calcHeight,
  calcWidth,
  calcFont,
} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  wrapper: {
    width: calcWidth(153),
    height: calcHeight(230),
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.silver,
    borderRadius: 18,
    marginHorizontal: calcWidth(5),
    marginBottom: calcHeight(40),
  },
  itemImg: {
    height: calcHeight(120),
    width: calcWidth(120),
    alignSelf: 'center',
  },

  layerView: {
    width: calcWidth(153),
    height: calcHeight(115),
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.silver,
    borderRadius: 18,
  },

  likedIcon: {
    width: calcWidth(20),
    height: calcHeight(20),
    alignSelf: 'flex-end',
    top: 60,
    right: 10,
    zIndex: 1000,
  },
  categoryTxt: {
    fontSize: calcFont(14),
    textAlign: 'center',
    color: colors.gray,
    marginTop: calcWidth(7),
  },
  providerTxt: {
    fontSize: calcFont(14),
    textAlign: 'center',
    color: colors.black,
  },
});

export default styles;
