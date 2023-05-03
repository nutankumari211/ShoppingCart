import React from 'react';

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img style={styles.cartIcon} src="data:image/png;base64,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" 
         alt="cart-icon" />
        <span style={styles.cartCount}> {props.count} </span>
      </div>
    </div>
  );
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
    position: 'absolute',
    right: 0,
    top: -9
  }
};


export default Navbar;