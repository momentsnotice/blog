import React from 'react';
import styled, { keyframes } from 'styled-components';

class Landing extends React.Component {
  render() {
    return (
      <TopBar>
        <BlogTitle>
          Moment's Notice
        </BlogTitle>
        <Author>
          By Francis Park and Sean Rhee
        </Author>
        <Note>
          Home ={'>'} Blog ={'>'} About
        </Note>
        <Note>
          (scroll right // use arrow keys)
        </Note>
      </TopBar>
    );
  }
}

export default Landing;

const Fade = keyframes`
  0% { color: #f2f2f200; }
  40% { color: #f2f2f200; }
  100% { color: #f2f2f255; }
`;

const TopBar = styled.div`
  display: flex;
  height: 100%;
  min-width: 100%;
  background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);
  color: #f2f2f2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;

const Note = styled.p`
  font-family: 'Inter', sans-serif !important;
  font-size: 12px;
  color: #f2f2f255;
  animation: ${Fade} 2s linear 1;
  margin-top: -10px;
`;

const BlogTitle = styled.h1`
  color: #f2f2f2;
  font-size: 34px;
  font-weight: 300;
  letter-spacing: 4px;
  border-bottom: 0px solid #00000000;
`;

const Author = styled.h1`
  margin-top: -14px;
  color: #f2f2f2aa;
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 26px;
  border-bottom: 0px solid #00000000;
`;