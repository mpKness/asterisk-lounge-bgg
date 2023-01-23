import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { selectSpecificOption, setOption } from '../store/slices/options';
import { FormControlLabel } from '@mui/material';

const ReduxCheckbox = ({label, option}) => {
    const value = useSelector((state) => selectSpecificOption(state, option));

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setOption({
            option,
            value: event.target.checked ? 1 : 0,
        }));
    }

    return (
        <FormControlLabel
            control={<Checkbox 
                checked={value === 1 ? true : false}
                onChange={handleChange}
            />}
            label={label}
        />
        
    );
}

export default ReduxCheckbox;
