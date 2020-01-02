import {ACTION_CHANGE_CURRENT_COLOR,
        ACTION_CHANGE_DISPLAY_SLIDERS_MENU,
        ACTION_CHANGE_DISPLAY_COLORS_MENU } from './constants';

const defaultColors = [
    {colorName: 'red', colorValue: '#c3002f'},
    {colorName: 'yellow', colorValue: '#e8b53f'},
    {colorName: 'green', colorValue: '#17a358'},
    {colorName: 'blue', colorValue: '#1dafea'},
];

const initialState = { 
    currentColor: '#ffcc33', 
    defaultColors,
    displaySlidersMenu: false,
    displayColorsMenu: false
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_CHANGE_CURRENT_COLOR:
            return {...state, currentColor: action.payload};
        case ACTION_CHANGE_DISPLAY_SLIDERS_MENU:
            return {...state, displaySlidersMenu: action.payload};
        case ACTION_CHANGE_DISPLAY_COLORS_MENU:
            return {...state, displayColorsMenu: action.payload};
        default: return state;
    }    
}