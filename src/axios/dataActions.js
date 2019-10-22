import axios from 'axios';
import {okMessage, badMessage, deleteMessage} from "../functions/Messages"


export const saveMake = (values) =>{
    axios.post('http://camilasautosalesinc.com/API/camilas/saveMake.php', 
            {name: values.make, comments: values.comments })
          .then(response => {
            if(response.status === 201){
                okMessage('new make ' + values.make + ' saved succesfully!');
            }else if(response.status === 400){
                badMessage( values.make + 'Not saved')
            }else{
                badMessage( values.make + 'Not saved')
            }
        }).catch( error => {
            console.log(error);
            badMessage( 'Not saved : ' + error)
        });
};

export const deleteMake = (values) =>{
    axios.delete( 'http://camilasautosalesinc.com/API/camilas/deleteMake.php?idNumber=' + values)
    .then((response) =>{
        console.log(response)
        if(response.status === 200){
            deleteMessage(response + 'successful deleted!');
        }else{
            badMessage( values + 'not deleted')
        }
    });
};

export const sendOffertEmail = (value) =>{
    axios.post('http://camilasautosalesinc.com/services/mail/postEmail.php', 
            {test: 'from website '})
          .then(response => {
            if(response.status === 201){
                okMessage('offert sent succesfully!');
            }else if(response.status === 400){
                badMessage('Offert not send')
            }else{
                badMessage( 'Offert not send')
            }
        }).catch( error => {
            console.log(error);
            badMessage( 'Not saved : ' + error)
        });

}