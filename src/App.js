import React, { Component } from 'react';
import isAuthorised from './hoc/isAuthorised';
import Layout from './Components/Layout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../src/store/reducer';
import '../src/styles/index.css';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    user name: { this.props.user }
                    <Layout />
                </React.Fragment>    
            </Provider>
        );
    }
}

export default isAuthorised(App);