const initialState = {
    leftStrokeColor: 'blue',
    rightStrokeColor: 'purple',
    stroke: 10
};

const style = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_STROKE':
            return Object.assign({}, state, {
                stroke: parseInt(action.value, 10)
            });
        default:
            return state;
    }
};

export default style;
