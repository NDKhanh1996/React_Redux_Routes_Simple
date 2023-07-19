import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
    name: 'post',
    initialState: {
        title: "",
        content: ""
    },
    reducers: {
        getTitle: (state, action) => {
            state.title = action.payload
        },
        getContent: (state, action) => {
            state.content = action.payload
        }
    }

})

export const { getTitle, getContent } = postsSlice.actions

export default postsSlice.reducer