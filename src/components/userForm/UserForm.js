import React, { Component } from 'react';
import Combobox from '../common/combobox/Combobox'
import './userForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            options : [
                { id: '1', name: 'Candy Eat' },
                { id: '2', name: 'Onions Pick' },
                { id: '3', name: 'Fanny Pick' },
                { id: '4', name: 'Click o Wisp' }],
            userName : '',
            selectedOptions: ['1', '2']
        }
    }

    /* 
      * @description - Function sets the state username for this current controlled element
      * @param event 
      * @return na
    */ 
    handleInputChange = e => {
        this.setState({userName: e.target.value});
    }

    /* 
      * @description - Function is called onchange of the dropdown checkbox.
      * @param optionId 
      * @return na
    */ 
    optionOnchange = (optionId, selectedOptions) => {
        //use these to get currently selected option and current clicked (checked or unchecked) option's id
        console.log('option changed, changed OptionId: ', optionId, selectedOptions)
    }

    render() {
        return (
            <>
                <form  className="form">
                    <label>Username</label>
                    <input type="text" name="userName" placeholder="Username" value={this.state.userName} onChange={this.handleInputChange} required />

                    <Combobox
                        data={this.state.options}
                        placeholder='Select Games'
                        searchPlaceholder='Search Games'
                        label='Games'
                        selectedOptions={this.state.selectedOptions}
                        optionOnchange={this.optionOnchange}
                        />
                
                    <input type="submit" disabled value="Submit" />
                </form>
            </>
        );
    }
}

export default UserForm;