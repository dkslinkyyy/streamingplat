import '@styles/globals.css';

import Nav from '@components/Nav'
import Footer from '@components/Footer'
import { PopupCard } from '@components/PopupCard';

export const metada = {
    title: "streamplat",
    description: 'Discover movies & series'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
            <body>

            <main className='w-screen relative z-0 h-screen text-white bg-black'>
                <PopupCard/>
                
                    <Nav />
                    {children}
                    <Footer/>
            </main>
          </body>  
        </html>
    );
}

export default RootLayout;