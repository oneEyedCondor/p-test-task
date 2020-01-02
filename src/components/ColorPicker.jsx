import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCurrentColor, changeDisplaySlidersMenu, changeDisplayColorsMenu } from '../store/actions';

import ColorsMenu from './ColorsMenu';
import SlidersMenu from './SlidersMenu';

const Styles = styled.div`
    width: 225px;
    height: 45px;
    margin-left: 38px;
    display: flex;
    align-items: center;
    color: #9b9b9b;
    background-color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid #adacac;
    border-radius: 2px;
    
    .color-hex {
        width: 60%;
        padding-left: 1rem;
    }

    button {
        width: 20%;
        height: 100%;
        background-color: #ffffff;
        border: 1px solid transparent;
        border-left: 1px solid #d6d6d6;
        transition: .2s;
        outline: none;

        :hover {
            background-color: #e9e9e9;
            transition: .2s;
        }

        :focus {
            border-bottom: 1px solid #338fb3;
        }
    }

    .btn-sliders-menu:after {
        width: 14px;
        height: 14px;
        content: '';
        display: block;
        margin: auto;
        ${props => `background-color: ${props.color}`}
    }
    
    .btn-colors-menu:after {
        content: '';
        position: relative;
        top: 10px;
        border: 7px solid transparent;
        border-top: 7px solid #98999a; 
    }
`;

class ColorPicker extends React.Component {
    
    currentColor = this.props.value;
    
    toggleMenu = e => {
        switch(e.target.className) {
            case 'btn-colors-menu': 
                this.props.changeDisplayColorsMenu(!this.props.displayColorsMenu);
                this.props.changeDisplaySlidersMenu(false);
                break;
            case 'btn-sliders-menu':
                this.props.changeDisplaySlidersMenu(!this.props.displaySlidersMenu);
                this.props.changeDisplayColorsMenu(false);
                break;
            case 'wrap-color-picker':
                this.props.changeDisplaySlidersMenu(false);
                this.props.changeDisplayColorsMenu(false);
                break;
        }
    };

    editColor = (colorValue) => {
        if(colorValue) {
            this.currentColor = colorValue;
            this.props.onChange(colorValue);
            this.props.changeDisplayColorsMenu(false);
        }
    };

    editColorWithoutSave = (primaryColor, newValue) => {
        let colorRGB = this.convertHEXtoRGB(this.currentColor);
        
        if(!colorRGB) return;

        switch(primaryColor) {
            case 'r':
                colorRGB[0] = newValue; 
                break;
            case 'g':
                colorRGB[1] = newValue;
                break;
            case 'b':
                colorRGB[2] = newValue;
                break;
            default: return;
        }
        this.currentColor = this.convertRGBtoHEX(colorRGB);
        this.forceUpdate();
    };

    returnPreviousColor = () => {        
        this.currentColor = this.props.value;
        this.props.changeDisplaySlidersMenu(false);
    };

    saveСolor = () => {
        this.props.onChange(this.currentColor);
        this.props.changeDisplaySlidersMenu(false);
    }

    convertRGBtoHEX = colorRGB => {
        let colorHEX = '#';
        for(let elem of colorRGB) {
            let hex = Number(elem).toString(16);
            if (hex.length < 2) {
                    hex = "0" + hex;
            }
            colorHEX += hex;
        }
        return colorHEX;
    };

    convertHEXtoRGB = colorHEX => {
        if (colorHEX.charAt(0) === '#') {
            colorHEX = colorHEX.substr(1);
        }
        if ((colorHEX.length < 2) || (colorHEX.length > 6)) {
            return false;
        }
        const values = colorHEX.split('');
        let r, g, b;

        const getPrimaryColor = (index1, index2) => {
            return parseInt(values[index1].toString() + values[index2].toString(), 16);
        }

        switch(colorHEX.length) {
            case 2:
                r = getPrimaryColor(0, 1);
                g = r;
                b = r;
                break;
            case 3:
                r = getPrimaryColor(0, 0);
                g = getPrimaryColor(1, 1);
                b = getPrimaryColor(2, 2);
                break;
            case 6:
                r = getPrimaryColor(0, 1);
                g = getPrimaryColor(2, 3);
                b = getPrimaryColor(4, 5);
                break;
            default:
                return false;
        }
        return [r, g, b];
    };

    render() {
        return (
            <div className="wrap-color-picker" onClick={this.toggleMenu}>
                <Styles color={this.currentColor}>
                    <p className="color-hex">{this.props.value}</p>
                    <button className="btn-sliders-menu"></button>
                    <button className="btn-colors-menu"></button>
                </Styles>
                
                <ColorsMenu 
                    colors={this.props.colors} 
                    editColor={this.editColor} 
                    display={this.props.displayColorsMenu} 
                />
    
                <SlidersMenu 
                    colorRGB={this.convertHEXtoRGB(this.currentColor)}
                    editColorWithoutSave={this.editColorWithoutSave}
                    returnPreviousColor={this.returnPreviousColor}
                    saveСolor={this.saveСolor}
                    display={this.props.displaySlidersMenu} 
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        value: state.currentColor,
        colors: state.defaultColors,
        displaySlidersMenu: state.displaySlidersMenu,
        displayColorsMenu: state.displayColorsMenu
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: bindActionCreators(changeCurrentColor, dispatch),
        changeDisplaySlidersMenu: bindActionCreators(changeDisplaySlidersMenu, dispatch),
        changeDisplayColorsMenu: bindActionCreators(changeDisplayColorsMenu, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker);