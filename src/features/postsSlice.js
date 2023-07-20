import {createSlice} from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
    },
    reducers: {
        addPost: (state, action) => { // state = initialState
            state.posts.push(action.payload);
        },
        deletePost: (state, action) => {
            const index = action.payload;
            state.posts.splice(index, 1);
        },
    }

})

export const {addPost, deletePost} = postsSlice.actions

export default postsSlice.reducer