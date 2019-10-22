import axios from 'axios';
import addMake from '../actions/index'
import store from "../store/index";

const addNewMake = (data) =>{
    store.dispatch( addMake(data));
}
export const getMake = () => {
  axios.get('http://camilasautosalesinc.com/API/camilas/getMake.php', {})
  .then(res => {
    addNewMake(res.data);
  }
  ).catch((error) => { console.log('Error on getting Make : ' + error) })
};

const initialValues = () => {
  //get make
  getMake();      
};

export default initialValues;