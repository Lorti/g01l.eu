const initialState = {
    leftStrokeColor: '#ff9857',
    rightStrokeColor: '#C71585',
    stroke: 10
};

const style = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STROKE_WIDTH':
            return Object.assign({}, state, {
                stroke: parseInt(action.value, 10)
            });
        case 'CHANGE_LEFT_STROKE_COLOR':
            return Object.assign({}, state, {
                leftStrokeColor: action.value
            });
        case 'CHANGE_RIGHT_STROKE_COLOR':
            return Object.assign({}, state, {
                leftStrokeColor: action.value
            });
        default:
            return state;
    }
};

export default style;
