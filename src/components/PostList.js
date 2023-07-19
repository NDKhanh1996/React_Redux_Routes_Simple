import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getTitle, getContent } from '../features/postsSlice'

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

//---------------------------

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{mb: 1.5}} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br/>
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

//---------------------------

export default function OutlinedCard() {
    const post = useSelector(state => state.post.value)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    };
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <h1 style={{textAlign: 'left'}}>Post</h1>
                <Button variant="contained" color="success" onClick={handleClick}>
                    Add new Post
                </Button>
            </div>
            <Box sx={{minWidth: 275}}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </>
    );
}
