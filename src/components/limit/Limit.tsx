import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {useTranslation} from 'react-i18next';
const Limit: React.FC = (props: any) => {
  const {t} = useTranslation();
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/form.png')}
        style={styles.img}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.title}>{t('home.get-limit')}</Text>
        <Text style={styles.desc}>{t('home.complete-info')}</Text>
      </View>
    </View>
  );
};

export default Limit;
