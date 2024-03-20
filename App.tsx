import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/config/navigation/Router';
import './src/shared/localization/i18n';
import {QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
