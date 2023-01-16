import React from 'react';
import Box from '@mui/material/Box';
import UserCard from './user-card';
import { useSelector } from "react-redux";
import { selectUsers } from '../store/slices/user';

const UserGrid = () => {
    const users = useSelector(selectUsers);
    return (
        <Box sx={{display: "grid", gridTemplateColumns: "repeat(4, 25%)"}}>
            {
                users.map(user => <UserCard key={user.id} user={user} />)
            }
        </Box>
    );
};

export default UserGrid;
