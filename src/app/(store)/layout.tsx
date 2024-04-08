import { PropsWithChildren } from 'react'
import { Header } from '@/components/header'
import { CartContextProvider } from '@/contexts/cart-context'

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <CartContextProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 py-8">
        <Header />
        {children}
      </div>
    </CartContextProvider>
  )
}
