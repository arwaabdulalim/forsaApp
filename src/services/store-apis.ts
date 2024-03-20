import {apiService} from './api';

export const getSectorsList = async () => {
  const data = await apiService().get('stores/mysectors/');
  return data?.data;
};

export const getOffersList = async () => {
  const data = await apiService().get('stores/myoffers/');
  return data?.data;
};

export const getLoansList = async () => {
  const data = await apiService().get('onetransaction/myservicetypes/');
  return data?.data;
};

export const getBradsList = async ({value}: {value: any}) => {
  const data = await apiService().get(`stores/mystores/?sector=${value}`);
  return data?.data;
};
