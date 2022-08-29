import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'countries',
    initialState: { list: [], fetch: false },
    reducers: {
        countriesReceived: (countries, action) => {
            countries.list = action.payload
            countries.fetch = true
        },

        countriesNotReceived: (countries, action) => { },
    },
})

export default slice.reducer
