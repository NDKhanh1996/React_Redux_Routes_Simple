import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {addPost, deletePost} from '../features/postsSlice'
import {useState} from 'react';

export default function MultilineTextFields() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const returnToHome = () => {
        const newPost = { title, content };
        dispatch(addPost(newPost));
        navigate('/');
    };

    return (
        <Box
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
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
            <Button variant="contained" color="success" onClick={returnToHome} sx={{marginLeft: '10px'}}>
                Submit
            </Button>
        </Box>
    );
}
