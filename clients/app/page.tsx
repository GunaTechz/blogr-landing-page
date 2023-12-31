import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'
import Footer from './components/Footer'
import DesignFuture from './components/DesignFuture'
import ArtInfrastructure from './components/ArtInfrastructure'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <DesignFuture />
      <ArtInfrastructure  />
      <Footer />
    </div>
  )
}
