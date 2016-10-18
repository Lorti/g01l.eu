import React, { Component } from 'react';
import { connect } from 'react-redux';
import Graphics from '../components/Graphics';
import {
    changeTextAction, changeFontSizeAction,
    changeLeftStrokeColorAction, changeRightStrokeColorAction,
    changeStrokeWidthAction
} from '../actions/index';


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
            dispatch(changeLeftStrokeColorAction(value));
        },
        onRightStrokeColorChange: (value) => {
            dispatch(changeRightStrokeColorAction(value));
        },
        onStrokeWidthChange: (value) => {
            dispatch(changeStrokeWidthAction(value));
        }
    };
};


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
        const state = this.props;
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
                <p><a href={url}>{url}</a></p>
                <Graphics {...state} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
