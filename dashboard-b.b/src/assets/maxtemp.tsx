import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';

interface SolidMaximizeIconProps {
  width?: string;
  height?: string;
}

const MaxTemp: React.FC<SolidMaximizeIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faExpand} style={{ width, height }} />
    </div>
  );
};

export default MaxTemp;