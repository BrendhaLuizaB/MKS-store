"use client"
import axios from "axios";
import { useQuery } from "react-query";
import { BASE_URL } from './../../ultils/url';
import CardProducts from "@/components/cards";
import { ContainerProducts } from "@/components/style/style.products";

export default function Home() {
  const { data, isLoading } = useQuery(["products"], () => {
    return axios.get(BASE_URL).then(response => response.data);
  });

  if (isLoading) {
    return <h1>Carregando</h1>;
  }

  console.log(data)
  return (
    <ContainerProducts>
      {data.products.map((product: any, index: any) => (
        <div key={index}>
          <CardProducts product={product}/>
        </div>
      ))}
    </ContainerProducts>
  );
}
