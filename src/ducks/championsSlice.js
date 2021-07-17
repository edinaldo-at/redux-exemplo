import { createSlice } from "@reduxjs/toolkit";

export const championsSlice = createSlice({
    name:'champions',
    initialState:{
        items: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        setChampionsLoading: (state, action) => {
            state.isError = false;
            state.isLoading = true;
        },
        setChampionsSuccess: (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.items = action.payload;
        },
        setChampionsError: (state, action) => {
            state.isError = true;
            state.isLoading = false;
        },
    },
});


//exporta as actions creators
const { setChampionsSuccess, setChampionsError, setChampionsLoading } = championsSlice.actions


//criando a trunk função asyncrona
export const retrieveChampions = () => async (dispatch) => {
    dispatch(setChampionsLoading());
    
    await fetch('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json')
    .then(resp => resp.json())
    .then(payload => {
      const retrievedChampions = Object.values(payload.data);
      dispatch(setChampionsSuccess(retrievedChampions));
    })
    .catch(() => dispatch(setChampionsError()));
}

//exporta o reducer que será importado no store
export default championsSlice.reducer;