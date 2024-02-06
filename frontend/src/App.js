import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage';
import {Route,Switch } from 'react-router-dom';
import Dashboard from './components/page/Dashboard'
import HelpPage from './components/Help';
import RestaurantMenu from './components/restaurantMenu';
import { useState } from 'react';
import filterContext from './utils/context/filterContext';
import { Provider } from 'react-redux';
import appStore from './utils/redux/appStore';
import Cart from './components/Cart';
import MyOrder from './components/MyOrder';
import Feedback from './components/Feedback';
import NotFound from './NotFound';
import Success from './components/Success';
import Failure from './components/Failure';

function App() {
  const [filterData,setFilterData]=useState([]);
  return (
    <>
    <Provider store={appStore}>
    <filterContext.Provider value={{filterData,setFilterData}}>
      <Switch>
          <Route index path='/' component={Dashboard} exact/>
          <Route  path='/home' component={HomePage} exact/>
          <Route path='/about' component={AboutPage} exact/>
          <Route path='/help' component={HelpPage} exact/>
          <Route path='/feedback' component={Feedback} exact/>
          <Route path='/restaurant/:resId' component={RestaurantMenu} exact/>
          <Route exact path='/cart' component={Cart} />
          <Route path='/myorder' component={MyOrder} exact/>
          <Route path='/success' component={Success} exact/>
          <Route path='/failure' component={Failure} exact/>
          <Route component={NotFound} />
          </Switch>
          </filterContext.Provider>
          </Provider>

    </>
  );
}

export default App;
