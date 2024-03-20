import React from 'react';
import {View, Text, Image, I18nManager} from 'react-native';
import styles from './styles';

const OfferSelection = ({item}) => {
  const isRTL = I18nManager.isRTL;
  return (
    <>
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/images/favourite.png')}
          style={styles.likedIcon}
        />
        <Image
          source={{uri: item?.thumbnail}}
          resizeMode="contain"
          style={styles.itemImg}
        />

        <View style={styles.layerView}>
          <Text style={styles.categoryTxt}>
            {isRTL
              ? item?.brand?.sector?.title_ar
              : item?.brand?.sector?.title_en}
          </Text>
          <Text style={styles.providerTxt}>{item?.brand?.title}</Text>
          <Text style={styles.categoryTxt}>{item?.title}</Text>
        </View>
      </View>
    </>
  );
};

export default OfferSelection;
