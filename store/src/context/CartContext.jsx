import { createContext, useState, useEffect } from 'react'
// import { productsArray, getProductData } from './gamesData'
import { getProductData } from '../gamesData'
import { toast } from 'react-toastify'

const getInitialState = () => {
  const cart = localStorage.getItem('cart')
  return cart ? JSON.parse(cart) : []
}

// CONTEXT
export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
})

// PROVIDER
export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(getInitialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
  }, [cartProducts])

  const getProductQuantity = id => {
    const quantity = cartProducts.find(product => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0
    }
    return quantity
  }
  // ADD GAME TO CART ------------------
  const addOneToCart = game => {
    const quantity = getProductQuantity(game.id)

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: game.id,
          quantity: 1,
          title: game.title,
          price: game.price,
          image: game.image,
          sku: game.sku,
          about: game.about,
        },
      ])
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === game.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    }
    toast.success(`${game.title} added to cart!`)
  }
  // REMOVE GAME FROM CART ------------------
  const removeOneFromCart = game => {
    const quantity = getProductQuantity(game.id)

    if (quantity === 1) {
      deleteFromCart(game.id)
    } else {
      setCartProducts(
        cartProducts.map(product =>
          product.id === game.id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }

  // DELETE COMPLETELY FROM CART ------------------
  const deleteFromCart = id => {
    setCartProducts(cartProducts =>
      cartProducts.filter(currentProduct => {
        return currentProduct.id != id
      })
    )
  }
  // GET CART TOTAL ------------------
  const getTotalCost = () => {
    let totalCost = 0
    cartProducts.map(cartItem => {
      const productData = getProductData(cartItem.id)
      totalCost += productData.price * cartItem.quantity
    })
    return totalCost
  }

  // const cartTotal = cartProducts.items.reduce((acc, curr) => {
  //   return acc + (curr.price * curr.quantity)
  // },0)

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  )
}

export default CartProvider

// const addOneToCart = id => {
//   const quantity = getProductQuantity(id)

//   if (quantity === 0) {
//     setCartProducts([
//       ...cartProducts,
//       {
//         id: id,
//         quantity: 1,
//       },
//     ])
//   } else {
//     setCartProducts(
//       cartProducts.map(product =>
//         product.id === id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       )
//     )
//   }
// }
