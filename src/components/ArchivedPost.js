import React, { Component } from 'react';
import styled from 'styled-components';

import ReactMarkdown from 'react-markdown';
import { InlineMath, BlockMath } from 'react-katex';
import math from 'remark-math';
import 'katex/dist/katex.min.css';

const renderers = {
    inlineMath: ({value}) => <InlineMath math={value} />,
    math: ({value}) => <BlockMath math={value} />
};

class ArchivedPost extends Component {
    state = {
        post: null,
    }

    componentDidMount() {
        document.title = this.props.title;

        fetch(this.props.md)
            .then(res => res.text())
            .then(post => this.setState((state) => ({ ...state, post })))
            .catch((err) => console.error(err));
    }

    render() {
        const { post } = this.state;

        return (
            <PostContainer>
                <ReactMarkdown
                    plugins={[math]}
                    renderers={renderers}
                    source={post}
                />
            </PostContainer>
        );
    }
}

export default ArchivedPost;

const PostContainer = styled.div`
    padding-left: 10vw;
    padding-right: 10vw;
    padding-bottom: 6vh;
    min-height: calc(88vh - 120px);
    background: #080808;
`;