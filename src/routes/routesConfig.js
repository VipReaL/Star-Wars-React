import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';
import NotFoundPage from '@containers/NotFoundPage';

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
