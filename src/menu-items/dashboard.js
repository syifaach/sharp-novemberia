// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Menu',
    type: 'group',
    children: [
        {
            id: 'dealer',
            title: 'Dealer',
            type: 'item',
            url: '/dashboard/default',
            // icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'subDealer',
            title: 'Sub Dealer',
            type: 'item',
            url: '/dashboard/default',
            // icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'Hadiah',
            title: 'Hadiah',
            type: 'item',
            url: '/jenis-hadiah',
            // icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'pemenang',
            title: 'Pemenang Hadiah',
            type: 'item',
            url: '/dashboard/default',
            // icon: icons.DashboardOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
