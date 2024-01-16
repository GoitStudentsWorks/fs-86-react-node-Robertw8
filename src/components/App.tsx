import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, PrivateRoute, RestrictedRoute } from '.';
import routes from '../routes';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux';
import { getCurrentUser } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const SignInPage = lazy(() => import('../pages/SignInPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const DiaryPage = lazy(() => import('../pages/DiaryPage'));
const ProductsPage = lazy(() => import('../pages/ProductsPage'));
const ExercisesPage = lazy(() => import('../pages/ExercisesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  console.log(user);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path={routes.WELCOME}
            element={
              <RestrictedRoute
                component={<WelcomePage />}
                redirectTo="/diary"
              />
            }
          />
          <Route
            path={routes.SIGNUP}
            element={
              <RestrictedRoute component={<SignUpPage />} redirectTo="/diary" />
            }
          />
          <Route
            path={routes.SIGNIN}
            element={
              <RestrictedRoute component={<SignInPage />} redirectTo="/diary" />
            }
          />
          <Route
            path={routes.PROFILE}
            element={
              <PrivateRoute component={<ProfilePage />} redirectTo="/welcome" />
            }
          />
          <Route
            path={routes.DIARY}
            element={
              <PrivateRoute component={<DiaryPage />} redirectTo="/welcome" />
            }
          />
          <Route
            path={routes.PRODUCTS}
            element={
              <PrivateRoute
                component={<ProductsPage />}
                redirectTo="/welcome"
              />
            }
          />
          <Route
            path={routes.EXERCISES}
            element={
              <PrivateRoute
                component={<ExercisesPage />}
                redirectTo="/welcome"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
