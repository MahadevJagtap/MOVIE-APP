import React from 'react'

function Sidenav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold flex flex-row">
        <img src="/logo.svg" alt="SCSDB" className="w-5 mr-2" />
        <span className="text-2xl">SCSDB</span>
      </h1>
    </div>
  )
}

export default Sidenav