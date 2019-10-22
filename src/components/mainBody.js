import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ImgMediaCard from './cardElement'
import Grid from '@material-ui/core/Grid';
import imgCar1 from '../img/imgCar1.jpg';
import imgCar2 from '../img/imgCar2.jpg'
import MainCarousel from './carousel';
import AdminTab from './tabs/AdminTabs'
import SpringModal from './Modal'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth:960,
    minWidth:360,
    margin: 'auto',
  },
  
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <SpringModal id="id del articulo"/>
          </Grid>
          <Grid item xs={12}>
            <AdminTab />
          </Grid>
          <Grid item xs={12}>
            <MainCarousel />
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ImgMediaCard img={imgCar1}/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ImgMediaCard img={imgCar2} />
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        <Typography variant="h5" component="h3">
          Welcome to your future website!
        </Typography>
        <Typography component="p">
        Northwest Arkansas (NWA, officially designated by the United States Census Bureau as the Fayetteville–Springdale–Rogers Metropolitan Statistical Area) includes Fayetteville, Springdale, Rogers, and Bentonville, the third, fourth, eighth and tenth largest cities in Arkansas. These cities are located within Benton and Washington counties; NWA also includes Madison County, Arkansas.
As per the 2016 United States Census Bureau estimates, NWA is the 105th largest metropolitan statistical area in the U.S. (525,032 residents)[2] and the 22nd fastest growing in the United States. The MSA covers 3,213.01 sq mi (8,322 km2), located within the Boston Mountains and Springfield Plateau subsets of The Ozarks.
Northwest Arkansas doubled in population between 1990 and 2010. Growth has been driven by the three Fortune 500companies based in NWA: Walmart, Tyson Foods, and J.B. Hunt Transport Services, Inc., as well as over 1,300 suppliers and vendors drawn to the region by these large businesses and NWA's business climate. The region has also seen significant investment in amenities, including the Crystal Bridges Museum of American Art, the Walmart AMP, and the NWA Razorback Regional Greenway.
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);