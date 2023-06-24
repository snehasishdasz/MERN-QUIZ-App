import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui';



const useStyles = makeStyles()(() => {
    return {
      title: {
        fontSize: 40,
        fontStyle: "bold",
        fontFamily: "Arial",
      },
      cover:{
        backgroundImage:`url("./hero.png")`,
        backgroundPosition: "center",
        padding: "50px 40px",
      },
      btn:{

      }
    };
  });
// const useStyles= makeStyles({
//     return{
//         title:{
//             fontSize: 80,
//             fontFamily: "Monsterrat",
//         },

//     }
// })

const FeaturedPost = () => {
  const {classes} = useStyles();

  return (
    <>
      <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
          <Typography className={classes.title} style={{color:'black'}} gutterBottom>
            Best Online Quiz Portal
            <Typography variant='h6'>
            Everyone loves sport. And everyone loves a quiz.
            </Typography>
          </Typography>
        </CardContent>

        <CardActions>
        <Button variant="contained" style={{backgroundColor:"#AC3BF2",color:"white"}}>Get Started</Button>
        </CardActions>
      </Card>
    </>
  )
}

export default FeaturedPost