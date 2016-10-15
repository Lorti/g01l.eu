import React from 'react';
import { connect } from 'react-redux';
import Graphics from '../components/Graphics';



const changeColorAction = (value) => ({
    type: 'CHANGE_LEFT_STROKE_COLOR',
    value
});

const changeRightStrokeColorAction = (value) => ({
    type: 'CHANGE_RIGHT_STROKE_COLOR',
    value
});

const changeSliderAction = (value) => ({
    type: 'CHANGE_STROKE_WIDTH',
    value
});

const Slider = ({ stroke, leftStrokeColor, rightStrokeColor, onRightStrokeColorChange, onColorChange, onSliderChange }) => {
    return (
        <form>
            <label>
                <input type="color"
                       value={leftStrokeColor}
                       onChange={(event) => onColorChange(event.target.value)}
                />
            </label>
            <label>
                <input type="color"
                       value={rightStrokeColor}
                       onChange={(event) => onRightStrokeColorChange(event.target.value)}
                />
            </label>
            <label>
                <input type="range" min="0" max="20" step="1"
                       value={stroke}
                       onChange={(event) => onSliderChange(event.target.value)}
                />
            </label>
        </form>
    )
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        onColorChange: (value) => {
            dispatch(changeColorAction(value))
        },
        onRightStrokeColorChange: (value) => {
            dispatch(changeRightStrokeColorAction(value))
        },
        onSliderChange: (value) => {
            dispatch(changeSliderAction(value))
        }
    };
};

const Style = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);








const Canvas = (state) => {
    return (
        <div>
            <Graphics {...state} />
            <p>{JSON.stringify(state)}</p>
        </div>
    )
};

const Result = connect(
    (state) => state,
)(Canvas);







const App = () => (
    <div>
        <Style />
        <Result />
    </div>
);

export default App;
