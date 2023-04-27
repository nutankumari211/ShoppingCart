import React from 'react'

class CartItem extends React.Component{
    render(){
        return (
        <div className="cart-item">
            <div className="left-block">
               <img style={styles.image}/>

            </div>
            <div className="right-block">
                <div style={{fontSize:25,color:'red'}}>Phone</div>
                <div style={{fontSize:25,color:'red'}}>Rs. 999</div>
                <div style={{fontSize:25,color:'red'}}>Qty:1</div>
                <div className='cart-item-actions'>
                    {/*Buttons */}
                </div>
            </div>
        </div>
        );
    }
}

//styling by making objects

const styles={
    image:{
        height:110,
        width:120,
        borderRadius:4,
        background:'#ccc'
    }
}


export default CartItem;