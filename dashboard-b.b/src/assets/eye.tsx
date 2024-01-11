import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons';

interface SolidEyeLowVisionIconProps {
  width?: string;
  height?: string;
}

const EyeVision: React.FC<SolidEyeLowVisionIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faEyeLowVision} style={{ width, height }} />
    </div>
  );
};

export default EyeVision;