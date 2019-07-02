import React, { Component } from 'react';
import ComboOptions from '../comboOptions/ComboOptions';
import './comboInput.css';

class ComboInput extends Component {
    constructor(props) {
    super(props);
    this.state = {
        searchValue  : '',
        filteredData : this.props.data
      };
    }

    /* 
      * @description - Set searched value to state variable named searchValue
      * @param event  
      * @return na
    */
    handleSearch = e => {
        const { value } = e.target;
        this.setState({searchValue: value.toLowerCase()},
            _ =>  this.filterOptions() );
    }

    /* 
      * @description - Filters the given data according to the search value
      * @param na  
      * @return na
    */
    filterOptions = _ => {
        let filteredData = this.props.data;
        filteredData = this.props.data.filter( item => item.name.toLowerCase().indexOf(this.state.searchValue) > -1 );
        this.setState({filteredData: filteredData})
    }


    render() {
        const placeholder = this.props.searchPlaceholder ? this.props.searchPlaceholder : 'Search' ;

        return (
           <div className='combo-list-container'>
                <input
                    type='text'
                    name='search'
                    className='form-input'
                    onChange={this.handleSearch}
                    value={this.state.searchValue}
                    placeholder={placeholder}
                    autoComplete='off'
                    autoFocus
                />
                <div className='combo-list'>
                    {this.state.filteredData.map(elem => 
                        <ComboOptions 
                            key={elem.id} elem={elem} 
                            selectedOptions={this.props.selectedOptions} 
                            handleSelectedOptions={this.props.handleSelectedOptions} />
                    )}
                </div>
            </div>
        );
    }
}

export default ComboInput;