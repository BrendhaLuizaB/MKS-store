import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BoxCart, BoxLogo, CounterItems, HeaderBox, LogoCart, LogoText, SubtextLogo} from './style/style.header'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface PropsCartFunction {
    isOpenCart: boolean;
    openCart: () => void;
  }

function Header({ isOpenCart, openCart }: PropsCartFunction) {
  
    return ( 
    <HeaderBox>
        <LogoCart>
            <BoxLogo>
                <LogoText>MKS</LogoText>
                <SubtextLogo>Sistemas</SubtextLogo>
            </BoxLogo>
            <BoxCart onClick={() => openCart()}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <CounterItems>0</CounterItems>
            </BoxCart>
        </LogoCart>
    </HeaderBox> 
    );
}

export default Header;