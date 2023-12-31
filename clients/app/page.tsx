import Image from 'next/image'
import Navbar from './components/Navbar'
import Link from 'next/link'
import Footer from './components/Footer'
import DesignforFuture from './components/DesignforFuture'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <DesignforFuture />
      <Footer />
    </div>
  )
}
