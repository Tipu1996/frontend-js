import configStore from './configureStore';
import * as actions from "../store/api";

const store = configStore();
store.dispatch(
    actions.apiCallBegan({
        url: "https://restcountries.com/v3.1/all",
        onSuccess: "countries/countriesReceived",
        //onError: actions.apiCallFailed.type,
    })
);

export default store