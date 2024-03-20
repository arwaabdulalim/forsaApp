import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
const Limit: React.FC = (props: any) => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require('../../assets/images/form.png')}
        style={styles.img}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.title}>Get your limit</Text>
        <Text style={styles.desc}>
          Complete your info and get up to EGP 100,000
        </Text>
      </View>
    </View>
  );
};

export default Limit;
