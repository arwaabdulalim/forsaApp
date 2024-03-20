import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
const Banner: React.FC = (props: any) => {
  return (
    <View style={styles.imgWrapper}>
      <ImageBackground
        source={require('../../assets/images/banner.png')}
        style={styles.img}
        resizeMode="contain">
        <Image
          source={require('../../assets/images/nike.png')}
          style={styles.brandImg}
          resizeMode="contain"
        />
        <Text style={styles.title}>Check out latest offers</Text>
        <Image
          source={require('../../assets/images/forwardArrow.png')}
          style={styles.arrow}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
};

export default Banner;
