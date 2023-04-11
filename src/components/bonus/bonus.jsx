import { HandySvg } from 'handy-svg';

import "../../styles/variables.scss";
import './bonus.scss';
import chevronRightSVG from '../../icons/chevron_right.svg';


const IconChevronRight = () => (
  <HandySvg
    src={chevronRightSVG}
    width="24"
    height="24"
  />
);

const options = {
  month: "numeric",
  day: "numeric",
};

const Bonus = () => {
  const bonusAmount = 300;
  const dateBurning = '2023-04-11T07:19:54.816Z';
  const fireBonusAmount = 250;

  return (
    <div className='bonus'>
      <section>
        <p className="bonus__amount">{bonusAmount} бонусов</p>
        <div className="bonus__fire">
          <p className="bonus__date">{new Date(dateBurning).toLocaleDateString('ru-RU', options)} сгорит</p>
          <p className="bonus__date">{fireBonusAmount} бонусов</p>
        </div>
      </section>
      <section className='bonus__right'>
        <IconChevronRight />
      </section>

    </div>
  )
}

export { Bonus };
