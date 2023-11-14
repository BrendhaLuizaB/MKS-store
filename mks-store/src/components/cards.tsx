import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {
  BoxCards,
  BoxTittlePrice,
  Description,
  DescriptionShopButtom,
  Image,
  Price,
  ShopButton,
  ShopText,
} from "./style/style.products";
import { useState } from "react";
import Cart from "./cart";

type Product = {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: string;
  updatedAt: string;
};
interface PropsCart {
  isOpenCart: boolean;
  openCart: () => void;
  product: Product;
}

function CardProducts({ isOpenCart, openCart, product }: PropsCart) {
  const emptyCart: Product[] = [];
  const idProduto = product.id;

  const BuyButton = (idProduto: any) => {
    const cartProduct = emptyCart[idProduto];
    console.log(idProduto);
  };

  return (
    <>
      {/* {isOpenCart && <Cart openCart={openCart} product={product} />} */}
      <BoxCards>
        <div>
          <Image src={product.photo} alt="product" />
        </div>
        <BoxTittlePrice>
          <div>
            <div>{product.brand}</div> {product.name}
          </div>
        </BoxTittlePrice>
        <Price>R${product.price}</Price>
        <DescriptionShopButtom>
          <div>
            <Description>
              <p>{product.description}</p>
            </Description>
          </div>
          <div>
            <ShopButton onClick={() => BuyButton(idProduto)}>
              <div>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  style={{ color: "#ffff" }}
                />
              </div>
              <ShopText>Comprar</ShopText>
            </ShopButton>
          </div>
        </DescriptionShopButtom>
      </BoxCards>
    </>
  );
}

export default CardProducts;
