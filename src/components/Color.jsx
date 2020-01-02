import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    height: 35px;
    padding: 0 15px;
    transition: .2s;

    :hover {
        background-color: #3c5cb4;
        transition: .2s;
    }

    .color {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ::after {
            content: '';
            display: block;
            width: 14px;
            height: 14px;
            ${props => `background: ${props.color}`}
        }
    }
`;

export default function Color(props) {
    const { colorName, colorValue } = props.color;

    return (
        <Styles color={colorValue}>
            <div className="color" data-color={colorValue}>{colorName}</div>
        </Styles>
    );
}