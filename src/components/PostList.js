import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'

export default function OutlinedCard() {
    const postObject = useSelector(state => state.post);
    const postList = postObject.posts
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
                {postList.map((post, index) => (
                <Card key={index} variant="outlined">
                    <React.Fragment>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2">
                                {post.content}
                            </Typography>
                        </CardContent>
                    </React.Fragment>
                </Card>
                    ))}
            </Box>
        </>
    );
}
