import React from 'react';
import { Box, Slider, Typography } from "@mui/material";

const ReduxSlider = ({label, option}) => {

    function valueText(value) {
        return value;
    }

    return (
        <Box>
            <Typography> {label} </Typography>
            <Slider
                step={1}
                marks
                min={0}
                max={10}
                valueLabelDisplay="auto"
            />
        </Box>
        
    );
};

export default ReduxSlider;
