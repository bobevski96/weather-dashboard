import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';

interface TemperatureIconProps {
  width?: string;
  height?: string;
}

const TemperatureIcon: React.FC<TemperatureIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faTemperatureThreeQuarters} style={{ width, height }} />
    </div>
  );
};

export default TemperatureIcon;