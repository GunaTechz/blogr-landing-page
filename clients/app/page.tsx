import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DesignFuture from './components/DesignFuture'
import ArtInfrastructure from './components/ArtInfrastructure'
import FreeOpenSource from './components/FreeOpenSource'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <DesignFuture />
      <ArtInfrastructure  />
      <FreeOpenSource />
      <Footer />
    </div>
  )
}
