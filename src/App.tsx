import * as React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Dashboard from './pages/dashboard';
import Fonts from './components/Fonts';
import { AuthProvider } from './context/auth-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const theme = extendTheme({
  fonts: {
    body: 'Roboto',
  },
});

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <CSSReset />
          <Fonts />
          <Router>
            <Switch>
              <Route path={ROUTES.SIGN_IN} component={SignIn} />
              <Route path={ROUTES.SIGN_UP} component={SignUp} />
              <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            </Switch>
          </Router>
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
