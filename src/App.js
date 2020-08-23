import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SongsGrid from './components/SongsGrid';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import configureStore from './store';
import SongsDetails from './components/SongDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={SongsGrid} />
                            <Route path="/:id" component={SongsDetails} />{' '}
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}
export default App;
