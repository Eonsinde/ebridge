import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from '../store'; 
import { loadUser } from '../actions/auth'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RouteControl from './routes/RouteControl';
import PrivateRoute from './routes/PrivateRoute';

import Alert from './layout/Alert';
import Home from './layout/Home';
import Explore from './layout/Explore';
import Products from './layout/Products';
import Faqs from './content/Faqs';
import Wishlist from './content/Wishlist';


import Contact from './forms/Contact';
import Support from './forms/SupportUs';

import FormsHolder from './forms/FormsHolder';

import Dashboard from './users/Dashboard';

// import Test from './layout/Test';
// import Test2 from './layout/Test2';

import PageNotFound from './common/PageNotFound';
import ImgUploader from './layout/imgUploader/ImgUploader';


import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
    barColors: {
      "0": "#fff",
      "1.0": "#fff"
    },
    shadowBlur: 5
  });

class App extends Component {
    componentDidMount(){  
        store.dispatch(loadUser());
    }

    render() { 
        return(
            <Provider store={store}>
                <Router>
                    <Alert />
                    <Switch>
                        <RouteControl navFixed={false} exact path='/' component={Home} />
                        <RouteControl navFixed={false} path='/explore' component={Explore} />
                        <RouteControl navFixed={false} path='/products' component={Products} />
                        <RouteControl navFixed={false} path='/faQs' component={Faqs} />
                        <RouteControl navFixed={false} path='/wish-list' component={Wishlist} />
                        
                        <Route path="/forms" component={FormsHolder}/>
                        <Route path="/contact" component={Contact} />
                        <Route path='/support-us' component={Support} />

                        <PrivateRoute navFixed={true} path='/dashboard/u/:id' component={Dashboard} />


                        {/* <RouteControl path='/upload' component={Test2} /> */}
                        {/* <RouteControl path='/img-uploader' component={ImgUploader} /> */}

                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App; 
