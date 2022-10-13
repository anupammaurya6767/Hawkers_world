import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import TerminalIcon from './icons/terminal';
import SettingsIcon from './icons/settings';
import RecycleBinIcon from './icons/recycle-bin';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'My Profile',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Leaderboards',
    icon: <MediasIcon />,
    link: '/admin/medias',
  },
  {
    title: 'D2V',
    icon: <ContactIcon />,
    link: '/admin/contacts',
  },
  {
    title: 'Tracking',
    icon: <ServersIcon />,
    link: '/admin/servers',
  },
  {
    title: 'Support',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  
];

export default data;
