import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
const Brands = ({brand}: {brand: any}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.img}
        source={{
          uri: brand?.thumbnail_web,
        }}
        resizeMode="contain"
      />
    </View>
  );
};

export default Brands;
