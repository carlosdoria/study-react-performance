import { memo } from "react"

interface ProductItemProps {
  product: {
    id: number
    price: number
    title: string
  }
  addToWishlist: (id: number) => void
}

function ProductItemComponent ({ product, addToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button onClick={() => addToWishlist(product.id)}> Add to wishlist</button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})