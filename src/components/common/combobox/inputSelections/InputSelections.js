import React, { Component } from 'react';
import './inputSelections.css';

class InputSelections extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slectedElements: []
        }

    }

    /* 
      * @description - Lifecycle method, Using to create array of the selected options
      * @param na 
      * @return na
    */
    componentDidMount () {
       const slectedElements = [];
       this.props.data.forEach(elem => {
           if(this.props.selectedOptions && this.props.selectedOptions.includes(elem.id)){
               slectedElements.push(elem.name)
           }
       });
       this.setState({slectedElements: slectedElements});
    }

    render() {
        const placeholder = this.props.placeholder ? this.props.placeholder : 'Select' ;
        
        return (
            <>
                <input
                    type='text'
                    className='form-input'
                    placeholder={placeholder}
                    defaultValue= {this.state.slectedElements.join(', ')}
                    onFocus={this.props.handleInputFocus}
                    />
            </>
        );
    }
}

export default InputSelections;