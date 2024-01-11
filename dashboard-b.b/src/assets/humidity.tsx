import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';

interface SolidDropletIconProps {
  width?: string;
  height?: string;
}

const Humidity: React.FC<SolidDropletIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faDroplet} style={{ width, height }} />
    </div>
  );
};

export default Humidity;