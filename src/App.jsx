import { useState } from 'react'
import { FaBars, FaCashRegister, FaClipboardCheck, FaClockRotateLeft, FaGear } from 'react-icons/fa6'
import ItemCard from './components/ItemCard';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  const handleAddItem = (item) => {
    setIsModalOpen(true);
    setItemSelected(item);
  }

  const items = [
    {
      "name": "Iced Café Malt Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Malt%20Latte%20Iced.jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Hot Café Malt Latte",
      "image": "https://static.fore.coffee/product/cafe%20malt%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "name": "Iced Cappuccino",
      "image": "https://static.fore.coffee/product/Capucino%20Iced%20(1).jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Hot Cappuccino",
      "image": "https://static.fore.coffee/product/cafe%20malt%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "name": "Double Iced Shaken Latte",
      "image": "https://static.fore.coffee/product/Double%20Iced%20Shaken%20Latte%20(1).jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Iced Classic Latte",
      "image": "https://static.fore.coffee/product/classiclatteiced173.jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Iced Café Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Iced.jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Hot Café Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "name": "Iced Salted Caramel Mocha",
      "image": "https://static.fore.coffee/product/saltedcarameliced173.jpg",
      "variations": [
        { "name": "Regular", "price": 33000 },
        { "name": "Large", "price": 39000 }
      ]
    },
    {
      "name": "Hot Salted Caramel Mocha",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "name": "Hot Espresso",
      "image": "https://static.fore.coffee/product/espresso173.jpg",
      "price": 33000
    },
    {
      "name": "Nutty Oat Latte",
      "image": "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg"
    }
  ];


  return (
    <div className="flex flex-1 min-h-screen">
      {isSidebarOpen && 
        <Sidebar />
      }
      <div className="flex w-full">
        {isModalOpen &&
          <Modal data={itemSelected} handleClose={() => setIsModalOpen(prev => !prev)} />
        }
        <div className="flex flex-col md:basis-2/3 gap-3 max-h-screen bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
          <div className="flex justify-between items-center gap-5 mb-5">
            <button className="flex justify-center items-center h-full aspect-square hover:bg-slate-200 rounded-md" onClick={() => setIsSidebarOpen(prev => !prev)}>
              <FaBars className="text-xl" />
            </button>
            <input className="bg-slate-200 rounded-md text-sm p-2" placeholder="Search" />
          </div>
          <div className="hidden md:flex items-center gap-2 w-full">
            <div className="bg-white border border-green-600 rounded-full text-green-600 px-5 py-1 cursor-pointer">All</div>
            <div className="bg-white border hover:border-green-600 rounded-full hover:text-green-600 px-5 py-1 cursor-pointer">Favorites</div>
            <div className="bg-white border hover:border-green-600 rounded-full hover:text-green-600 px-5 py-1 cursor-pointer">Americano Series</div>
            <div className="bg-white border hover:border-green-600 rounded-full hover:text-green-600 px-5 py-1 cursor-pointer">Coffee</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item, index) => (
              <ItemCard data={item} key={index} handleClick={() => handleAddItem(item)} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col basis-full md:basis-1/3 justify-between gap-5 bg-white border-l p-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row border-b pb-3">
              <div className="flex flex-col basis-4/6">
                <div className="text-sm font-semibold">Cappucino Butterscotch</div>
                <div className="text-xs text-gray-500">Iced Medium (2)</div>
              </div>
              <div className="basis-2/6 text-end text-sm font-semibold">68.000</div>
            </div>
            <div className="flex flex-row border-b pb-3">
              <div className="flex flex-col basis-4/6">
                <div className="text-sm font-semibold">Cappucino Hazelnut</div>
                <div className="text-xs text-gray-500">Iced Large</div>
              </div>
              <div className="basis-2/6 text-end text-sm font-semibold">39.000</div>
            </div>
            <div className="flex flex-row border-b pb-3">
              <div className="flex flex-col basis-4/6">
                <div className="text-sm font-semibold">Cappucino Hazelnut</div>
                <div className="text-xs text-gray-500">Iced Medium</div>
              </div>
              <div className="basis-2/6 text-end text-sm font-semibold">34.000</div>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t pt-3">
            <div className="flex flex-row border-b pb-3">
              <div className="flex flex-col basis-4/6">
                <div className="text-sm font-semibold">Total</div>
              </div>
              <div className="basis-2/6 text-end text-sm font-semibold">Rp 141.000</div>
            </div>
            <button className="w-full bg-green-600 rounded-md text-white font-bold p-3">Charge</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
