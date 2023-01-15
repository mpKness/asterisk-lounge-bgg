import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { selectBoardgameByID } from '../store/slices/boardgames';

const BoardgameCard = ({id}) => {
    const game = useSelector((state) => selectBoardgameByID(state, id));
    const handleImageClick = () => {
        window.open(`http://boardgamegeek.com/boardgame/${id}`);
    }
    return (
        <Card sx={{maxWidth: 400, margin: "5px"}}>
            <CardMedia
                sx={{height: 300, backgroundSize: 'contain'}}
                image={game.image}
                title="game image"
                onClick={handleImageClick}
            />
            <CardContent>
                <Typography> {game.name} </Typography>
            </CardContent>
        </Card>
    );
}

export default BoardgameCard;
