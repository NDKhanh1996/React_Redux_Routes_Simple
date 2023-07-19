import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import {getTitle, getContent} from '../features/postsSlice'
import { useState } from 'react';

export default function MultilineTextFields() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const returnToHome = () => {
        // dispatch(getTitle(title));
        // dispatch(getContent(content));
        navigate('/');
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            method="POST"
        >
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    name="title"
                    multiline
                    maxRows={4}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div>
                <TextField
                    id="outlined-multiline-static"
                    label="Content"
                    name="content"
                    multiline
                    rows={4}
                    onChange={(event) => setContent(event.target.value)}
                />
            </div>
            <Button variant="contained" color="success" type="submit" onClick={returnToHome} sx={{marginLeft: '10px'}}>
                Submit
            </Button>
        </Box>
    );
}
