import { memo, useState } from "react"
import dynamic from 'next/dynamic'
import { AddProductToWishlistProps } from './AddProductToWishlist'
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() =>
  import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist),
  {
    loading: () =><span>Carregando...</span>
  }
)
// import { AddProductToWishlist } from "./AddProductToWishlist"

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
    priceFormatted: string
  }
  addToWishlist: (id: number) => void
}

function ProductItemComponent ({ product, addToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist &&
        <AddProductToWishlist
          addToWishlist={() => addToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      }
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})