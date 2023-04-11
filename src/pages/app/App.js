import { HandySvg } from 'handy-svg';

import './app.scss';
import iconInfoSVG from '../../icons/information-button-1.svg'

const IconInfo = () => (
  <HandySvg
    src={iconInfoSVG}
    width="24"
    height="24"
  />
);

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <p className="app__logo">логотип</p>
        <button className='app__button' type="button">
          <IconInfo />
        </button>
      </header>
    </div>
  );
}

export { App };
