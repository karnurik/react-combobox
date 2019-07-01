import React, { Component } from 'react';
import Combobox from '../common/combobox/Combobox'
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            options : [
                { id: '1', name: 'Candy Eat' },
                { id: '2', name: 'Onions Pick' },
                { id: '3', name: 'Fanny Pick' },
                { id: '4', name: 'Click o Wisp' }],
            userName : ''
        }
    }

    handleInputChange = (e) => {
        const {value} = e.target;
        this.setState({userName: value});
    }

    render() {
        return (
            <>
                <form  className="form">
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" value={this.state.userName} onChange={this.handleInputChange} />

                    <Combobox
                        data={this.state.options}
                        placeholder='Select Games'
                        searchPlaceholder='Search Games'
                        label='Games'
                        />
                
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default Form;