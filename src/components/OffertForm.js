import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { sendOffertEmail } from '../axios/dataActions';
import Switch from '@material-ui/core/Switch';
import {okMessage, badMessage, deleteMessage} from "../functions/Messages"



function OffertForm(props) {
    const [values, setValues] = React.useState({
        fullName: '',
        email: '',
        telephone:'',
        address:'',
        oferta:false,
        montoOferta:'',
        comentarios:'',
    });

    const handleChange = (name) => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const checkOferta = () =>{
        if(values.oferta){
            setValues({...values, oferta: false});
        }else{
            setValues({...values, oferta: true});
        }
    }
    const validateFields = () => {
        
        if(values.fullName.lenght <= 0)
            return false;
        
        if(values.email.length <= 0 )
            return false;

        if(values.telephone.length <= 0)
            return false; 

        if(values.address.length <= 0)
            return false;

        if(values.oferta){
            if(values.montoOferta.length < 0)
                return false;
        }
        
        return true;

    }

    const save= (handleClose) =>{
        const valid = validateFields();
        debugger
        if(valid){
            debugger
            sendOffertEmail(values);
            handleClose()
        }else{
            badMessage('Todos los campos son requeridos, favor de verificar')
        }
    }
    return(
        <div>
            <Paper>
                <h3>Aplicar credito {props.id}</h3>
            <Card>
                <Table>
                    <TableRow>
                        <TableCell scope="row" colSpan="2">
                            <TextField
                            fullWidth="true"
                            label="Nombre completo"
                            margin="dense"
                            onChange={handleChange('fullName')}
                            value={values.fullName}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                            id="standard-dense"
                            fullWidth="true"
                            label="Email"
                            margin="dense"
                            onChange={handleChange('email')}
                            value={values.email}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <TextField
                            id="standard-dense"
                            label="Telefono"
                            margin="dense"
                            type="number"
                            inputProps={{
                                maxLength: 10,
                              }}
                            onChange={handleChange('telephone')}
                            value={values.telephone}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row" colSpan="2">
                            <TextField
                            fullWidth="true"
                            id="standard-dense"
                            label="Domicilio"
                            margin="dense"
                            onChange={handleChange('address')}
                            value={values.address}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan="2">
                            Hacer una oferta
                            <Switch
                            color="primary"
                            onChange={checkOferta}
                            checked={values.oferta}
                            />
                            
                            {values.oferta === true &&
                                <div>
                                    <TextField
                                    id="standard-dense"
                                    label="Monto a ofertar "
                                    margin="dense"
                                    type="number"
                                    inputProps={{
                                        maxLength: 25,
                                    }}
                                    onChange={handleChange('montoOferta')}
                                    value={values.montoOferta}
                                    /><br />
                                    <TextField
                                    fullWidth="true"
                                    id="standard-dense"
                                    label="Comentarios "
                                    
                                    margin="dense"
                                    onChange={handleChange('comentarios')}
                                    value={values.comentarios}
                                    /><br />
                                </div>
                            }
                            

                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell scope="row" >
                        Todos los campos son obligatorios.
                        </TableCell>
                        <TableCell scope="row" >
                            <Button variant="contained" color="secondary" onClick={() => {props.handleClose()}}>
                                Cancelar
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => save(props.handleClose)}>
                                Enviar
                                <SaveIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                </Table>
            </Card>
            </Paper>
        </div>
    )

}

export default OffertForm;