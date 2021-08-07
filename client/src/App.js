import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Map from "./components/Map/Map";

const App = () => {

  const [addPost, setAddPost] = useState(false);

  const handleAddPost = () =>{
    setAddPost((prevValue)=>(!prevValue));
  }

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar handleAddPost={handleAddPost}/>
        <Switch>
          <Route path="/" exact render={()=>(<Home addPost={addPost} handleAddPost={handleAddPost} />)} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/explore" exact component={Map} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
