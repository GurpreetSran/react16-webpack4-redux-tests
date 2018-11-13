import React, { Component } from 'react';
import Header from './Components/Header';
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

    
    render() {
        return (
            <div>
                <Header 
                    onHeaderClickHandler={this.onHeaderClickHandler} 
                    visible={this.state.isHeaderVisible}     
                />
                <input value={this.state.inputValue} onChange={this.inputChangeHandler}/>
            </div>
        );
    }
}

export default App;