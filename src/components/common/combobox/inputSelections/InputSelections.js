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
       // this.refs.arrowRef.innerHTML = "&#9660;";
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
            <div className="drop-down"  onClick={this.props.handleInputFocus}>
                <input
                    type='text'
                    className='form-input'
                    placeholder={placeholder}
                    defaultValue= {this.state.slectedElements.join(', ')}
                    />
                    <i className='down-arrow' />
            </div>
        );
    }
}

export default InputSelections;