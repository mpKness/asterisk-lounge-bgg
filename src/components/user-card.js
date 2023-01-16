import React from 'react';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import { chooseUser } from '../store/slices/user';
import { useDispatch } from 'react-redux';

const UserCard = ({user}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(chooseUser({userID: user.id}));
    };
    return (
        <Card onClick={handleClick}>
            <CardContent sx={{backgroundColor: user.chosen ? 'blue' : 'white'}}>
                <Typography> {user.name} </Typography>
            </CardContent>
        </Card>
    )
};

export default UserCard;
