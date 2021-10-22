import React from 'react';
import { TCountry } from '../types';
import './country-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface CountryDetailsProps {
  data: TCountry;
}

export const CountryDetails: React.FC<CountryDetailsProps> = (props) => {
  const { data } = props;
  return (
    <>
      <div className="country__country-name">{data.Country}</div>
      <div className="country__table">
        <div className="country__table-icon">
          <FontAwesomeIcon icon={faLungsVirus} />
        </div>
        <div className="country__table-text">Total Confirmed</div>
        <div className="country__table-number">{data.TotalConfirmed}</div>
      </div>
      <div className="country__table">
        <div className="country__table-icon">
          <FontAwesomeIcon icon={faSkullCrossbones} />
        </div>
        <div className="country__table-text">Total Deaths</div>
        <div className="country__table-number">{data.TotalDeaths}</div>
      </div>
      <div className="country__table">
        <div className="country__table-icon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="country__table-text">Total Recovered</div>
        <div className="country__table-number">{data.TotalRecovered}</div>
      </div>
    </>
  );
};
