import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Select from '@material-ui/core/Select';


const save= () =>{
    
}

const Model = () =>{

    return(<Card>
        <Table>
            <TableRow>
                <TableCell component="th" scope="row">
                    <TextField
                    id="standard-full-width"
                    label="Model"
                    margin="dense"
                    fullWidth
                    />
                </TableCell>
                <TableCell>
                   <Select>
                       
                   </Select>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                <TextField
                    id="standard-dense"
                    label="Comments"
                    margin="dense"
                    fullWidth
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
                <p>viva Jalisco</p>
            </TableBody>                
        </Table>
    </Card>);
}

export default Model;