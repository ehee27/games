import { IoLogoGameControllerA } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-primary text-black inset-x-24 bottom-0 pb-4">
      <span>
        <IoLogoGameControllerA className="text-5xl" />
      </span>

      <p>Copyright © 2024 - All right reserved by Soopergames Ltd</p>
    </footer>
  )
}

export default Footer
