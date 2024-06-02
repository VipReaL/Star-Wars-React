import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import PersonPage from '@containers/PersonPage';
import FavoritesPage from '@containers/FavoritesPage';
import NotFoundPage from '@containers/NotFoundPage';
import SearchPage from '@containers/SearchPage';

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        exact: true,
        element: <PersonPage />
    },
    {
        path: '/favorites',
        exact: true,
        element: <FavoritesPage />
    },
    {
        path: '/search',
        exact: true,
        element: <SearchPage />
    },
    {
        path: '/not-found',
        exact: true,
        element: <NotFoundPage />
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage />
    }
]

export default routesConfig;
