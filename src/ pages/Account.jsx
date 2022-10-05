import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img
          className=" w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/462d8ff3-51d2-455f-92bc-1ef044c21528/LK-en-20220926-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
      </div>
      <div className='bg-black/80 fixed top-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold text-white'>My Shows</h1>
        </div>
      </div>
      <SavedShows/>
      </>
  )
}

export default Account