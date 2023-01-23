import React from 'react';
import { FormGroup } from "@mui/material";
import ReduxCheckbox from "./redux-checkbox";
import ReduxSlider from './redux-slider';

const OptionsPicker = () => {
    return (
        <FormGroup>
            <ReduxCheckbox label="own" option="own" />
            <ReduxCheckbox label="rated" option="rated" />
            <ReduxCheckbox label="played" option="played" />
            <ReduxCheckbox label="trade" option="trade" />
            <ReduxCheckbox label="want" option="want" />
            <ReduxCheckbox label="wishlist" option="wishlist" />
            <ReduxCheckbox label="wanttoplay" option="wanttoplay" />
            <ReduxSlider label="Min User Rating" />
            <ReduxSlider label="Max User Rating" />
            <ReduxSlider label="Min Rating" />
            <ReduxSlider label="Max Rating" />
        </FormGroup>
    );
};

export default OptionsPicker;
