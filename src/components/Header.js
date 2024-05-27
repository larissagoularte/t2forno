import React from "react";

const Header = () => {
  return (
    <header class="text-white bg-red-600 body-font">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row justify-center items-center">
        <div className="flex justify-center items-center md:mb-0">
          <div className="ml-3 text-2xl font-light">MJManagement</div>
        </div>
      </div>
    </header>
  )
}

export default Header