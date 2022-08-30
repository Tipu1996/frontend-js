import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'countries',
    initialState: { list: [], fetch: false },
    reducers: {
        countriesReceived: (countries, action) => {
            countries.list = action.payload
            countries.fetch = true
            console.log("in countriesReceived");
        },

        countriesNotReceived: (countries, action) => { },
    },
})

const reducer = slice.reducer;
const countries = slice.getInitialState();

export { reducer, countries }