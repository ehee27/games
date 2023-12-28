import { Link } from 'react-router-dom'
import hero from '../assets/hero-background.jpg'
import snes from '../assets/SNES.png'
import capcom from '../assets/capcom.png'
import konami from '../assets/konami.png'
import acclaim from '../assets/acclaim.webp'
import EA from '../assets/EA.png'

const logos = [
  { name: konami, alt: 'konami-logo' },
  { name: EA, alt: 'ea-logo' },
  { name: capcom, alt: 'capcom-logo' },
  { name: acclaim, alt: 'acclaim-logo' },
]

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen grid w-[100%] bg-center bg-cover"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70">
          <div className="flex flex-col min-h-[100%] pt-40">
            <div className="flex flex-col justify-center items-center">
              <p className="text-5xl text-white font-Teko">Welcome</p>
              <p className="text-xl text-white max-w-[70%] text-center mt-5">
                Children of the 90's, you've come to the right place. We have
                all the most popular games that made the SNES one of the most
                beloved consoles of the golden era of gaming.
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center my-10">
              <img
                className="h-[200px] w-[200px]"
                src={snes}
                alt="snes-logo"
              ></img>
            </div>
            {/* --------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center px-20 pb-20">
              {logos.map((logo, i) => {
                return (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center"
                  >
                    <img
                      className="h-[60%] w-[60%] md:h-[90%] md:w-[90%]"
                      src={logo.name}
                      alt={logo.alt}
                    ></img>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
