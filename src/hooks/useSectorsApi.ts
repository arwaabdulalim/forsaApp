import {useQuery} from 'react-query';
import {
  getBradsList,
  getSectorsList,
  getOffersList,
  getLoansList,
} from '../services/store-apis';

export const useGetBrandsApi = ({
  onSuccessHandler,
  onErrorHandler,
  value,
  enabled,
}: {
  onSuccessHandler?: (data: any) => void;
  onErrorHandler?: (error: any) => void;
  enabled: boolean;
  value: any;
}) => {
  const {data, isLoading, isError, error, refetch, isFetching} = useQuery(
    'brands-list',
    () => getBradsList({value}),
    {
      onSuccess(data) {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError(error) {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
    },
  );
  return {
    data: data?.results ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export const useGetSectionsApi = ({
  onSuccessHandler,
  onErrorHandler,
  enabled,
}: {
  onSuccessHandler?: (data: any) => void;
  onErrorHandler?: (error: any) => void;
  enabled: boolean;
}) => {
  const {data, isLoading, isError, error, refetch, isFetching} = useQuery(
    'sectors-list',
    () => getSectorsList(),
    {
      onSuccess(data) {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError(error) {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
    },
  );
  return {
    data: data?.results ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export const useGetLoansApi = ({
  onSuccessHandler,
  onErrorHandler,
  enabled,
}: {
  onSuccessHandler?: (data: any) => void;
  onErrorHandler?: (error: any) => void;
  enabled: boolean;
}) => {
  const {data, isLoading, isError, error, refetch, isFetching} = useQuery(
    'loans-list',
    () => getLoansList(),
    {
      onSuccess(data) {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError(error) {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
    },
  );
  return {
    data: data?.results ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};

export const useGetOffersApi = ({
  onSuccessHandler,
  onErrorHandler,
  enabled,
}: {
  onSuccessHandler?: (data: any) => void;
  onErrorHandler?: (error: any) => void;
  enabled: boolean;
}) => {
  const {data, isLoading, isError, error, refetch, isFetching} = useQuery(
    'offers-list',
    () => getOffersList(),
    {
      onSuccess(data) {
        onSuccessHandler && onSuccessHandler(data);
      },
      onError(error) {
        onErrorHandler && onErrorHandler(error);
      },
      enabled,
      retry: false,
    },
  );
  return {
    data: data?.results ?? [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  };
};
