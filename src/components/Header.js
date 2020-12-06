import React from 'react';
import styled from 'styled-components';

class Header extends React.Component {
    render() {
        return (
            <Bar>
                <HomeText href='https://momentsnotice.github.io/blog/'>
                    Moment's Notice
                </HomeText>
            </Bar>
        );
    }
}

export default Header;

const Bar = styled.div`
    width: 100%;
    background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);
    display: flex;
    align-items: center;
    height: 120px;
    position: absolute;
    top: 0;
    left: 0;
`;

const HomeText = styled.a`
    margin-left: 10vw;
    font-size: 1.8em;
    color: white;
    text-decoration: none;
`;