'use client'

import { PropsWithChildren, createContext, useState } from 'react'

export type CartItem = {
  productId: string
  quantity: number
}

export type CartContextData = {
  items: CartItem[]
  addToCart: (productId: string) => void
}

export const CartContext = createContext({} as CartContextData)

export function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: string) {
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
