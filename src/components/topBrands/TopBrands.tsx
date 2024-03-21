import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
const TopBrands = ({title, details}: any) => {
  return (
    <View style={styles.imgWrapper}>
      <ImageBackground
        style={styles.img}
        source={require('../../assets/images/brandsBG.png')}
        resizeMode="contain"></ImageBackground>
    </View>
  );
};

export default TopBrands;
