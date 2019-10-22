import React, {Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import {deleteMessage} from "../../functions/Messages";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { deleteMake } from '../../axios/dataActions';




const onDelete =(id) =>{
    deleteMake(id);    
};

class MakeList extends Component {
    
    deleteBtn = (id) => { 
        return(<Button variant="contained" color="secondary" onClick={() => onDelete(id)} >
        <p>Delete</p>
        <DeleteIcon  />
    </Button>)
    }

    render(){
        return(<TableRow> 
                <TableCell component="th" scope="row"><b>{this.props.name}</b></TableCell>
                <TableCell>{this.props.description}</TableCell>
                <TableCell>
                    {this.deleteBtn(this.props.id)}
                </TableCell>
            </TableRow>)
    }
}

export default MakeList;