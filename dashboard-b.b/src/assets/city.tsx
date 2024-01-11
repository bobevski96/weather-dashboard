import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';

interface CityIconProps {
    width?: string;
    height?: string;
  }

const CityIcon: React.FC<CityIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faCity} style={{ width, height }}/>
    </div>
  );
};

export default CityIcon;