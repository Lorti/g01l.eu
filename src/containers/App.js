import React from 'react';
import { connect } from 'react-redux';
import Graphics from '../components/Graphics';



const changeTextAction = (value) => ({
    type: 'CHANGE_TEXT_STRING',
    value
});

const changeColorAction = (value) => ({
    type: 'CHANGE_LEFT_STROKE_COLOR',
    value
});

const changeRightStrokeColorAction = (value) => ({
    type: 'CHANGE_RIGHT_STROKE_COLOR',
    value
});

const changeStrokeWidthAction = (value) => ({
    type: 'CHANGE_STROKE_WIDTH',
    value
});



const Slider = (state) => {
    return (
        <form>
            <label>
                <input type="text"
                       value={state.textString}
                       onInput={(event) => state.onTextChange(event.target.value)}
                />
            </label>
            <label>
                <input type="color"
                       value={state.leftStrokeColor}
                       onChange={(event) => state.onLeftStrokeColorChange(event.target.value)}
                />
            </label>
            <label>
                <input type="color"
                       value={state.rightStrokeColor}
                       onChange={(event) => state.onRightStrokeColorChange(event.target.value)}
                />
            </label>
            <label>
                <input type="range" min="0" max="30" step="1"
                       value={state.strokeWidth}
                       onChange={(event) => state.onStrokeWidthChange(event.target.value)}
                />
            </label>
        </form>
    )
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (value) => {
            dispatch(changeTextAction(value))
        },
        onLeftStrokeColorChange: (value) => {
            dispatch(changeColorAction(value))
        },
        onRightStrokeColorChange: (value) => {
            dispatch(changeRightStrokeColorAction(value))
        },
        onStrokeWidthChange: (value) => {
            dispatch(changeStrokeWidthAction(value))
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
