import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import styled from 'styled-components';

import ArchivedPost from './components/ArchivedPost';
import Home from './components/Home';
import Archive from './components/Archive';
import Header from './components/Header';

import data from './Posts';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/blog' key='home'>
                        <Home />
                    </Route>
                    <Route path='/blog/archive' key='archive'>
                        <Archive />
                    </Route>
                    {data.map(page => <Route
                        path={'/blog/' + page.id}
                        render={
                            () =>
                            <ArchPage>
                                <Header />
                                <Title>
                                    {page.title}
                                </Title>
                                <ArchivedPost title={page.title} md={page.gist}/>
                            </ArchPage>
                        }
                        key={page.id}
                    />)}
                </Switch>
            </Router>
        );  
    }
}

export default App;

const ArchPage = styled.div`
    max-height: calc(100vh - 120px);
    padding-top: 120px;
    background: #080808;
`;
const Title = styled.h1`
    margin-left: 10vw;
    width: 80vw;
    padding-top: 23.584px;
`;