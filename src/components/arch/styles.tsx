import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  squreStyle: {
    width: '100%',
    height: '53%',
    borderRadius: 12,
    backgroundColor: colors.primary,
  },
  arcStyle: {
    width: '22%',
    height: '50%',
    position: 'absolute',
    bottom: -25,
    left: '40%',
    borderRadius: 35,
    backgroundColor: colors.primary,
    transform: [{scaleX: 5}, {scaleY: 1}],
  },
});
export default styles;
