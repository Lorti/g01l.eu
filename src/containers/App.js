import React from 'react';
import { connect } from 'react-redux';
import Graphics from '../components/Graphics';




const changeSliderAction = (value) => ({
    type: 'CHANGE_STROKE',
    value
});

const Slider = ({ value, onSliderChange }) => {
    return (
        <form>
            <input type="range" min="0" max="20" step="1"
                   value={value}
                   onChange={(event) => onSliderChange(event.target.value)}
            />
            {value}
        </form>
    )
};

const mapStateToProps = (state) => {
    return {
        value: state.stroke
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSliderChange: (value) => {
            dispatch(changeSliderAction(value))
        }
    };
};

const Style = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);








const Canvas = ({ value }) => {
    return (
        <div>
            <Graphics value={value} />
        </div>
    )
};

const Result = connect(
    (state) => {
        return {
            value: state.stroke
        }
    },
)(Canvas);







const App = () => (
    <div>
        <Style />
        <Result />
    </div>
);

export default App;
