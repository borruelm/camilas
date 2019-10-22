import React from 'react';
import Card from '@material-ui/core/Card';
import ImageUpload from './imageUpload';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

class CreateArticle  extends React.Component {
    state = {
        title: '',
        brand: '',
        model: '',
        description: '',
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    render(){
        return(
            <Card>
                <Typography variant="h5" component="h3">
                    Create new article
                </Typography>
                <FormControl style={{width: '100%'}}>
                    <Grid container spacing={24}>
                        <Grid item xs={12}>
                        <ImageUpload />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-full-width"
                                label="Title"
                                style={{ margin: 8 }}
                                placeholder="Enter car's brand"
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                helperText="best car o'Year"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                id="standard-full-width"
                                label="Brand"
                                style={{ margin: 8 }}
                                placeholder="Enter car's brand"
                                value={this.state.brand}
                                onChange={this.handleChange('brand')}
                                helperText="Acura, BMW, Chevrolet, Dodge, Ford, Etc."
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                                <Button>

                                </Button>
                        </Grid>
                        <Grid item xs={6} style={{textAlign:"right"}}>
                            <Button variant="contained" color="secondary" size="small" style={{ marginRight:10}} >
                                <DeleteIcon/>
                                Cancel
                            </Button>
                            <Button color="primary" variant="contained" size="small" style={{ marginRight:10}}>
                                <SaveIcon />
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                    
                </FormControl>
                
            </Card>
        );
    }
}

export default CreateArticle;