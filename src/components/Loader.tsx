import React from 'react';
import '../stylesheets/components/Loader.css';

type Props = {
    width: number,
    height: number,
    center: boolean,
}
const Loader = ({ width, height, center } : Props) => (

  <div
    className="lds-ring"
    style={center ? {
      width: `${width}px`, height: `${height}px`, left: '0', right: '0', margin: 'auto', top: '0', bottom: '0',
    } : { width: `${width}px`, height: `${height}px` }}
  >
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
    <div
      style={{
        margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
      }}
    />
    <div style={{
      margin: `${width / 10}px`, width: `${width * 0.80}px`, height: `${height * 0.80}px`, border: `${width / 10}px solid purple`,
    }}
    />
  </div>
);

export default Loader;
