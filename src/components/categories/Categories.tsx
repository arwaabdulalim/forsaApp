import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import colors from '../../themes/colors';

const Categories = ({
  sectorsList,
  selectedCategory,
  setSelectedCategory,
  fetchBrands,
}: {
  sectorsList: any;
  selectedCategory: any;
  setSelectedCategory: any;
  fetchBrands: any;
}) => {
  const renderCategory = ({item: {label, value}}: any) => {
    const isSelected = selectedCategory === value;
    return (
      <TouchableOpacity
        key={label}
        onPress={() => {
          setSelectedCategory(value);
          setTimeout(() => {
            fetchBrands();
          }, 1000);
        }}>
        <View
          style={
            isSelected
              ? [
                  styles.itemWrapper,
                  {
                    backgroundColor: colors.tiffany,
                  },
                ]
              : styles.itemWrapper
          }>
          <Text
            style={
              isSelected
                ? [
                    styles.title,
                    {
                      color: colors.white,
                    },
                  ]
                : styles.title
            }>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={sectorsList}
        renderItem={renderCategory}
        keyExtractor={item => item.value}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Categories;
