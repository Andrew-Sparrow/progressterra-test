import { HandySvg } from 'handy-svg';

import './app.scss';
import iconInfoSVG from '../../icons/information_button.svg';
import { Bonus } from '../../components/bonus/bonus';


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
      <main>
        <Bonus/>
      </main>
    </div>
  );
};

export { App };
