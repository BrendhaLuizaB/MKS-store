"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Header from '@/components/header';
import Footer from '@/components/footer';
import Cart from '@/components/cart';
import { useState } from 'react';



const inter = Inter({ subsets: ['latin'] })

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
const [isOpenCart, setIsOpenCart] = useState(false)

const openCart = () => {
    setIsOpenCart(true)
}
  return (
    <QueryClientProvider client={queryClient}>
    <html lang="en">
      <body className={inter.className} style={{backgroundColor: "#ffff"}}>
        <Header isOpenCart={isOpenCart} openCart={openCart}/>
        {isOpenCart && <Cart/>}
        {children}
        <Footer/>
        </body> 
    </html>
    </QueryClientProvider>
  )
}
