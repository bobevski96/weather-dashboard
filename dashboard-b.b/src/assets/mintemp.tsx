import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinimize } from '@fortawesome/free-solid-svg-icons';
interface SolidMinimizeIconProps {
    width?: string;
    height?: string;
  }
  
  const MinTemp: React.FC<SolidMinimizeIconProps> = ({ width = '30px', height = '30px' }) => {
    return (
      <div>
        <FontAwesomeIcon icon={faMinimize} style={{ width, height }} />
      </div>
    );
  };
  
  export default MinTemp;