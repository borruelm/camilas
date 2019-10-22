import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import getMake from '../../axios/preload';
import { saveMake } from '../../axios/dataActions';
import store from '../../store/index';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import initialValues from '../../axios/preload';
import TableBody from '@material-ui/core/TableBody';
import MakeList from './MakeList'


const getState = () =>{
    //get values from db
    initialValues();
    return store.getState().make;    
};

const Make = () => {
    let mkList = getState() === undefined ? [{"id": 0}] :getState() ;

    const [values, setValues] = React.useState({
        make: '',
        comments: '',
    });

    const handleChange = (name) => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const save= () =>{
        saveMake(values)
        getMake()
        values.comments='';
        values.make = '';
        setValues({ ...values,  make :'' , comments : ''} );
    }

    return(<div>
        <Card>
            <Table>
                <TableRow>
                    <TableCell component="th" scope="row">
                        <TextField
                        id="standard-dense"
                        label="Make"
                        margin="dense"
                        onChange={handleChange('make')}
                        value={values.make}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                        id="standard-dense"
                        label="Comments"
                        margin="dense"
                        onChange={handleChange('comments')}
                        value={values.comments}
                        />
                    </TableCell>
                    <TableCell>
                        <Button variant="contained" color="primary" onClick={() => save()}>
                            Save
                            <SaveIcon />
                        </Button>
                    </TableCell>
                </TableRow>
            </Table>
            <Table>
                <TableBody>
                    { mkList && mkList.map((element) => (
                        <MakeList id={element.id} description={element.name}  name={element.id}/>)
                    )
                    }
                </TableBody>                
            </Table>
        </Card>
    </div>)
}

export default Make;