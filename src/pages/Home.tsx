import React, { useState } from "react"
import imgQRcode from "../public/image-qr-code.png"

function Home() {
 

  return (
    <div className="flex flex-col items-center h-screen bg-brand-white place-content-center">
      <div className="container h-screen md:h-auto flex flex-row items-center justify-center md:p-[8%] bg-brand-blue">
      <div className="flex flex-col items-center justify-center max-w-xs p-4 bg-brand-white rounded-2xl ">

        <img src={imgQRcode} alt="QR Code" className="w-full h-auto overflow-hidden rounded-xl" />
        <h4 className="font-bold text-[22px] mt-4 text-center leading-tight tracking-normal text-brand-darkblue">Improve your front-end skills by building projects</h4>
        <p className="text-center font-[15px] p-4 leading-tight text-brand-lightgray">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
    </div>
  )
}

export default React.memo(Home)
