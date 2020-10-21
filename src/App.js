import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FoodItems from './components/Food/FoodItems';

function App() {
  
  return (
    <div>
    <Header></Header>
    <Banner> </Banner>
    <FoodItems></FoodItems>

    </div>
    // <Router>
    //   <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch>
    // </Router>
  );
}

export default App;