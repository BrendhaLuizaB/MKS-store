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

function CardProducts({ product }: { product: any }) {
  return (
    <>
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
            <ShopButton>
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
