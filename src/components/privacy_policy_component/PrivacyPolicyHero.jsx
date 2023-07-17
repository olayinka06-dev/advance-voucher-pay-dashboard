import React from 'react'

const PrivacyPolicyHero = () => {
  return (
    <div className="capitalize rounded-3xl flex flex-col my-9 justify-center bg-white items-center py-20 px-5">
      <div className="w-full text-center flex flex-col gap-4 lg:w-[50%] md:w-[75%]">
        <div>
        <button className='py-3 capitalize px-5 rounded-2xl border-none bg-[#0CF] text-white'>
          Privacy Policy
        </button>
        </div>
        <h1 className='font-[600] text-[40px]'>Privacy / Policy</h1>
        <p className='text-[18px] text-[rgba(0,0,0,0.50)]'>read about voucherpay terms of services</p>
      </div>
    </div>
  )
}

export default PrivacyPolicyHero