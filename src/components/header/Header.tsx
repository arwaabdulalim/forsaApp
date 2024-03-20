import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

interface HeaderProps {
  showSearchIcon?: boolean;
  contentType: 'text' | 'image';
  content: string;
}

const Header: React.FC<HeaderProps> = ({
  showSearchIcon = true,
  contentType,
  content,
}) => {
  return (
    <View style={styles.wrapper}>
      {showSearchIcon ? (
        <Image
          source={require('../../assets/images/search.png')}
          style={styles.img}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.img} />
      )}
      {contentType === 'image' ? (
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.logoTxt}>{content}</Text>
      )}
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/images/favourites.png')}
          style={styles.favouriteImg}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/images/notifications.png')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
