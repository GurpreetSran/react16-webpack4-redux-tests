import React, { Component } from 'react';
import isAuthorised from './hoc/isAuthorised';
import Layout from './Components/Layout';
import '../src/styles/index.css';

class App extends Component {
    render() {
        return (
            <div>
                user name: { this.props.user }
                <Layout />
            </div>
        );
    }
}

export default isAuthorised(App);