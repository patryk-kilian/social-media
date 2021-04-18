import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { AuthProvider } from './context/auth-context';
import { ActiveUserProvider } from './context/active-user';

import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Profile from './pages/profile';
import Dashboard from './pages/dashboard';
import Fonts from './components/Fonts';
import NotFound from './pages/not-found';
import Users from './pages/users';
import PostPage from './pages/post';

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
          <ActiveUserProvider>
            <CSSReset />
            <Fonts />
            <Router>
              <Switch>
                <Route path={ROUTES.PROFILE} component={Profile} />
                <Route path={ROUTES.USERS} component={Users} />
                <Route path={ROUTES.POST} component={PostPage} />
                <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </ActiveUserProvider>
        </AuthProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
