//import { countries } from "../store/countries"
import store from "../store/store";
const Table = () => {
    let list = [];
    store.getState(list, true);
    console.log(list);
    return (
        <table>
            <tbody>
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
            </tbody>
        </table>
    )
}

export default Table
