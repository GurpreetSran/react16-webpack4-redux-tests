import React, { Component } from 'react';
import Header from './Components/Header';
import isAuthorised from './hoc/isAuthorised';
import CustomRoutes from './CustomRoutes';
import '../src/styles/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isHeaderVisible: true,
            inputValue: 'default'
        };

        this.onHeaderClickHandler = this.onHeaderClickHandler.bind(this);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);

        this.inputRef = React.createRef();
    }

    onHeaderClickHandler() {
        this.setState((state) => {
            state.isHeaderVisible = !state.isHeaderVisible;
            return state;
        });
    }

    inputChangeHandler(evt){
        const value = evt.target.value;
        this.setState((state) => {
            return {
                ...state,
                inputValue: value
            }
        });
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
            <div>
                user name: { this.props.user }
                <Header 
                    onHeaderClickHandler={this.onHeaderClickHandler} 
                    visible={this.state.isHeaderVisible}     
                />
                <input
                    value={this.state.inputValue} 
                    onChange={this.inputChangeHandler}
                    ref={this.inputRef}
                />
                <CustomRoutes />
            </div>
        );
    }
}

export default isAuthorised(App);