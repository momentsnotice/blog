import React from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math';
import 'katex/dist/katex.min.css';

const renderers = {
    inlineMath: ({value}) => <InlineMath math={value} />,
    math: ({value}) => <BlockMath math={value} />
};

class About extends React.Component {
    state = {
        post: null,
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/s2011r2593/72d1375e5194eaeb5ceffd87a380e494/raw/b58eba33fd1c9d1d7312c7e96381380509fecfd1/about.md')
            .then(res => res.text())
            .then(post => this.setState((state) => ({ ...state, post })))
            .catch((err) => console.error(err));
    }

    render() {
        const { post } = this.state;

        return (
            <Holder>
                <PostContainer>
                    <ReactMarkdown
                        plugins={[math]}
                        renderers={renderers}
                        source={post}
                    />
                </PostContainer>
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
`;

const PostContainer = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 6vh;
    padding-bottom: 6vh;
    min-height: 88vh;
    background: #080808;
`;