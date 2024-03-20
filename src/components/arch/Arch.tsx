import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface CustomStyles {
  squreStyle?: object;
  arcStyle?: object;
}

interface Props {
  children?: React.ReactNode;
  style?: CustomStyles;
}

const Arch: React.FC<Props> = ({children, style = {}}) => {
  return (
    <View>
      <View style={[styles.squreStyle, style.squreStyle]}>
        <View style={[styles.arcStyle, style.arcStyle]} />
        {children}
      </View>
    </View>
  );
};
export default Arch;
