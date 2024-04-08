'use client'

import { PropsWithChildren, createContext, useState } from 'react'

export type CartItem = {
  productId: number
  quantity: number
}

export type CartContextData = {
  items: CartItem[]
  addToCart: (productId: number) => void
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some(
        (product) => product.productId === productId,
      )

      if (productInCart) {
        return state.map((product) => {
          if (product.productId === productId) {
            return { ...product, quantity: product.quantity + 1 }
          }

          return product
        })
      } else {
        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
