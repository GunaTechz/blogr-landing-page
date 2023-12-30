import React from 'react'
import { FcompanyData, FconnectData, FproductsData } from '../../utils/Footer'
import Link from 'next/link'

export default function Footer() {
  return (
        <div className="bg-body-gradient-start rounded-tr-[200px]">
          <div className="pt-10 max-w-6xl mx-auto">
            <div className='grid grid-cols-4 pb-10'>
              <div>
                <h1 className='text-3xl font-bold text-white'>Blogr</h1>
              </div>
              <div>
                <h1 className='text-xl font-bold text-white pb-10'>Product</h1>
                {
                  FproductsData.map((item, index) => {
                    return (
                      <Link href={item.link} key={index}>
                        <h1 className='text-md font-bold text-white text-start py-1 hover:underline'>{item.name}</h1>
                      </Link>
                    )
                  })
                }
                
              </div>
              <div>
                <h1 className='text-xl font-bold text-white pb-10'>Company</h1>
                {
                  FcompanyData.map((item, index) => {
                    return (
                      <Link href={item.link} key={index}>
                        <h1 className='text-md font-bold text-white text-start py-1 hover:underline'>{item.name}</h1>
                      </Link>
                    )
                  })
                }
              </div>
              <div>
                <h1 className='text-xl font-bold text-white pb-10'>connect</h1>
                    {
                        FconnectData.map((item, index) => {
                            return (
                                <Link href={item.link} key={index}>
                                    <h1 className='text-md font-bold text-white text-start py-1 hover:underline'>{item.name}</h1>
                                </Link>
                            )
                        })
                    }
              </div>
            </div>
          </div>
        </div>    
  )
}
