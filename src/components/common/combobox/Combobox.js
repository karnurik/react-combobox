import React, { Component } from 'react';

import ComboInput from './comboInput/ComboInput';
import InputSelections from './inputSelections/InputSelections';
import ComboboxErrorBoundry from './ComboboxErrorBoundry';

class Combobox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedOptions : props.selectedOptions ? props.selectedOptions : [],
          searching       : false
        }
    }

    /* 
      * @description - Function toggles seraching state, gets called when user clicks on input box for selection
      * @param event 
      * @return na
    */ 
    handleInputFocus = e => {
        this.setState({searching: !this.state.searching});
    }

    /* 
      * @description - Function adds mousedown event listners and calls handleClickOutside function
      * @param - na 
      * @return na
    */ 
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    /* 
      * @description - Function sets wrapper ref on the called element
      * @param - node (current event node) 
      * @return na
    */ 
    setWrapperRef = node => { 
        this.wrapperRef = node 
    }

    /* 
      * @description - Function handles outside clicks and sets the searching state false
      * @param - event  
      * @return na
    */ 
    handleClickOutside = e => {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            this.setState({searching: false});
        }
    }

    /* 
      * @description - Function creates an array with the selected options
      * @param - selectedId 
      * @return na
    */ 
    handleSelectedOptions = selectedId => {
        const selectedOptions = this.state.selectedOptions ? this.state.selectedOptions : [];
        
        (selectedOptions && selectedOptions.includes(selectedId)) ? 
            selectedOptions.splice(selectedOptions.indexOf(selectedId) , 1)
            :
            selectedOptions.push(selectedId);
        

        this.setState({selectedOptions: selectedOptions}, 
            _ => this.props.optionOnchange(selectedId, selectedOptions)
        );
        
    }

    /* 
      * @description - Function removes mousedown event listners and calls handleClickOutside function
      * @param - na 
      * @return na
    */ 
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const selectedOptions = this.state.selectedOptions ? this.state.selectedOptions : [];
        const data            = this.props.data ? this.props.data : [];
        const label           = this.props.label ? this.props.label : '';
        
        return (
            <ComboboxErrorBoundry>
                <div id='outer'> {/* this div is for unit testing purpose only */}
                    <div className='combo-box' ref={this.setWrapperRef} >
                        <label>{label}</label>
                        {this.state.searching ? 
                            <ComboInput data={data} 
                                selectedOptions={selectedOptions} 
                                handleSelectedOptions={this.handleSelectedOptions} 
                                searchPlaceholder={this.props.searchPlaceholder}
                            /> : 
                            <InputSelections data={data} 
                                selectedOptions={selectedOptions} 
                                handleInputFocus={this.handleInputFocus}
                                placeholder= {this.props.placeholder}
                                handleInputChange = {this.props.handleInputChange}
                            /> }
                    </div>
                </div>
            </ComboboxErrorBoundry>
        );
    }
}

export default Combobox;