import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";


<<<<<<< Updated upstream
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid  
        className={classes.container}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3} >
          {posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={6} md={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
      </Grid>
    )
  );
};
=======
const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                )).reverse()}
            </Grid>
        )
    );
}
>>>>>>> Stashed changes

export default Posts;