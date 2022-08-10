import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';

// actions
import { setValueApp } from '../../common/redux/modules/app/AppActions';
// resources
import { changeLanguage, strings } from '../../common/translations/i18n';
import { localImg } from '../../../public/assets';
// logos
import reactLogo from '../../../public/svg/react.svg';
import viteLogo from '../../../public/svg/vite.svg';
import muiLogo from '../../../public/svg/mui.svg';
// components
import LinkTool from './components/LinkTool';

function HomeView() {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    store => store.AppReducer.currentLanguage,
  );
  const nextLanguage = currentLanguage === 'en' ? 'es' : 'en';
  const nextLanguageString = strings(
    `language.${nextLanguage === 'en' ? 'english' : 'spanish'}`,
  );

  return (
    <div className='container app-view'>
      <div className='text-xl font-medium grid-link-tools w-5/6 sm:w-3/4 lg:w-2/3 xl:w-2/5'>
        <LinkTool
          href='https://vitejs.dev'
          src={viteLogo}
          classNameImg='vite'
          classNameContainer='items-center'
          alt='Vite Logo'
          text='Vite'
        />
        <LinkTool
          href='https://reactjs.org'
          src={reactLogo}
          classNameImg='react'
          classNameContainer='items-center'
          alt='React Logo'
          text='React'
        />
        <LinkTool
          href='https://mui.com/'
          src={muiLogo}
          classNameImg='mui'
          classNameContainer='items-center'
          alt='Material UI Logo'
          text='Material UI'
        />
        <LinkTool
          href='https://tailwindcss.com/'
          src={localImg.tailwindcss}
          classNameImg='tailwindcss'
          classNameContainer='items-center'
          alt='TailWindCSS Logo'
          text='TailWindCSS'
        />
      </div>
      <Button
        className='w-4/5 md:w-1/3 mt-10 mb-3'
        variant='contained'
        onClick={() => setCount(count => count + 1)}
      >
        {strings('home.countIs', { count })}
      </Button>
      <Button
        className='w-4/5 md:w-1/3'
        variant='contained'
        onClick={async () => {
          await changeLanguage(nextLanguage);
          await dispatch(
            setValueApp({ prop: 'currentLanguage', value: nextLanguage }),
          );
        }}
      >
        {strings('language.changeLanguage', {
          language:
            nextLanguage === 'en'
              ? nextLanguageString?.toLowerCase()
              : nextLanguageString,
        })}
      </Button>
    </div>
  );
}

export default HomeView;
