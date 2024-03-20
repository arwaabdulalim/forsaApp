import React from 'react';
import {I18nManager, Text, ImageBackground} from 'react-native';
import styles from './styles';

const LoanCategory = ({item: {name_en, name_ar}}: any) => {
  const isRTL = I18nManager.isRTL;
  const randoumBgImages = [
    require('../../assets/images/moonLit.png'),
    require('../../assets/images/socialLive.png'),
    require('../../assets/images/purpleBliss.png'),
    require('../../assets/images/blueRasperry.png'),
  ];
  function get_random(list: any) {
    return list[Math.floor(Math.random() * list.length)];
  }

  return (
    <ImageBackground
      style={styles.wrapper}
      source={get_random(randoumBgImages)}
      resizeMode="contain">
      <Text style={styles.loanTxt}>{isRTL ? name_ar : name_en}</Text>
    </ImageBackground>
  );
};

export default LoanCategory;
