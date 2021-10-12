export interface AddProductToWishlistProps {
  addToWishlist: () => void
  onRequestClose: () => void
}

export function AddProductToWishlist ({ addToWishlist, onRequestClose }: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={addToWishlist}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  )
}