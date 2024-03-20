import {StyleSheet} from 'react-native';
import {calcWidth} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'relative',
  },
  bannerPosition: {
    position: 'absolute',
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {marginHorizontal: calcWidth(25)},
});
export default styles;
