import { FaBusinessTime } from 'react-icons/fa';
import { GiSmartphone } from 'react-icons/gi';
import {
  HiOutlineHome,
  HiOutlineQuestionMarkCircle,
  HiOutlineDownload,
  HiOutlineChatAlt
} from 'react-icons/hi';

import Link from './Ui/Navigation/Link';

export default function MenuItem(
  type: 'home' | 'app' | 'why' | 'who' | 'download' | 'chat',
  open: boolean
) {
  const definitions = {
    home: {
      link: '/',
      icon: <HiOutlineHome></HiOutlineHome>,
      name: <span>Início</span>
    },
    app: {
      link: '#aplicativo',
      icon: <GiSmartphone></GiSmartphone>,
      name: <span>Aplicativo</span>
    },
    why: {
      link: '#porque-pedir',
      icon: <HiOutlineQuestionMarkCircle></HiOutlineQuestionMarkCircle>,
      name: <span>Porque Pedir?</span>
    },
    who: {
      link: '#quem-somos',
      icon: <FaBusinessTime></FaBusinessTime>,
      name: <span>Quem Somos?</span>
    },
    download: {
      link: '#baixe-agora',
      icon: <HiOutlineDownload></HiOutlineDownload>,
      name: <span>Baixe Agora</span>
    },
    chat: {
      link: '#fale-conosco',
      icon: <HiOutlineChatAlt></HiOutlineChatAlt>,
      name: <span>Fale Conosco</span>
    }
  };
  //hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-3 rounded-full transform ease-in-out duration-300 flex
  //hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3
  const { icon, link, name } = definitions[type];
  return (
    <div>
      <Link
        className={`hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex ${
          open ? 'flex-row items-center space-x-3' : ''
        }`}
        href={link}
      >
        {icon}
        {open && name}
      </Link>
    </div>
  );
}
