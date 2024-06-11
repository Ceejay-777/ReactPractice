import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "0", name : "Dude Camry"},
    {id: "1", name : "Neil Young"},
    {id: "2", name : "Cee Jay "},
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const allUsers = (state) => state.users;
export default usersSlice.reducer