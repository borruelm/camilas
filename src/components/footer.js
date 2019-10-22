import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      maxWidth:"100%",
      minWidth:360,
      margin: 'auto',
      bottom: 0,
      right:0,
      left:0,
      backgroundColor: '#0000cc',
      color: '#e5e5ff',
    },
    h3:{
      color:'#9999ff',
    },
    p:{
      color:'#e5e5ff'
    },
    
  });
  
  function Footer(props) {
    const { classes } = props;

    return (
      <footer>
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
              <Typography component="p">
                    Ramdom text to show how a paragraph is shown...
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <Typography component="p">
                    Ramdom text to show how a paragraph is shown...
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5" component="h3" className={classes.h3}>
                    About us
                </Typography>
                <Typography component="p">
                    This website it's been developed by the Alien Nations Force Team.
                </Typography>
            </Grid>
          </Grid>
        </Paper>
      </footer>
    );
  }
  
  Footer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footer);