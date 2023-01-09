import React from 'react'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Products = () => {
  return (
    <div className="w-4/5 m-auto space-y-10 mt-4">
      <div className="flex justify-between items-center p-2">
        <ul className="flex items-center space-x-8">
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
        <div className="flex items-center space-x-5">
          <button><BsArrowLeft size={"1.5rem"} /></button>
          <button className="bg-rose-300 rounded-full p-2 text-white drop-shadow-xl"><BsArrowRight size={"1.5rem"} /></button>
        </div>
      </div>
      <div className="products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 -content-center">
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$100</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$200</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$300</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$400</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$500</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$600</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$700</h1>
        </div>
        <div className="product h-[350px] space-y-2">
          <img className="w-full h-4/5 object-cover" src="https://via.placeholder.com/150" alt="" />
          <p className="font-semibold text-gray-600">Lorem ipsum dolores</p>
          <h1 className="text-xl font-semibold">$800</h1>
        </div>
      </div>
    </div>
  )
}

export default Products