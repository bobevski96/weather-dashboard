import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears } from '@fortawesome/free-solid-svg-icons';

interface DescriptionIconProps {
  width?: string;
  height?: string;
}

const DescriptionIcon: React.FC<DescriptionIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faGears } style={{ width, height }} />
    </div>
  );
};

export default DescriptionIcon;