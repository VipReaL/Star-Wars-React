import HomePage from '@containers/HomePage';
import PeoplePage from '@containers/PeoplePage';

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
    }
]

export default routesConfig;