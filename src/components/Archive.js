import React from 'react';
import styled from 'styled-components';

import Header from './Header';

import posts from '../Posts';

class Archive extends React.Component {
    render() {
        let p = [];
        for (let i = 0; i < Math.min(10, posts.length); i++) {
            p.push(
                <StyledLink key={posts[i].id} href={'https://momentsnotice.github.io/blog/#/' + posts[i].id}>
                    {posts[i].title}
                </StyledLink>
            );
        }

        return (
            <Holder>
                <Header />
                {p}
            </Holder>
        );
    }
}

export default Archive;

const Holder = styled.div`
    min-width: 80vw;
    min-height: calc(88vh - 120px);
    overflow-y: scroll;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scrollbar-width: none;
    background: #080808;
    margin-top: 120px;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 6vh;
    padding-bottom: 6vh;
    display: flex;
    flex-direction: column;
`;

const StyledLink = styled.a`
    color: white;
    :visited {
        color: #c4c4c4;
    }
    margin-bottom: .4em;
`;