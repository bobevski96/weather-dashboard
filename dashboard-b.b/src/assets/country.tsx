import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';


interface GlobeIconProps {
    width?: string;
    height?: string;
  }
const Globe: React.FC<GlobeIconProps> = ({ width = '30px', height = '30px' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={faGlobe} style={{ width, height }}  />
    </div>
  );
};

export default Globe;