import { Button, Card,  CardContent,CardActionArea, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui';


const useStyles = makeStyles()(() => {
    return {
        card:{
            display: 'flex',
        },
        cardDetails:{
            flex: 1,
        },
        CardMedia:{
            width: 160,
        },
    
    };
  });


const PostCard = (prop) => {
    
    const {classes} = useStyles();
  return (
    <>  
        <Grid item xs={12} md={6} >
        <CardActionArea  >
        <Card className={classes.card}>
        <div className={classes.cardDetails}>
            <CardContent>
                <Typography component="h2" variant="h5">
                    {prop.title}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                {prop.description}
                
                </Typography>
                <Button variant="contained" style={{backgroundColor:"#8000FF"}}>Attend</Button>
            </CardContent>
        </div>
        
        

        <Hidden xsDown>
            <CardMedia className={classes.CardMedia} image={prop.image} ></CardMedia>
        </Hidden>
        </Card>
        </CardActionArea>
        </Grid>
    </>
  )
}

export default PostCard