import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
const SectionHeader = ({title, details}: any) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.seeTxt}>{details}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
