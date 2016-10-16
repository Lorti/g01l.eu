import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graphics from '../components/Graphics';


const changeTextAction = (value) => ({
    type: 'CHANGE_TEXT_STRING',
    value
});

const changeFontSizeAction = (value) => ({
    type: 'CHANGE_FONT_SIZE',
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
                <input type="range" min="50" max="75" step="1"
                       value={state.fontSize}
                       onChange={(event) => state.onFontSizeChange(event.target.value)}
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
                <input type="range" min="5" max="25" step="1"
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
        onFontSizeChange: (value) => {
            dispatch(changeFontSizeAction(value));
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
        encodeURIComponent(state.fontSize),
        encodeURIComponent(state.leftStrokeColor),
        encodeURIComponent(state.rightStrokeColor),
        encodeURIComponent(state.strokeWidth)
    ].join('/'));
    return (
        <div>
            <Graphics {...state} />
            <p><a href={url}>{url}</a></p>
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
        if (params.fontSize) {
            this.props.onFontSizeChange(params.fontSize);
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
