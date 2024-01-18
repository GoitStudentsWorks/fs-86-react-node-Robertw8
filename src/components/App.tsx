import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout, PublicRoute, PrivateRoute } from '.';
import routes from '../routes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';
import { getCurrentUser } from '../redux/auth/operations';

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

  useEffect(() => {
    dispatch(getCurrentUser({}));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Navigate to={routes.DIARY} />} /> */}

          <Route
            path={routes.WELCOME}
            element={<PublicRoute component={<WelcomePage />} />}
          />
          <Route
            path={routes.SIGNUP}
            element={<PublicRoute component={<SignUpPage />} />}
          />
          <Route
            path={routes.SIGNIN}
            element={<PublicRoute component={<SignInPage />} />}
          />
          <Route
            path={routes.PROFILE}
            element={<PrivateRoute component={<ProfilePage />} />}
          />
          <Route
            path={routes.DIARY}
            element={<PrivateRoute component={<DiaryPage />} />}
          />
          <Route
            path={routes.PRODUCTS}
            element={<PrivateRoute component={<ProductsPage />} />}
          />
          <Route
            path={routes.EXERCISES}
            element={<PrivateRoute component={<ExercisesPage />} />}
          >
            <Route path="bodyparts" element={<ExercisesPage />} />
            <Route path="muscles" element={<ExercisesPage />} />
            <Route path="equipment" element={<ExercisesPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
