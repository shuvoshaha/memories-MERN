import React, { useEffect, useState } from 'react'
import './App.css';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Posts from './conponents/Posts/Posts';
import Form from './conponents/From/Form';
import useStyle from './styles'
import { useDispatch } from 'react-redux'
import { getPost } from './actions/post'


function App() {

  const [currentId, setCurrentId] = useState(null)
 
  const dispatch = useDispatch()

  // get post
  useEffect(() => {
      dispatch(getPost())
  }, [dispatch])

  console.log(currentId)

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
             <Posts currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
