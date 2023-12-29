import { Link } from 'react-router-dom'

const DetailsModal = ({ openModal, onClose, game }) => {
  return (
    <div
      className={`fixed inset-60 transition-colors ? ${
        openModal
          ? 'visible bg-black/90 text-white rounded-lg shadow-lg shadow-black py-5 px-3'
          : 'invisible'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        {/* <div className="border-red-300">
          <img
            className="h-[80%] w-[90%] rounded-md shadow-md shadow-gray-500"
            src={`assets/${game.image}.png`}
          ></img>
        </div> */}
        <div className="border-red-300">
          <p>{game.about}</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="btn btn-sm bg-transparent text-white border-none fixed top-12 right-12"
      >
        X
      </button>
      <div className="p-3"></div>
    </div>
  )
}

export default DetailsModal
