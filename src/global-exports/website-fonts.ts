import { Inter, Oswald, Poppins, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })
const outfit = Outfit({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]})

const WebstieFonts = {
    Inter: inter,
    Oswald: oswald,
    Outfit: outfit,
    Poppins: poppins
}

export default WebstieFonts;