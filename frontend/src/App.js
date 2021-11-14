import logo from './logo.svg';
import './App.css';
import { useSelector,connect } from 'react-redux';

import { useEffect } from 'react';
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import TodoPage from './pages/todoPage';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import { Logout } from './Redux/auth/action';

const PurePrivateRoute = ({ component, isLoggedIn, ...rest }) => {
  const Component = component;
  if (Component != null) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/", state: { from: props.location } }}
            />
          )
        }
      />
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authStore.isLoggedIn,
  };
};


const PrivateRoute = connect(mapStateToProps)(PurePrivateRoute);

function App() {

  return (
    <Router>
    <Switch>
      <Route exact path='/'component={LoginPage}/>
      <PrivateRoute path='/todo'component={TodoPage}/>
      <Route path='/signup'component={SignupPage}/>
    </Switch>
    </Router>
  );
}

// const mapStateToPropsApp = (state) => {
//   return {
//     isLoggedIn: state.authStore.isLoggedIn,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // logOutMDP: () => dispatch(Logout()),
//   };
// };

export default App;
