import React from 'react'

const Settings = () => {
  const tabOptionData = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  return (
    <>
      <div className="">
        <div className="py-12 px-5 mb-4 rounded-2xl">
          <h3 className='text-[18px] font-semibold'>Wallet Information</h3>
          <div className="grid lg:grid-cols-7 md:grid-cols-5 gap-x-2 grid-cols-3">
            {
              tabOptionData.map((tod, i) => (
                <button className={`text-[13px] rounded-2xl px-1 py-2 ${currentTab === i ? "border border-[#0CF] bg-[#0CF] text-white" : "border border-[rgba(0,0,0,0.5)]"} text-[rgba(0,0,0,0.5)]`} key={i} onClick={() => handleClickOption(i)}>{tod}</button>
              ))
            }
          </div>
          <div className="">
            {
              tabContentData[currentTab].content
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings