import Combobox from './Combobox';
import ComboboxErrorBoundry from './ComboboxErrorBoundry';

import React from 'react';

const ComboBoxInput = props => {
    return (
        <>
            <ComboboxErrorBoundry>
                <Combobox 
                        data={props.data}
                        placeholder={props.placeholder}
                        searchPlaceholder={props.searchPlaceholder}
                        label={props.label}
                    />
            </ComboboxErrorBoundry>
        </>
    );
};



export default ComboBoxInput;