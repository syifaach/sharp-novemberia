import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ListHadiah from 'pages/hadiah/list/index';
import FormHadiah from 'pages/hadiah/form/index';

// render - dashboard

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/admin',
    element: <MainLayout />,
    children: [
        // {
        //     path: '/',
        //     element: <DashboardDefault />
        // },
        // {
        //     path: 'dashboard',
        //     children: [
        //         {
        //             path: 'default',
        //             element: <DashboardDefault />
        //         }
        //     ]
        // },
        {
            path: 'jenis-hadiah',
            element: <ListHadiah />
        },
        {
            path: 'jenis-hadiah-form',
            element: <FormHadiah />
        }
    ]
};

export default MainRoutes;
