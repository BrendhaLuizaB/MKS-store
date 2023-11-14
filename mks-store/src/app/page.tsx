"use client"
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from './../../ultils/url';
import CardProducts from "@/components/cards";
import { ContainerProducts } from "@/components/style/style.products";
import Header from "@/components/header";
import Cart from "@/components/cart";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const [isOpenCart, setIsOpenCart] = useState(false)

const openCart = () => {
    isOpenCart ? setIsOpenCart(false) : setIsOpenCart(true)
}
  const { data, isLoading } = useQuery(["products"], () => {
    return axios.get(BASE_URL).then(response => response.data);
  });

  if (isLoading) {
    return <h1>Carregando</h1>;
  }


  console.log(data)
  return (
    <>
    <Header isOpenCart={isOpenCart} openCart={openCart}/>
    {isOpenCart && <Cart openCart={openCart} data={data}/>}
    <ContainerProducts>
      {data.products.map((product: any, index: any) => (
        <div key={index}>
          <CardProducts product={product} isOpenCart={isOpenCart} openCart={openCart}/>
        </div>
      ))}
    </ContainerProducts>
    <Footer/>
    </>
  );
}
