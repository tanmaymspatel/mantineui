import { Routes, Route } from 'react-router-dom'
import { createStyles } from '@mantine/core';

import TableExample from '../../components/TableExample';
import Dashboard from '../../components/Dashboard/Dashboard';
import PageNotFound from './PageNotFound';

const useStyle = createStyles(() => ({
    wrapper: {
        padding: "16px"
    }
}))
/**
 * @returns Routing of the application 
 */
function Routing() {

    const { classes } = useStyle();

    return (
        <div className={classes.wrapper} >
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='/table' element={<TableExample />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
};

export default Routing;
