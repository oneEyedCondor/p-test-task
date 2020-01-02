import React from 'react';
import styled from 'styled-components';

import Color from './Color';

const Styles = styled.div`
    width: 150px;
    ${props => `display: ${props.display}`}
    position: fixed;
    top: 70px;
    left: 124px;
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
        right: 11px;
        z-index: -1;
        border: 10px solid transparent;
        border-bottom: 10px solid #ffffff; 
    }

    > div {
        border-radius: 3px;
        overflow: hidden;
    }
`;

export default function ColorsMenu(props) {
    const { display, colors, editColor } = props;
    
    return (
        <Styles display={display ? 'block' : 'none'}>
            <div onClick={(e)=>editColor(e.target.attributes.getNamedItem('data-color')?.value)}>
                {
                    colors.map(color => {
                        return <Color key={color.colorName} color={color} />
                    })
                }
            </div>
        </Styles>
    );
}