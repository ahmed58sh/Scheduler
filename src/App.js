import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history';
import AsyncComponent from './AsyncComponent';

const Loginpage = AsyncComponent(() =>
  import('./Pages/Appointment/Appointment').then(module => module.default)
)

const AppointmentDetails = AsyncComponent(() =>
  import('./Pages/AppointmentDetails/AppointmentDetails').then(module => module.default)
)

const history = createHistory();



export class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props, context)
  } 

  componentDidMount() {
   
  }

  componentWillUnmount() {

  }

  render() {
    if (history.location.pathname !== '/' ) {
      history.push('/');
    }
    return (         
      <Router history={history}>
        <Switch>
          <>

            <Route path="/" exact component={Loginpage} /> 
            <Route path="/AppointmentDetails" exact component={AppointmentDetails} />
          </>
        </Switch>
      </Router>
    );
  }
}

export default App
