import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    _id: null,
    email: null,
    name: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userAdded: (state, action) => {
            state._id = action.payload._id,
                state.name = action.payload.name;
            state.email = action.payload.email;
        },
        removeUser: (state)=>{
            state._id = null
                state.name = null
            state.email = null
        }
    }
})

export const { userAdded, removeUser } = userSlice.actions;

export default userSlice.reducer;