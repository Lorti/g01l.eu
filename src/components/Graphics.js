import React from 'react';

const Graphics = ({ textString, fontSize, strokeWidth, leftStrokeColor, rightStrokeColor }) => {
    const width = 640;
    const height = 360;
    const x = width / 2;
    const y = fontSize + (height - fontSize * 1.2) / 2;

    const groupStyle = {
        overflow: 'hidden',
        textAnchor: 'middle',
        fontSize: fontSize,
        fontWeight: 'bold',
        fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif',
        letterSpacing: -7
    };

    const backLayerStyle = {
        strokeWidth: strokeWidth
    };
    const frontLayerStyle = {};

    return (
        <svg className="graphics" width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <defs>
                <linearGradient id="fillGradient">
                    <stop offset="5%" stopColor="#fff"/>
                    <stop offset="95%" stopColor="#fff"/>
                </linearGradient>
                <linearGradient id="strokeGradient">
                    <stop offset="5%" stopColor={leftStrokeColor}/>
                    <stop offset="95%" stopColor={rightStrokeColor}/>
                </linearGradient>
            </defs>
            <g style={groupStyle}>
                <text x={x} y={y} stroke="url(#strokeGradient)" style={backLayerStyle}>{textString}</text>
                <text x={x} y={y} fill="url(#fillGradient)" style={frontLayerStyle}>{textString}</text>
            </g>
        </svg>
    );
};

export default Graphics;
