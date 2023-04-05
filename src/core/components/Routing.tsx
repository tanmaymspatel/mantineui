import { Routes, Route } from 'react-router-dom'

import TableExample from '../../components/TableExample';

function Routing() {
    return (
        <Routes>
            <Route path='/' element={<TableExample />}></Route>
        </Routes>
    )
};

export default Routing;
