import { useEffect, useState } from 'react'
import { FaAngleUp, FaBars, FaCashRegister, FaChevronLeft, FaChevronUp, FaClipboardCheck, FaClockRotateLeft, FaGear, FaListUl } from 'react-icons/fa6'
import ItemCard from './components/ItemCard';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderBarOpen, setIsOrderBarOpen] = useState(false);
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
      "name": "Iced Café Malt Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Malt%20Latte%20Iced.jpg",
      "variations": [
        { "id": 1, "item_id": 1, "name": "Regular", "price": 33000 },
        { "id": 2, "item_id": 1, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 2,
      "name": "Hot Café Malt Latte",
      "image": "https://static.fore.coffee/product/cafe%20malt%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "id": 3,
      "name": "Iced Cappuccino",
      "image": "https://static.fore.coffee/product/Capucino%20Iced%20(1).jpg",
      "variations": [
        { "id": 3, "item_id": 3, "name": "Regular", "price": 33000 },
        { "id": 4, "item_id": 3, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 4,
      "name": "Hot Cappuccino",
      "image": "https://static.fore.coffee/product/cafe%20malt%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "id": 5,
      "name": "Double Iced Shaken Latte",
      "image": "https://static.fore.coffee/product/Double%20Iced%20Shaken%20Latte%20(1).jpg",
      "variations": [
        { "id": 5, "item_id": 5, "name": "Regular", "price": 33000 },
        { "id": 6, "item_id": 5, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 6,
      "name": "Iced Classic Latte",
      "image": "https://static.fore.coffee/product/classiclatteiced173.jpg",
      "variations": [
        { "id": 7, "item_id": 6, "name": "Regular", "price": 33000 },
        { "id": 8, "item_id": 6, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 7,
      "name": "Iced Café Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Iced.jpg",
      "variations": [
        { "id": 9, "item_id": 7, "name": "Regular", "price": 33000 },
        { "id": 10, "item_id": 7, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 8,
      "name": "Hot Café Latte",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "id": 9,
      "name": "Iced Salted Caramel Mocha",
      "image": "https://static.fore.coffee/product/saltedcarameliced173.jpg",
      "variations": [
        { "id": 11, "item_id": 9, "name": "Regular", "price": 33000 },
        { "id": 12, "item_id": 9, "name": "Large", "price": 39000 }
      ]
    },
    {
      "id": 10,
      "name": "Hot Salted Caramel Mocha",
      "image": "https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg",
      "price": 33000
    },
    {
      "id": 11,
      "name": "Hot Espresso",
      "image": "https://static.fore.coffee/product/espresso173.jpg",
      "price": 33000
    },
    {
      "id": 12,
      "name": "Nutty Oat Latte",
      "image": "https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg"
    }
  ];



  return (
    <div className="flex flex-1 min-h-screen">
      {isSidebarOpen &&
        <Sidebar setVisible={setIsSidebarOpen} />
      }
      <div className="flex w-full">
        {itemSelected &&
          <Modal data={itemSelected} setOrders={setOrders} setVisible={setIsModalOpen} visible={isModalOpen} />
        }
        <div className={`${isOrderBarOpen ? 'hidden md:flex' : 'flex'} flex-col md:basis-2/3 gap-3 h-full md:max-h-screen bg-slate-100 p-5 overflow-y-auto overflow-x-hidden`}>
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

        <div className={`${isOrderBarOpen || isSidebarOpen ? 'hidden' : ''} fixed flex md:hidden w-full bg-white border-t z-10 bottom-0 p-5`} onClick={() => setIsOrderBarOpen(true)}>
          <div className="flex justify-between items-center w-full bg-green-600 rounded p-3">
            <div className="text-white font-semibold">{orders.length} Item</div>
            <div className="text-white font-semibold">
              Rp{" "}
                {orders.reduce((total, order) => {
                  const item = items.find((item) => item.id === order.item_id);
                  const variation = item?.variations?.find((variation) => variation.id === order.item_variation_id);
                  const itemPrice = variation ? variation.price : item?.price;
                  return total + itemPrice * order.item_quantity;
                }, 0).toLocaleString()}
            </div>
          </div>
        </div>

        <div className={`${isOrderBarOpen ? 'flex' : 'hidden md:flex'} flex-col md:basis-1/3 w-full max-h-screen gap-5 bg-white border-l`}>
          {/* Customer */}
          <div className="flex items-center gap-3 bg-slate-100 border-b shadow p-5 md:px-5 md:py-3">
            <div className="flex items-center gap-3 w-full">
              <div className="" onClick={() => setIsOrderBarOpen(false)}><FaChevronLeft /></div>
              Customer Name
            </div>
            <div className="border border-green-600 rounded text-green-600 p-2"><FaListUl /></div>
          </div>

          {/* List Order */}
          {orders.length === 0 ? (
            <div className="flex justify-center items-center h-full text-sm text-gray-600 p-5">Belum ada pesanan</div>
          ) : (
            <div className="flex flex-col h-full overflow-y-auto gap-3 px-5">
              {orders.map((order, index) => {
                const item = items.find((item) => item.id === order.item_id);
                const variation = item?.variations?.find((variation) => variation.id === order.item_variation_id)

                return (
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

          {/* Total */}
          <div className="flex flex-col gap-3 bg-slate-100 border-t p-5 md:px-5 md:py-3">
            <div className="flex flex-row border-b">
              <div className="flex flex-col basis-4/6 mb-3">
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
