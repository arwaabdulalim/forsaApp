import {StyleSheet, Platform} from 'react-native';
import {calcWidth} from '../../helpers/styles/responsive-helper.service';

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
  container: {
    marginHorizontal: Platform.OS === 'ios' ? calcWidth(25) : calcWidth(20),
  },
  loansContainer: {
    marginHorizontal: Platform.OS === 'ios' ? calcWidth(25) : calcWidth(5),
  },
});
export default styles;
