import React from 'react';
import styled from 'styled-components';

import ArchivedPost from './ArchivedPost';
import posts from '../Posts';

class About extends React.Component {
    render() {
        let preview = [];
        for (let i = 0; i < Math.min(10, posts.length); i++) {
            preview.push(
                <div>
                    <TitleContainer>
                        <PostTitle href={'/' + posts[i].id}>{posts[i].title}</PostTitle>
                    </TitleContainer>
                    <ArchivedPost md={posts[i].gist} key={posts[i].id} />
                </div>
            );
        }

        return (
            <Holder>
                {preview}
                <Footer>
                    <StyledLink href='/archive'>
                        Go To Archives
                    </StyledLink>
                </Footer>
            </Holder>
        );
    }
}

export default About;

const Holder = styled.div`
    min-width: 100%;
    overflow-y: scroll;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    scrollbar-width: none;
    background: #080808;
`;

const Footer = styled.div`
    width: 80vw;
    margin-left: 10vw;
    border-top: 1px dotted #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
`;

const StyledLink = styled.a`
    color: white;
    :visited {
        color: #c4c4c4;
    }
`;

const TitleContainer = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: calc(6vh + 23.584px);
    width: 80vw;
    border-bottom: 1px dotted #c4c4c4;
`;
const PostTitle = styled.a`
    color: white;
    font-size: 2.2em; 
    text-decoration: none;
`;