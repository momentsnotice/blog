import React, { Component } from 'react';
import styled from 'styled-components';

import Landing from './Landing';
import Preview from './Preview';
import About from './About';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        document.title = "Moment's Notice: a blog about stuff"
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ w: window.innerWidth });
        this.setState({ h: window.innerHeight });
    }

    render() {
        return (
            <Carousel h={this.state.h} w={this.state.w}>
                <Landing />
                <Preview />
                <About />
            </Carousel>
        );
    }
}

export default Home;

const Carousel = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: ${props => props.w};
    height: ${props => props.h}px;
    overflow-x: scroll;
    overflow-y: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none!important;
        height: 0;
        width: 0;
        background-color: transparent;
    }
`;