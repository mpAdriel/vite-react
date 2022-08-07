import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// actions
import { setValueApp } from '../../common/redux/modules/app/AppActions';
// resources
import { changeLanguage, strings } from '../../common/translations/i18n';
import reactLogo from '../../../public/svg/react.svg';
import viteLogo from '../../../public/svg/vite.svg';

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
    <div>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <button
        style={{ marginTop: '0.5em' }}
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
  );
}

export default HomeView;
