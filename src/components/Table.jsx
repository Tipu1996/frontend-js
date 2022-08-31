import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../store/countries';
//import { recoverCountries } from '../store/countries';

const Table = () => {
    const dispatch = useDispatch()
    //const countries = useSelector((state) => state.countries.list)
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
    return (<h1>Printing</h1>
    );
}

export default Table