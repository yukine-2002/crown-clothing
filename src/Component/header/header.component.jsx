import React from 'react';
import { connect } from 'react-redux';
import './header.style.css';
import { ReactComponent as Logo } from '../../assest/crown.svg.svg';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import CardIcon from '../card-icon/card-icon.component';
import CartDropdow from '../cart-dropdown/cart-dropdown.component';
import { selectorCurrentUser } from '../../redux/user/user.selectors';
import { selectorHidden } from '../../redux/cart/cart.selectors';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className='logo-container' to = '/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser?
                <div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signs' >SIGN IN</Link>
            }
            <CardIcon />
        </div>
        {
            hidden? 
            null:
             <CartDropdow />
        }
      
    </div>
)

const mapStateToProps = (state) => ({
    currentUser:selectorCurrentUser(state),
    hidden:selectorHidden(state),
})

export default connect(mapStateToProps)(Header);