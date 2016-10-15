import React, { PropTypes } from 'react';

const Graphics = ({ stroke, leftStrokeColor, rightStrokeColor }) => {
    const width = 640;
    const height = 360;
    const fontSize = 72;
    const textString = 'R34ct 1s g01l';
    const x = width / 2;
    const y = fontSize + (height - fontSize * 1.2) / 2;

    const backgroundStyle = {};
    const groupStyle = {
        overflow: 'hidden',
        textAnchor: 'middle',
        fontSize: fontSize,
        fontWeight: 'bold',
        fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif',
        letterSpacing: -7
    };
    const frontLayerStyle = {};
    const backLayerStyle = {
        strokeWidth: stroke
    };

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <defs>
                <radialGradient id="radialGradient" fx="35%" fy="50%" cx="50%" cy="50%" r="65%">
                    <stop offset="5%" stopColor="#555"/>
                    <stop offset="95%" stopColor="#333"/>
                </radialGradient>
                <linearGradient id="fillGradient">
                    <stop offset="5%" stopColor="#fff"/>
                    <stop offset="95%" stopColor="#fff"/>
                </linearGradient>
                <linearGradient id="strokeGradient">
                    <stop offset="5%" stopColor={leftStrokeColor}/>
                    <stop offset="95%" stopColor={rightStrokeColor}/>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width={width} height={height} fill="url(#radialGradient)" style={backgroundStyle}/>
            <g style={groupStyle}>
                <text x={x} y={y} stroke="url(#strokeGradient)" style={backLayerStyle}>{textString}</text>
                <text x={x} y={y} fill="url(#fillGradient)" style={frontLayerStyle}>{textString}</text>
            </g>
        </svg>
    );
};

Graphics.propTypes = {
    stroke: PropTypes.number.isRequired
};

export default Graphics;
