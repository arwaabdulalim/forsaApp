import {View, Text, Image, TouchableOpacity, I18nManager} from 'react-native';
import React, {useState, useEffect} from 'react';
import Arch from '../../components/arch/Arch';
import Header from '../../components/header/Header';
import styles from './styles';
import '../../shared/localization/i18n';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

const Profile = () => {
  const {t, i18n} = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const getInitialLanguages = () => {
    return i18n.language === 'ar'
      ? ['Arabic', 'English']
      : ['English', 'Arabic'];
  };

  const [languages, setLanguages] = useState(getInitialLanguages());

  useEffect(() => {
    setLanguages(getInitialLanguages());
  }, [i18n.language]);

  const toggleLanguageAndRTL = lang => {
    i18n
      .changeLanguage(lang)
      .then(() => {
        I18nManager.forceRTL(lang === 'ar');
        RNRestart.Restart();
      })
      .catch(err => {
        console.log('something went wrong while applying RTL');
      });
  };

  return (
    <View>
      <Arch
        style={{
          squreStyle: {height: '45%'},
          arcStyle: {height: '40%'},
        }}>
        <Header showSearchIcon={false} contentType="text" content="Profile" />
      </Arch>
      <View style={styles.userInfoWrapper}>
        <Image
          source={require('../../assets/images/profileImg.png')}
          style={styles.img}
          resizeMode="contain"
        />
        <Text>Mohammed Adel</Text>
      </View>
      <Text style={styles.shareTxt}>Share the app</Text>
      <View style={styles.languageWrapper}>
        <Text>{t('home.change_language')}</Text>
        <View>
          <TouchableOpacity
            style={styles.selectorView}
            onPress={() => setShowLanguages(!showLanguages)} // Toggle visibility
          >
            <Text>{languages[0]}</Text>
            <Image
              source={require('../../assets/images/downArrow.png')}
              style={styles.downArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {showLanguages && (
            <View>
              <TouchableOpacity
                onPress={() =>
                  toggleLanguageAndRTL(languages[1] === 'Arabic' ? 'ar' : 'en')
                }>
                <Text>{languages[1]}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
