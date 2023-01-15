import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { selectUser } from '../store/slices/user';

const UserCard = () => {
    const user = useSelector(selectUser);
    return (
        <Box>
            {JSON.stringify(user)}
        </Box>
    )
};

export default UserCard;
