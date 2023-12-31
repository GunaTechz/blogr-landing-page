import { artInfrastructureData } from '@/utils/Footer';

export default function FreeOpenSource() {
  return (
    <div className='pb-24'>
      <div className='mt-10'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='w-full md:w-1/2 overflow-hidden'>
            <div className='relative' style={{ left: '-36%' }}>
              <img
                src="/images/illustration-laptop-desktop.svg"
                alt=""
                className='h-auto'
                style={{ maxWidth: 'none' }}
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 max-w-xl mx-auto md:pl-0 pr-8 items-start'>
            {artInfrastructureData.map((item, index) => (
              <div className='py-5' key={index}>
                <h1 className='text-2xl font-bold text-start font-overpass text-very-dark-blue'>{item.title}</h1>
                <p className='text-lg font-overpass text-justify text-grayish-blue pt-5'>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
