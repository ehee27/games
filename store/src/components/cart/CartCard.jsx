import { useState } from 'react'

const CartCard = ({ cart, game }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="flex rounded-lg border-2 p-3 mx-2">
      <div className="flex justify-center w-[30%]">
        {' '}
        <img
          className="h-[80px] w-[120px] md:h-[100px] md:w-[150px] rounded-md shadow-md shadow-gray-500"
          src={`/src/assets/products/${game.image}.png`}
        ></img>
      </div>
      {/* -------------------------------------------- */}

      <div className=" flex w-[70%] px-2">
        <div className="flex flex-col gap-2 w-[50%] text-left">
          <p className="text-2xl md:text-3xl font-Teko">{game.title}</p>
          <p className="text-xl text-gray-600">${game.price}</p>
          <p className="text-md text-gray-400">SKU: {game.sku}</p>
          <div>
            {!checked ? (
              <p className="text-sm">
                {/* {game.about.substring(0, 200)}...{' '} */}
                <button
                  className="btn btn-xs btn-primary"
                  onClick={() => setChecked(!checked)}
                >
                  DETAILS
                </button>
              </p>
            ) : (
              <p className="text-sm">
                {game.about}{' '}
                <button
                  className="btn btn-xs btn-primary"
                  onClick={() => setChecked(!checked)}
                >
                  HIDE
                </button>
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[50%] py-1 border-l-2 shadow-inner">
          <p>Qty:</p>
          <p className="text-3xl text-secondary font-extrabold">
            {game.quantity}
          </p>

          <div className="flex gap-4 justify-center items-center">
            <button
              className="border-2 p-2 rounded-lg w-[50px] hover:bg-green-300 transition-all"
              onClick={() => cart.addOneToCart(game)}
            >
              +
            </button>
            <button
              className="border-2 p-2 rounded-lg w-[50px] hover:bg-red-500 transition-all"
              onClick={() => cart.removeOneFromCart(game)}
            >
              -
            </button>
          </div>
        </div>
        <div className="text-left py-2">
          {/* {!checked ? (
            <p className="text-sm">
              {game.about.substring(0, 200)}...{' '}
              <button
                className="btn btn-xs btn-primary"
                onClick={() => setChecked(!checked)}
              >
                MORE
              </button>
            </p>
          ) : (
            <p className="text-sm">
              {game.about}{' '}
              <button
                className="btn btn-xs btn-primary"
                onClick={() => setChecked(!checked)}
              >
                LESS
              </button>
            </p>
          )} */}
        </div>
      </div>
    </div>
  )
}

export default CartCard
