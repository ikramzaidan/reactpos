import { useEffect, useState } from 'react'
import { FaBars, FaCashRegister, FaClipboardCheck, FaClockRotateLeft, FaGear } from 'react-icons/fa6'
import ItemCard from './components/ItemCard';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  const [orders, setOrders] = useState([]);
  const [orderSelected, setOrderSelected] = useState();

  const handleAddItem = (item) => {
    setIsModalOpen(true);
    setIsSidebarOpen(false);
    setItemSelected(item);
  }

  const items = [
    {
      "id": 1,
      "name": "Alopurinol tablet @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 1, "item_id": 1, "name": "100 mg", "price": 16000 },
        { "id": 2, "item_id": 1, "name": "300 mg", "price": 33000 }
      ]
    },
    {
      "id": 2,
      "name": "Amitriptilin tablet salut 25 mg (HCI) @10pcs",
      "image": "./no-image.jpg",
      "price": 16000
    },
    {
      "id": 3,
      "name": "Paracetamol tablet @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 3, "item_id": 3, "name": "500 mg", "price": 5000 },
        { "id": 4, "item_id": 3, "name": "1000 mg", "price": 8000 }
      ]
    },
    {
      "id": 4,
      "name": "Ibuprofen tablet @10pcs",
      "image": "./no-image.jpg",
      "price": 12000
    },
    {
      "id": 5,
      "name": "Amoxicillin kapsul @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 5, "item_id": 5, "name": "250 mg", "price": 15000 },
        { "id": 6, "item_id": 5, "name": "500 mg", "price": 27000 }
      ]
    },
    {
      "id": 6,
      "name": "Cetirizine tablet 10 mg @10pcs",
      "image": "./no-image.jpg",
      "price": 8000
    },
    {
      "id": 7,
      "name": "Metformin tablet @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 7, "item_id": 7, "name": "500 mg", "price": 10000 },
        { "id": 8, "item_id": 7, "name": "850 mg", "price": 14000 }
      ]
    },
    {
      "id": 8,
      "name": "Omeprazole kapsul @10pcs",
      "image": "./no-image.jpg",
      "price": 13000
    },
    {
      "id": 9,
      "name": "Loperamide tablet @10pcs",
      "image": "./no-image.jpg",
      "price": 9000
    },
    {
      "id": 10,
      "name": "Ciprofloxacin tablet @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 9, "item_id": 10, "name": "250 mg", "price": 18000 },
        { "id": 10, "item_id": 10, "name": "500 mg", "price": 34000 }
      ]
    },
    {
      "id": 11,
      "name": "Amlodipine tablet @10pcs",
      "image": "./no-image.jpg",
      "price": 15000
    },
    {
      "id": 12,
      "name": "Hydrochlorothiazide tablet 25 mg @10pcs",
      "image": "./no-image.jpg",
      "price": 10000
    },
    {
      "id": 13,
      "name": "Clopidogrel tablet @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 11, "item_id": 13, "name": "75 mg", "price": 25000 },
        { "id": 12, "item_id": 13, "name": "150 mg", "price": 47000 }
      ]
    },
    {
      "id": 14,
      "name": "Dexamethasone tablet @10pcs",
      "image": "./no-image.jpg",
      "price": 7000
    },
    {
      "id": 15,
      "name": "Gabapentin kapsul @10pcs",
      "image": "./no-image.jpg",
      "variations": [
        { "id": 13, "item_id": 15, "name": "100 mg", "price": 22000 },
        { "id": 14, "item_id": 15, "name": "300 mg", "price": 42000 }
      ]
    }
  ];


  return (
    <div className="flex flex-1 min-h-screen">
      {isSidebarOpen && 
        <Sidebar />
      }
      <div className="flex w-full">
        {isModalOpen &&
          <Modal data={itemSelected} handleClose={() => setIsModalOpen(prev => !prev)} setOrders={setOrders} />
        }
        <div className="flex flex-col md:basis-2/3 gap-3 h-full md:max-h-screen bg-slate-100 p-5 overflow-y-auto overflow-x-hidden">
          <div className="flex justify-between items-center gap-5 mb-5">
            <button className="flex justify-center items-center h-full aspect-square hover:bg-slate-200 rounded-md" onClick={() => setIsSidebarOpen(prev => !prev)}>
              <FaBars className="text-xl" />
            </button>
            <input name="search" className="bg-slate-200 rounded-md text-sm p-2" placeholder="Search" />
          </div>
          <div className="hidden md:flex items-center gap-2 w-full">
            <div className="bg-white border border-green-600 rounded-full text-green-600 px-5 py-1 cursor-pointer">All</div>
            <div className="bg-white border hover:border-green-600 rounded-full hover:text-green-600 px-5 py-1 cursor-pointer">Favorites</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((item, index) => (
              <ItemCard data={item} key={index} handleClick={() => handleAddItem(item)} />
            ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col basis-full md:basis-1/3 justify-between gap-5 bg-white border-l p-5">
          {orders.length === 0 ? (
            <div className="flex justify-center items-center h-full text-sm text-gray-600">Belum ada pesanan</div>
          ) : (
            <div className="flex flex-col gap-3">
              {orders.map((order, index) => {
                const item = items.find((item) => item.id === order.item_id);
                const variation = item?.variations?.find((variation) => variation.id === order.item_variation_id)

                return(
                  <div className="flex flex-row border-b pb-3" key={index}>
                    <div className="flex flex-col basis-4/6">
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-500">
                        {variation ? `${variation.name} (${order.item_quantity})` : `(${order.item_quantity})`}  
                      </div>
                    </div>
                    <div className="basis-2/6 text-end text-sm font-semibold">
                      {(variation ? variation.price * order.item_quantity : item?.price * order.item_quantity).toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          <div className="flex flex-col gap-3 border-t pt-3">
            <div className="flex flex-row border-b pb-3">
              <div className="flex flex-col basis-4/6">
                <div className="text-sm font-semibold">Total</div>
              </div>
              <div className="basis-2/6 text-end text-sm font-semibold">
                Rp{" "}
                {orders.reduce((total, order) => {
                  const item = items.find((item) => item.id === order.item_id);
                  const variation = item?.variations?.find((variation) => variation.id === order.item_variation_id);
                  const itemPrice = variation ? variation.price : item?.price;
                  return total + itemPrice * order.item_quantity;
                }, 0).toLocaleString()}
              </div>
            </div>
            <button className="w-full bg-green-600 rounded-md text-white font-bold p-3">Charge</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
