import React, { Component } from 'react';

const isAuthorised = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                // check if user is authorised of not and redirect based on this
                <WrappedComponent {...this.props} user='Unknown' />
            );
        }
    }
};

export default isAuthorised;