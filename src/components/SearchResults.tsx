import { List, AutoSizer, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    priceFormatted: string
    title: string
  }>
  totalPrice: number
  addToWishlist: (id: number) => void
}

export default function SearchResults ({ results, totalPrice, addToWishlist }: SearchResultsProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return(
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          addToWishlist={addToWishlist}
        />
      </div>
    )
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={8}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />

      {/* {results.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
        />
      ))} */}
    </div>
  )
}
