import {ACTION_CHANGE_CURRENT_COLOR,
        ACTION_CHANGE_DISPLAY_SLIDERS_MENU,
        ACTION_CHANGE_DISPLAY_COLORS_MENU } from './constants';

export const changeCurrentColor = newColor => {
    return {
        type: ACTION_CHANGE_CURRENT_COLOR,
        payload: newColor
    };
}

export const changeDisplaySlidersMenu = display => {
    return {
        type: ACTION_CHANGE_DISPLAY_SLIDERS_MENU,
        payload: display
    };
}

export const changeDisplayColorsMenu = display => {
    return {
        type: ACTION_CHANGE_DISPLAY_COLORS_MENU,
        payload: display
    };
}