import {StyleSheet} from 'react-native';
import {calcHeight} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 10,
  },
  img: {
    width: '91%',
    height: calcHeight(330),
  },
});

export default styles;
