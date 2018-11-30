import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainArticle from "./MainArticle";
import { Switch, Route } from 'react-router-dom';
import NewPostControl from './NewPostControl';

function App(){
  var mainDiv = {
    width: 970,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'rgba(0, 0, 0, .7)',
    color: 'white',
    padding: '1em',
  }
  return (
    <div style={mainDiv}>
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');
        body {
          margin: 0;
          background-image: url('https://user-images.githubusercontent.com/24794294/37569578-b9bcb63e-2ae4-11e8-84e3-eaaeeaab6ba0.png');
          height: 100vh;
          width: 100%;
          background-size: cover;
          display: table;
          font-family: 'Nunito Sans', sans-serif;
        }
        li {
          list-style: none;
        }
        a {
          text-decoration: none;
          color: white;
        }
    `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainArticle} />
        <Route path='/NewPostControl' component={NewPostControl} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
