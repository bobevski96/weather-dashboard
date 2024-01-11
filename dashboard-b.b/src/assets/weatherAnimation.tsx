// WeatherAnimation.tsx

import React from 'react';

interface WeatherAnimationProps {
  weatherCondition: 'clear sky' | 'light rain' | 'overcast clouds' | 'light Snow' | 'thunderstorm';
}

const WeatherAnimation: React.FC<WeatherAnimationProps> = ({ weatherCondition }) => {
  let gifUrl: string;
  let width: string = '150px'; // Set the desired width
  let height: string = '150px'; // Set the desired height

  switch (weatherCondition) {
    case 'clear sky':
      gifUrl = 'https://www.animatedimages.org/data/media/278/animated-sun-image-0831.gif';
      break;
    case 'light rain':
      gifUrl = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0071.gif';
      break;
    case 'overcast clouds':
      gifUrl = 'https://www.animatedimages.org/data/media/361/animated-cloud-image-0039.gif';
      break;
    case 'light Snow':
      gifUrl = 'https://www.animatedimages.org/data/media/361/animated-cloud-image-0039.gif'; // Use the correct snow GIF
      break;
    case 'thunderstorm':
      gifUrl = 'https://www.animatedimages.org/data/media/148/animated-weather-image-0059.gif';
      break;
    default:
      gifUrl = 'https://www.animatedimages.org/data/media/278/animated-sun-image-0257.gif'; 
  }

  return (
    <div className="weather-animation">
      {gifUrl && <img src={gifUrl} alt="Weather Animation" width={width} height={height} />}
    </div>
  );
};

export default WeatherAnimation;
