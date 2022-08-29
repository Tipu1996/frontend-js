import store from "../store/store"
import * as actions from "../store/api";

const Table = async () => {
    const value = store.getState();
    if (value.fetch === false) {
        store.dispatch(
            actions.apiCallBegan({
                url: "https://restcountries.com/v3.1/all",
                onSuccess: "countries/countriesReceived",
                //onError: actions.apiCallFailed.type,
            })
        );
    }
    console.log(value.list)
    return (
        <table>
            <tr>
                value.list.map()
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
            </tr>
        </table>
    )
}

export default Table