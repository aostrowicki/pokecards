import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from '../pokecard.svg'
import { colors } from './styled/colors'
import Cart from './Cart'

const Nav = styled.nav`
    position:fixed;
    top:0;
    width:100%;
    height:60px;
    z-index:100;
    background-color: #1A1A1A;
    font-family: 'Roboto Mono',sans-serif;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    display:flex;
    padding: 0 60px;

    @media screen and (max-width:1500px){
        padding: 0 20px;
    }
    
    .menu{
        display:flex;
        margin:0;
        padding:0;
        height:100%;
        align-items:center;

        @media screen and (max-width:600px){
            display:none;
        }
    }

    .logo{
        display:flex;
        height:100%;
        align-items:center;
        margin-right: 100px;   
    }
    
    li{
        display:flex;
        list-style:none;
        margin-right: 25px;
    }
    
    
    .cart{
        transform:translateX(-18px);
        flex-position:end;
        display:flex;
        align-items:center;
        position:relative;
        cursor:pointer;
        margin-left:auto;

        .count{
            font-family:'Roboto';
            color:white!important;
            position:absolute;
            font-size:11px;
            line-height:11px;
            font-weight:bold;
            background:black;
            border-radius:10px;
            width:18px;
            height:18px;
            display:flex;
            justify-content:center;
            align-items:center;
            left:104%;
            top:18px;
        }

        &:hover{
            color:#afafaf;
        }
    }
    
    a{
        text-decoration:none;
        color:inherit;
        padding: 5px 0;
        transition:${colors.transition};
        
        &:hover{
            color:#afafaf;
        }
    }

    span{
        height:100%;
        display:flex;
        align-items:center;
        margin-right: 25px;
        cursor:pointer;
        transition:${colors.transition};

        &:hover{
            color:#afafaf;
        }
    }
`

const Dropdown = styled.div`
    background-color: #1F1F1F;
    position:absolute; 
    top:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    flex-direction:column;
    transform:translateX(-25px);
    color:white;
    z-index:10;
    padding:10px 0 20px 10px;
    border-radius: 0 0 6px 6px;
    border: solid 1px rgba(0,0,0,0.2);

    a{
        padding:8px 20px;
        text-transform:capitalize;
    }
`

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const types = useSelector(props => props.types);
    const cartItems = useSelector(props => props.cart.length)
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        if (cartItems)
            setShowCart(true);
    }, [cartItems])

    return (
        <>
            <Nav>
                <div className="logo"><Link className='link' to={`/`}><Logo /></Link></div>
                <ul className="menu">
                    <li><Link className='link' to={`/`}>Home</Link></li>
                    <span onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>Types
                {dropdown && <Dropdown>
                            {types.map(type => <li key={type.name}><Link onClick={() => setDropdown(false)} className='link' to={`/type/${type.name}`}>{type.name}</Link></li>)}
                        </Dropdown>}
                    </span>
                    <li><Link className='link' to={`/pokemon`}>All cards</Link></li>
                </ul>

                <div className="cart" onClick={() => setShowCart(!showCart)}>
                    View Cart
                <div className="count">
                        {cartItems}
                    </div>
                </div>
            </Nav >
            <Cart setShowCart={() => setShowCart(false)} showCart={showCart} />
        </>
    )
}
