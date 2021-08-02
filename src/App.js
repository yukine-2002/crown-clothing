import './App.css';
import HomePage from './Pages/homepage.component';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import ShopPage from './Pages/shop/shop.component'
import Header from './Component/header/header.component';
import SignInAndSignOut from './Pages/sign-in-and-sign-out/sign-in-and-sign-out';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import {selectorCurrentUser} from './redux/user/user.selectors';
import CheckOut from './Pages/checkout/checkout.component';
class App extends React.Component {
  constructor (){
    super();

    this.state = {
      currentUser : null
    }
  }
  
unsubcribeFromAuth = null;

componentDidMount() {

  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
      
      setCurrentUser({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

      });
    }
    setCurrentUser(userAuth );
  });
}
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render (){
    return (
      <div className="App">
        <Header />
        <Switch>
           <Route exact path ='/' component={HomePage} />
           <Route  path ='/shop' component={ShopPage} />
           <Route  path ='/checkout' component={CheckOut} />
           <Route exact path ='/signs' render = {()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignOut />)} />
        </Switch>
      
      </div>
    );
  }
  
}
const mapStateToProps = (state) =>({
  currentUser : selectorCurrentUser(state)
})
const MapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,MapDispatchToProps)(App);
