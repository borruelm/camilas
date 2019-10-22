import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import  Make from '../admin/Make';
import CreateArticle from '../admin/CreateArticle';
import Model from '../admin/Model';

const ItemMake = () => {  return Make() };
const ItemModel = () => { return Model()};


function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };


  
const AdminTab = (props) =>{

    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return(<div>
        <AppBar position="static" color="default">
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            >
                <Tab label ="Welcome Admin" />
                <Tab label ="Article" />
                <Tab label ="Make" />
                <Tab label ="Model" />
            </Tabs>
        </AppBar>
        <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        >
            <TabContainer dir="welcomeAdmin">Item One</TabContainer>
            <TabContainer dir="Make"><CreateArticle /></TabContainer>
            <TabContainer dir="Make"><ItemMake /> </TabContainer>
            <TabContainer dir="Model"> <ItemModel /></TabContainer>

            
        </SwipeableViews>
    </div>);

}

export default AdminTab;