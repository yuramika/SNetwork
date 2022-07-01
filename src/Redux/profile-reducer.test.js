import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";



it ('add ssspost', () => {
    let action = addPostActionCreator('post new ')
    let state = {
        PostData: [
            {message: 'Hi, my name is Yura', id: 1, likesCount: 3},
        {message: 'Follow me', id: 2, likesCount: 4},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'reaaaact', id: 3, likesCount: 7},
        {message: 'My account yuramika', id: 4, likesCount: 10}
            ]
    }
    let newState = profileReducer(state, action)
    expect(newState.PostData.length).toBe(6)
})