import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { setValueApp } from '../../common/redux/modules/app/AppActions';
// resources
import { changeLanguage, strings } from '../../common/translations/i18n';
// logos
import reactLogo from '../../../public/svg/react.svg';
import viteLogo from '../../../public/svg/vite.svg';
import { localImg } from '../../../public/assets';
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
      <div className='grid-link-tools'>
        <LinkTool
          href='https://vitejs.dev'
          src={viteLogo}
          classNameImg='vite'
          alt='Vite Logo'
          text='Vite'
        />
        <LinkTool
          href='https://reactjs.org'
          src={reactLogo}
          classNameImg='react'
          alt='React Logo'
          text='React'
        />
        <LinkTool
          href='https://getbootstrap.com/'
          src={localImg.bootstrap}
          classNameImg='bootstrap'
          alt='Bootstrap Logo'
          text='Bootstrap'
        />
      </div>
      <div className='d-grid gap-2'>
        <button
          className='btn btn-primary'
          onClick={() => setCount(count => count + 1)}
        >
          {strings('home.countIs', { count })}
        </button>
        <button
          className='btn btn-secondary'
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
        </button>
      </div>
    </div>
  );
}

export default HomeView;
