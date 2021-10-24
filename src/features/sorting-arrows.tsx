import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { TSort } from '../types';

type TProps = {
  sortOrder: TSort['sortOrder'];
};

export const SortingArrows: React.FC<TProps> = (props) => {
  const { sortOrder } = props;
  return (
    <>
      {sortOrder === 'desc' ? (
        <FontAwesomeIcon icon={faArrowDown} />
      ) : (
        <FontAwesomeIcon icon={faArrowUp} />
      )}
    </>
  );
};
