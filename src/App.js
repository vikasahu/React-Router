import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import home from './components/home'
import about from './components/about'
import contact from './components/contact'
import error from './components/error'
import Navigations from './components/navigations'



 class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigations />
      <Switch>
      <Route path ="/" component={home} exact/>
      <Route path ="/about" component={about}/>
      <Route path ="/contact" component={contact}/>
      <Route component={error}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}



export default App;
