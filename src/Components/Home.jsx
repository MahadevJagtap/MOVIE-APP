import React from 'react'
import Sidenav from './partials/Sidenav'
import Topnav from './partials/Topnav';



function Home() {
  return (
  <>
     <Sidenav/>
      <div className="w-[80%] h-full bg-[#1F1E24]">
      <Topnav />
      </div>

    </>
  );
};

export default Home