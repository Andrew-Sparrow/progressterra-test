import { useCallback, useEffect, useState } from 'react';
import { HandySvg } from 'handy-svg';

import "../../styles/variables.scss";
import './bonus.scss';
import chevronRightSVG from '../../icons/chevron_right.svg';
import fireSVG from '../../icons/fire.svg';
import { getAxiosTokenInstance } from '../../services/api';

const TOKEN_PATH = 'api/v3/clients/accesstoken'

const IconChevronRight = () => (
  <HandySvg
    src={chevronRightSVG}
    width="35"
    height="35"
    className='bonus__icon-chevron-right'
  />
);

const IconFire = () => (
  <HandySvg
    src={fireSVG}
    width="13"
    height="17"
    className='bonus__icon-fire'
  />
);

const options = {
  month: "numeric",
  day: "numeric",
};

const apiTokenInstance = getAxiosTokenInstance();

const tokenData = {
  "idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
  "accessToken": "",
  "paramName": "device",
  "paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
  "latitude": 0,
  "longitude": 0,
  "sourceQuery": 0
}

const Bonus = () => {
  const [isLoading, setIsLoading] = useState(true);

  const bonusAmount = 300;
  const dateBurning = '2023-04-11T07:19:54.816Z';
  const fireBonusAmount = 250;

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiTokenInstance.post(TOKEN_PATH, tokenData);
      setIsLoading(false);
      return result.data.accessToken;
    }

    fetchData()
      .then(function (response) {
        console.log(response);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='bonus'>
      <section className='bonus__left'>
        {
          isLoading
            ? <p>Loading...</p>
            :
            <>
              <p className="bonus__amount">{bonusAmount} бонусов</p>
              <div className="bonus__fire">
                <p className="bonus__date">{new Date(dateBurning).toLocaleDateString('ru-RU', options)} сгорит </p>
                <IconFire />
                <p className="bonus__date">{fireBonusAmount} бонусов</p>
              </div>
            </>
        }
      </section>
      <section className='bonus__right'>
        <IconChevronRight />
      </section>
    </div>

  )
}

export { Bonus };
