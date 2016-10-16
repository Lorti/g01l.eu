const initialState = {
    textString: 'R34ct 1s g01l',
    fontSize: 72,
    leftStrokeColor: '#ff9857',
    rightStrokeColor: '#C71585',
    strokeWidth: 10
};

const style = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT_STRING':
            return Object.assign({}, state, {
                textString: action.value
            });
        case 'CHANGE_FONT_SIZE':
            return Object.assign({}, state, {
                fontSize: parseInt(action.value, 10)
            });
        case 'CHANGE_STROKE_WIDTH':
            return Object.assign({}, state, {
                strokeWidth: parseInt(action.value, 10)
            });
        case 'CHANGE_LEFT_STROKE_COLOR':
            return Object.assign({}, state, {
                leftStrokeColor: action.value
            });
        case 'CHANGE_RIGHT_STROKE_COLOR':
            return Object.assign({}, state, {
                rightStrokeColor: action.value
            });
        default:
            return state;
    }
};

export default style;
