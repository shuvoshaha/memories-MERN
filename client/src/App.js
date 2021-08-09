import React, { useEffect } from 'react'
import './App.css';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Posts from './conponents/Posts/Posts';
import Form from './conponents/From/Form';
import useStyle from './styles'
import { useDispatch } from 'react-redux'
import { getPost } from './actions/post'


function App() {
  useEffect(() => {
     
  }, [])

  const classes = useStyle()
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.header} align="center" variant="h2">Memories</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container spacing={3} alignItems="stretch" justifyContent="space-between">
            <Grid item xs={12} sm={7}>
             <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
