import React from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'

type WeatherIconProps = React.HTMLProps<HTMLDivElement> & {
  IconName: string;
};

export default function WeatherIcon({ IconName, ...props }: WeatherIconProps) {
  return (
    <div {...props} className={cn("relative h-20 w-20")}>
      <Image 
        width={100}
        height={100}
        alt="weather-icon"
        className="absolute h-full w-full"
        src={`http://openweathermap.org/img/wn/${IconName}@4x.png`} 
      />
    </div>
  )
}
