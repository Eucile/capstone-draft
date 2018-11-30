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
        a:hover {
          animation: glitch 0.2s infinite;
        }

        @-webkit-keyframes glitch {
  0% {
    text-shadow: -10px 0px 0px #00ff80;
    left: -1px;
  }
  1% {
    text-shadow: 37px 0px 0px #ffee00;
    left: -3px;
  }
  2% {
    text-shadow: -3px 0px 0px #00aaff;
    left: -2px;
  }
  3% {
    text-shadow: -8px 0px 0px #c0147c;
    left: -1px;
  }
  4% {
    text-shadow: 15px 0px 0px #00aaff;
    left: 0px;
  }
  5% {
    text-shadow: 37px 0px 0px #ffee00;
    left: -4px;
  }
  6% {
    text-shadow: 31px 0px 0px #00ff80;
    left: -2px;
  }
  7% {
    text-shadow: 3px 0px 0px #00ff80;
    left: -2px;
  }
  8% {
    text-shadow: 30px 0px 0px #c0147c;
    left: 2px;
  }
  9% {
    text-shadow: -1px 0px 0px #00aaff;
    left: 5px;
  }
  10% {
    text-shadow: 1px 0px 0px #00ff80;
    left: 4px;
  }
  11% {
    text-shadow: 31px 0px 0px #00aaff;
    left: 6px;
  }
  12% {
    text-shadow: 26px 0px 0px #00ff80;
    left: -2px;
  }
  13% {
    text-shadow: 31px 0px 0px #00aaff;
    left: -5px;
  }
  14% {
    text-shadow: 6px 0px 0px #00aaff;
    left: 2px;
  }
  15% {
    text-shadow: 1px 0px 0px #ffee00;
    left: 5px;
  }
  16% {
    text-shadow: 11px 0px 0px #00aaff;
    left: -3px;
  }
  17% {
    text-shadow: 37px 0px 0px #ffee00;
    left: -5px;
  }
  18% {
    text-shadow: -9px 0px 0px #ffee00;
    left: 0px;
  }
  19% {
    text-shadow: 17px 0px 0px #00aaff;
    left: -4px;
  }
  20% {
    text-shadow: 17px 0px 0px #00aaff;
    left: 1px;
  }
  21% {
    text-shadow: 33px 0px 0px #00ff80;
    left: -2px;
  }
  22% {
    text-shadow: 2px 0px 0px #c0147c;
    left: 4px;
  }
  23% {
    text-shadow: 30px 0px 0px #00ff80;
    left: -1px;
  }
  24% {
    text-shadow: 38px 0px 0px #c0147c;
    left: 4px;
  }
  25% {
    text-shadow: 4px 0px 0px #00ff80;
    left: 1px;
  }
  26% {
    text-shadow: 19px 0px 0px #00ff80;
    left: 6px;
  }
  27% {
    text-shadow: 13px 0px 0px #ffee00;
    left: -4px;
  }
  28% {
    text-shadow: 24px 0px 0px #00aaff;
    left: 2px;
  }
  29% {
    text-shadow: 8px 0px 0px #c0147c;
    left: -1px;
  }
  30% {
    text-shadow: -2px 0px 0px #00ff80;
    left: -4px;
  }
  31% {
    text-shadow: 35px 0px 0px #00aaff;
    left: -1px;
  }
  32% {
    text-shadow: 2px 0px 0px #ffee00;
    left: 0px;
  }
  33% {
    text-shadow: 27px 0px 0px #c0147c;
    left: 3px;
  }
  34% {
    text-shadow: 14px 0px 0px #ffee00;
    left: 0px;
  }
  35% {
    text-shadow: 16px 0px 0px #ffee00;
    left: 6px;
  }
  36% {
    text-shadow: 0px 0px 0px #00ff80;
    left: 0px;
  }
  37% {
    text-shadow: 10px 0px 0px #c0147c;
    left: 5px;
  }
  38% {
    text-shadow: 5px 0px 0px #ffee00;
    left: -3px;
  }
  39% {
    text-shadow: 35px 0px 0px #00ff80;
    left: 2px;
  }
  40% {
    text-shadow: 18px 0px 0px #00ff80;
    left: -1px;
  }
  41% {
    text-shadow: 14px 0px 0px #00ff80;
    left: 0px;
  }
  42% {
    text-shadow: 0px 0px 0px #00aaff;
    left: -4px;
  }
  43% {
    text-shadow: 31px 0px 0px #00aaff;
    left: -5px;
  }
  44% {
    text-shadow: 17px 0px 0px #ffee00;
    left: 4px;
  }
  45% {
    text-shadow: 31px 0px 0px #ffee00;
    left: -5px;
  }
  46% {
    text-shadow: 37px 0px 0px #c0147c;
    left: 2px;
  }
  47% {
    text-shadow: -5px 0px 0px #00ff80;
    left: -4px;
  }
  48% {
    text-shadow: 10px 0px 0px #ffee00;
    left: 4px;
  }
  49% {
    text-shadow: 11px 0px 0px #00ff80;
    left: 6px;
  }
  50% {
    text-shadow: 36px 0px 0px #00ff80;
    left: -2px;
  }
  51% {
    text-shadow: 22px 0px 0px #00ff80;
    left: -3px;
  }
  52% {
    text-shadow: -4px 0px 0px #00aaff;
    left: -4px;
  }
  53% {
    text-shadow: 29px 0px 0px #00aaff;
    left: 1px;
  }
  54% {
    text-shadow: 1px 0px 0px #ffee00;
    left: -1px;
  }
  55% {
    text-shadow: -2px 0px 0px #00aaff;
    left: -4px;
  }
  56% {
    text-shadow: 5px 0px 0px #00ff80;
    left: -3px;
  }
  57% {
    text-shadow: 28px 0px 0px #ffee00;
    left: -3px;
  }
  58% {
    text-shadow: 6px 0px 0px #00ff80;
    left: 5px;
  }
  59% {
    text-shadow: 0px 0px 0px #00ff80;
    left: -2px;
  }
  60% {
    text-shadow: 10px 0px 0px #c0147c;
    left: -4px;
  }
  61% {
    text-shadow: -1px 0px 0px #00aaff;
    left: -5px;
  }
  62% {
    text-shadow: -8px 0px 0px #ffee00;
    left: -2px;
  }
  63% {
    text-shadow: 24px 0px 0px #ffee00;
    left: 5px;
  }
  64% {
    text-shadow: 37px 0px 0px #c0147c;
    left: 4px;
  }
  65% {
    text-shadow: 30px 0px 0px #00aaff;
    left: -3px;
  }
  66% {
    text-shadow: 20px 0px 0px #00ff80;
    left: 0px;
  }
  67% {
    text-shadow: 35px 0px 0px #ffee00;
    left: 0px;
  }
  68% {
    text-shadow: 31px 0px 0px #00aaff;
    left: -5px;
  }
  69% {
    text-shadow: 26px 0px 0px #00aaff;
    left: -5px;
  }
  70% {
    text-shadow: 17px 0px 0px #ffee00;
    left: 2px;
  }
  71% {
    text-shadow: 29px 0px 0px #00aaff;
    left: -1px;
  }
  72% {
    text-shadow: 8px 0px 0px #00aaff;
    left: 4px;
  }
  73% {
    text-shadow: 9px 0px 0px #00aaff;
    left: 6px;
  }
  74% {
    text-shadow: -5px 0px 0px #c0147c;
    left: -4px;
  }
  75% {
    text-shadow: 10px 0px 0px #00aaff;
    left: 5px;
  }
  76% {
    text-shadow: 1px 0px 0px #00ff80;
    left: -2px;
  }
  77% {
    text-shadow: 35px 0px 0px #00aaff;
    left: 1px;
  }
  78% {
    text-shadow: 10px 0px 0px #00aaff;
    left: -5px;
  }
  79% {
    text-shadow: 19px 0px 0px #00aaff;
    left: 5px;
  }
  80% {
    text-shadow: 5px 0px 0px #00aaff;
    left: -1px;
  }
  81% {
    text-shadow: 33px 0px 0px #00aaff;
    left: -1px;
  }
  82% {
    text-shadow: 7px 0px 0px #00aaff;
    left: 1px;
  }
  83% {
    text-shadow: 33px 0px 0px #00ff80;
    left: -5px;
  }
  84% {
    text-shadow: -8px 0px 0px #ffee00;
    left: 5px;
  }
  85% {
    text-shadow: 1px 0px 0px #ffee00;
    left: 2px;
  }
  86% {
    text-shadow: 36px 0px 0px #c0147c;
    left: 5px;
  }
  87% {
    text-shadow: 7px 0px 0px #ffee00;
    left: -4px;
  }
  88% {
    text-shadow: 4px 0px 0px #00ff80;
    left: 1px;
  }
  89% {
    text-shadow: 14px 0px 0px #00aaff;
    left: 2px;
  }
  90% {
    text-shadow: 4px 0px 0px #c0147c;
    left: -2px;
  }
  91% {
    text-shadow: 20px 0px 0px #c0147c;
    left: 5px;
  }
  92% {
    text-shadow: 19px 0px 0px #00ff80;
    left: 5px;
  }
  93% {
    text-shadow: 32px 0px 0px #00aaff;
    left: -2px;
  }
  94% {
    text-shadow: 18px 0px 0px #00aaff;
    left: -3px;
  }
  95% {
    text-shadow: 20px 0px 0px #00ff80;
    left: -5px;
  }
  96% {
    text-shadow: 27px 0px 0px #00aaff;
    left: -3px;
  }
  97% {
    text-shadow: 19px 0px 0px #00aaff;
    left: 3px;
  }
  98% {
    text-shadow: 34px 0px 0px #c0147c;
    left: -2px;
  }
  99% {
    text-shadow: 22px 0px 0px #ffee00;
    left: -1px;
  }
  100% {
    text-shadow: 37px 0px 0px #00ff80;
    left: 5px;
  }
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
