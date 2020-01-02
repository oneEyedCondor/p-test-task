import React from 'react';
import styled from 'styled-components';

import Slider from './Slider';

const Styles = styled.div`
    width: 200px;
    ${props => `display: ${props.display}`}
    padding: 10px;
    position: fixed;
    top: 70px;
    left: 15px;
    color: #9b9b9b;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 5px 12px 7px rgba(66, 66, 66, 0.2);
    font-weight: 500;
    text-transform: uppercase;

    :before {
        content: '';
        width: 1px;
        position: absolute;
        top: -17px;
        right: 15px;
        z-index: -1;
        border: 10px solid transparent;
        border-bottom: 10px solid #ffffff; 
    }

    button {
        float: right;
        padding: 4px 10px;
        border: 1px solid transparent;
        text-transform: uppercase;
        transition: .2s;

        :hover {
            opacity: .8;
            transition: .2s;
        }
    }

    .btn-reset-color {
        background-color: #d1d2d3;
        color: #959698;
    }
    
    .btn-save-color {
        margin-left: 5px;
        background-color: #6ba55a;
        color: #ffffff;
    }
`;

export default function SlidersMenu(props) {
    const { display, colorRGB, editColorWithoutSave, returnPreviousColor, saveСolor } = props;

    return (
        <Styles display={display ? 'block' : 'none'}>
            <Slider primaryColor='r' valuePrimaryColor={colorRGB[0]} onChange={editColorWithoutSave} />
            <Slider primaryColor='g' valuePrimaryColor={colorRGB[1]} onChange={editColorWithoutSave} />
            <Slider primaryColor='b' valuePrimaryColor={colorRGB[2]} onChange={editColorWithoutSave} />
            
            <button className="btn-save-color" onClick={saveСolor}>ok</button>
            <button className="btn-reset-color" onClick={returnPreviousColor}>cancel</button>
        </Styles>
    );
}