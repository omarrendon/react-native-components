import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101',
  },
  {
    name: 'Animatioin 102',
    icon: 'albums-outline',
    component: 'Animation102',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text Input',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Pull To Refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'SectionListScreen',
  },
  {
    name: 'Modal Screen',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'Infinite Scroll Screen',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
];
