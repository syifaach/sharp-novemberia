import MinimalLayout from 'layout/MinimalLayout/index';
import FirstScane from 'pages/menu-root/first-scane/index';
import MenuRoot from 'pages/menu-root/form/index';
import SpinWhelee from 'pages/menu-root/spin/index';

// render - dashboard

// ==============================|| MAIN ROUTING ||============================== //

const RootRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <FirstScane />
        },
        {
            path: '/form-submit',
            element: <MenuRoot />
        },
        {
            path: '/spin-whelee',
            element: <SpinWhelee />
        }
    ]
};

export default RootRoutes;
