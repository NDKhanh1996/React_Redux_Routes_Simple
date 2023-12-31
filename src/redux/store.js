import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/postsSlice'

export default configureStore({
    reducer: {
        post: postsReducer // post is the "name: post" in the postSlice
    }
})