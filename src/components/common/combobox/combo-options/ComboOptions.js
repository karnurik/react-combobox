import React, { Component } from 'react';
import './combo-options.css';

class ComboOptions extends Component {
    /* 
      * @description - handles checkbox selection, calls the function defined in parent component
      * @param id (of selected option)
      * @return na
    */
    handleCheckboxSelection = id => this.props.handleSelectedOptions(id); 
    
    render() {
        return (
            <div className='combo-list-item' id={this.props.elem.id}>
                <input type='checkbox' 
                    checked= {this.props.selectedOptions.includes(this.props.elem.id)}
                    onChange= {(e) => this.handleCheckboxSelection(this.props.elem.id)}
                />
                <span className='combo-list-text'>{this.props.elem.name}</span>
           </div>
        );
    }
}

export default ComboOptions;