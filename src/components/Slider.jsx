import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    height: 29px;
    display: flex;
    align-items: center;

    span {
        margin: 0 5px;
    }

    input[type=range]{
        height: 2px;
        border-radius: 10px;
        width: 100%;
        outline: none;
    }
    input[type=range], input[type=range]::-webkit-slider-thumb{
        appearance: none;
        -webkit-appearance: none;
    } 
    input[type=range]::-webkit-slider-thumb{
        height: 12px;
        width: 12px;
        border-radius: 50%;
        cursor: pointer;
        background: #999999;
        border: 1px solid #ffffff;
    }
    
    .primary-color-r {
        background: rgb(255,0,0);
        background: linear-gradient(90deg, rgba(251,130,130,1) 0%, rgba(130,0,0,1) 72%, rgba(0,0,0,1) 100%);
    }
    .primary-color-g {
        background: rgb(0,207,22);
        background: linear-gradient(90deg, rgba(107,165,90,1) 0%, rgba(0,130,14,1) 72%, rgba(0,0,0,1) 100%);
    }
    .primary-color-b {
        background: rgb(0,168,235);
        background: linear-gradient(90deg, rgba(86,207,255,1) 0%, rgba(0,77,107,1) 85%, rgba(0,0,0,1) 100%);
    }
`;

export default function Slider(props) {
    const { primaryColor, valuePrimaryColor, onChange } = props;
    
    return (
        <Styles>
            <span>{primaryColor}</span>
            <input
                className={`primary-color-${primaryColor}`}
                type="range" 
                min={-255} 
                max={0} 
                value={-valuePrimaryColor} 
                onChange={(e) => onChange(primaryColor, Math.abs(e.target.value))} />
        </Styles>
    );
}