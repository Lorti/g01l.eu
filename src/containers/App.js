import React, { Component } from 'react';
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
                       onChange={(event) => state.onTextChange(event.target.value)}
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

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTextChange: (value) => {
            dispatch(changeTextAction(value));
        },
        onLeftStrokeColorChange: (value) => {
            dispatch(changeColorAction(value));
        },
        onRightStrokeColorChange: (value) => {
            dispatch(changeRightStrokeColorAction(value));
        },
        onStrokeWidthChange: (value) => {
            dispatch(changeStrokeWidthAction(value));
        }
    };
};

const Style = connect(
    mapStateToProps,
    mapDispatchToProps
)(Slider);



const Canvas = (state) => {
    const url = 'http://' + ([
        document.location.host,
        encodeURIComponent(state.textString),
        encodeURIComponent(state.leftStrokeColor),
        encodeURIComponent(state.rightStrokeColor),
        encodeURIComponent(state.strokeWidth)
    ].join('/'));
    return (
        <div>
            <Graphics {...state} />
            <p><a href={url}>Tell everyone, that <strong>{state.textString}</strong>!</a></p>
        </div>
    )
};

const Result = connect(
    mapStateToProps
)(Canvas);


class App extends Component {
    componentDidMount() {
        const { params } = this.props;
        if (params.textString) {
            this.props.onTextChange(params.textString);
        }
        if (params.leftStrokeColor) {
            this.props.onLeftStrokeColorChange(params.leftStrokeColor);
        }
        if (params.rightStrokeColor) {
            this.props.onRightStrokeColorChange(params.rightStrokeColor);
        }
        if (params.strokeWidth) {
            this.props.onStrokeWidthChange(params.strokeWidth);
        }
    }
    render() {
        return (
            <div>
                <Style />
                <Result />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
