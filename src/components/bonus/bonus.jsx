import { useEffect, useState } from 'react';
import { HandySvg } from 'handy-svg';

import "../../styles/variables.scss";
import './bonus.scss';
import chevronRightSVG from '../../icons/chevron_right.svg';
import fireSVG from '../../icons/fire.svg';
import { getAxiosTokenInstance, getAxiosBonusInstance } from '../../services/api';

const TOKEN_PATH = 'api/v3/clients/accesstoken';
const BONUS_PATH = '/api/v3/ibonus/generalinfo/';

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
const apiBonusInstance = getAxiosBonusInstance();

const tokenData = {
  "idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
  "accessToken": "",
  "paramName": "device",
  "paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
  "latitude": 0,
  "longitude": 0,
  "sourceQuery": 0
};

const Bonus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bonusData, setBonusData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiTokenInstance.post(TOKEN_PATH, tokenData);
      return result.data.accessToken;
    }

    fetchData()
      .then((accessToken) => {
        return apiBonusInstance.get(`${ BONUS_PATH}${ accessToken }`);
      })
      .then((result) => {
        setBonusData(result.data.data);
        setIsLoading(false);
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
              <p className="bonus__amount">{bonusData.currentQuantity} бонусов</p>
              <div className="bonus__fire">
                <p className="bonus__date">{new Date(bonusData.dateBurning).toLocaleDateString('ru-RU', options)} сгорит </p>
                <IconFire />
                <p className="bonus__date">{bonusData.forBurningQuantity} бонусов</p>
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
