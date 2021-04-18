import React from 'react'
import Cart from './Cart'
import '../style/Header.css'

const Header = () => {
    return (
        <div className='header'>
          <h3 className='title'>REDUX SEPET UYGULAMASI</h3>
          <Cart />
        </div>
    )
}
export default Header;