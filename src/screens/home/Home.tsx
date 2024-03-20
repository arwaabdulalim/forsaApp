import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Header from '../../components/header/Header';
import Limit from '../../components/limit/Limit';
import Arch from '../../components/arch/Arch';
import Banner from '../../components/banner/Banner';
import TopBrands from '../../components/topBrands/TopBrands';
import SectionHeader from '../../components/sectionHeader/SectionHeader';
import Categories from '../../components/categories/Categories';
import Brands from '../../components/brands/Brands';
import LoanCategory from '../../components/loanCategory/LoanCategory';
import OfferSelection from '../../components/offerSelection/OfferSelection';
import {useTranslation} from 'react-i18next';
import {
  useGetBrandsApi,
  useGetSectionsApi,
  useGetOffersApi,
  useGetLoansApi,
} from '../../hooks/useSectorsApi';
import {calcHeight} from '../../helpers/styles/responsive-helper.service';
import colors from '../../themes/colors';

const Home: React.FC = (props: any) => {
  const {t} = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {data: sectorsList, isLoading: isSectorLoading} = useGetSectionsApi({
    onSuccessHandler: data => {
      setSelectedCategory(data?.results?.[0]?.value);
      setTimeout(() => {
        fetchBrands();
      }, 300);
    },
    onErrorHandler: () => {},
    enabled: true,
  });
  const {
    data: brandsList,
    isLoading: isBrabdsLoading,
    refetch: fetchBrands,
  } = useGetBrandsApi({
    value: selectedCategory,
    enabled: false,
  });

  const {data: offersList, isLoading: isOffersLoading} = useGetOffersApi({
    enabled: true,
  });

  const {data: loansList, isLoading: isLoansLoading} = useGetLoansApi({
    enabled: true,
  });
  return (
    <>
      <Arch>
        <Header contentType="image" />
        <Limit />
        <View style={styles.overlayContainer}>
          <TopBrands />
          <View style={styles.bannerPosition}>
            <Banner />
            <SectionHeader title={t('home.top-brands')} details="View all" />
            {isSectorLoading ? (
              <ActivityIndicator color={colors.black} size={'small'} />
            ) : (
              <Categories
                sectorsList={sectorsList}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                fetchBrands={fetchBrands}
              />
            )}
          </View>
        </View>
      </Arch>
      <ScrollView
        style={{
          marginTop: calcHeight(24),
        }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {isBrabdsLoading ? (
            <ActivityIndicator color={colors.black} size={'large'} />
          ) : (
            <FlatList
              data={brandsList}
              renderItem={({item}: any) => <Brands brand={item} />}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          )}
        </View>
        <SectionHeader title="Request Additional Loan" details="See Less" />
        <View style={styles.container}>
          {isLoansLoading ? (
            <ActivityIndicator color={colors.black} size={'large'} />
          ) : (
            <FlatList
              data={loansList}
              renderItem={({item}: any) => <LoanCategory item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          )}
        </View>
        <SectionHeader title="Offers Select for You" details="See Less" />
        <View style={styles.container}>
          {isOffersLoading ? (
            <ActivityIndicator color={colors.black} size={'large'} />
          ) : (
            <FlatList
              data={offersList}
              renderItem={({item}: any) => <OfferSelection item={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
            />
          )}
        </View>
      </ScrollView>
    </>
  );
};
export default Home;
