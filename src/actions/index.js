export const CHANGE_TEXT_STRING = 'CHANGE_TEXT_STRING';
export const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE';
export const CHANGE_LEFT_STROKE_COLOR = 'CHANGE_LEFT_STROKE_COLOR';
export const CHANGE_RIGHT_STROKE_COLOR = 'CHANGE_RIGHT_STROKE_COLOR';
export const CHANGE_STROKE_WIDTH = 'CHANGE_STROKE_WIDTH';

export const changeTextAction = (value) => ({
    type: CHANGE_TEXT_STRING,
    value
});

export const changeFontSizeAction = (value) => ({
    type: CHANGE_FONT_SIZE,
    value
});

export const changeLeftStrokeColorAction = (value) => ({
    type: CHANGE_LEFT_STROKE_COLOR,
    value
});

export const changeRightStrokeColorAction = (value) => ({
    type: CHANGE_RIGHT_STROKE_COLOR,
    value
});

export const changeStrokeWidthAction = (value) => ({
    type: CHANGE_STROKE_WIDTH,
    value
});
