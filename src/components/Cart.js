import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Divider, SpaceBetween } from './styled'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../actions/cartActions'
import { saveCart } from '../reducers'

const CartDropdown = styled.div`
    background-color: #1F1F1F;
    position:fixed; 
    bottom:30px;
    width:380px;
    right:0;
    transform:translateX(-25px);
    color:white;
    z-index:100;
    padding:20px 20px 20px 20px;
    border-radius: 6px;
    border: solid 1px rgba(0,0,0,0.2);
    font-family:'Roboto';
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    display:${props => !props.showCart ? 'none' : 'block'};

    a{
        padding:8px 20px;
        text-transform:capitalize;
    }

    .cart{
        padding-bottom:20px;
        font-family:'Roboto Mono';
        font-weight:bold;
        font-size:22px;
        line-height:22px;
    }
`

const StyledItem = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-bottom:10px;

    &:last-child{
        padding-bottom:20px;
    }

    .info{
        display:flex;
        flex-direction:column;

        .name{
            font-size:14px;
        }

        .price{
            margin-top:2px;
            font-weight:bold;
        }
    }

    .quantity{
        display:flex;
        align-items:center;

        .delete{
            margin-left:6px;
            line-height:20px;
            font-size:11px;
            width:16px;
            height:16px;
            display:flex;
            justify-content:center;
            align-items:center;
            background:black;
            border-radius:10px;
            cursor:pointer;
        }
    }

    .name{
        text-transform:capitalize;
    }
`

const Total = styled.div`
    position:relative;
    font-size:26px;
    font-weight:bold;
    margin-left:12px;
    margin-top:20px;

    &::before{
        content:'$';
        position:absolute;
        display:block;
        left:-12px;
        top:6px;
        font-size:12px;
    }
`


function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <StyledItem>
            <div className="info">
                <div className="name">{item.name}</div>
                <div className="price">${item.price}</div>
            </div>
            <div className="quantity">
                <div>{item.quantity}</div>
                <div className="delete" onClick={() => dispatch(removeFromCart(item))}>x</div>
            </div>
        </StyledItem>
    )
}

export default function Cart({ setShowCart, showCart }) {
    const cartItems = useSelector(props => props.cart)

    useEffect(() => {
        saveCart(cartItems);
    }, [cartItems])


    if (!cartItems || !cartItems.length)
        return (
            <CartDropdown showCart={showCart}>
                <SpaceBetween>
                    <div className="cart">Cart</div>
                    <div style={{ cursor: 'pointer' }} onClick={setShowCart}>
                        <svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px" fill="#fff"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" /></svg>
                    </div>
                </SpaceBetween>

                Your cart is empty.
            </CartDropdown >
        )


    return (
        <CartDropdown showCart={showCart}>
            <SpaceBetween>
                <div className="cart">Cart</div>
                <div style={{ cursor: 'pointer' }} onClick={setShowCart}>
                    <svg height="20px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="20px" fill="#fff"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" /></svg>
                </div>
            </SpaceBetween>

            <div>
                {cartItems.map(item => <CartItem key={item.name} item={item} />)}
            </div>

            <Divider dark />
            <Total>{cartItems.reduce((value, item) => value + item.price * item.quantity, 0)}.00</Total>
        </CartDropdown>
    )
}
