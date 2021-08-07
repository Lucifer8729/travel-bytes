import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Modal, Backdrop, Fade } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Home = (props) => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  

  return (
    <Grow in>
      <Container>
        <Container>
            <Posts setCurrentId={setCurrentId} />
        </Container>
        {props.addPost ? (
          <Modal
            open={props.addPost} 
            className={classes.modal}
            onClose={props.handleAddPost} 
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }} >
            <Fade in={props.addPost}>
              <Container maxWidth='sm'>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Container>
            </Fade>
          </Modal>
        ) : null}
      </Container>
    </Grow>
  );
};

export default Home;
