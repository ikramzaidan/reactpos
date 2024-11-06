import { FaCashRegister, FaClipboardCheck, FaClockRotateLeft, FaGear } from 'react-icons/fa6'

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-center fixed lg:relative w-64 h-screen bg-green-600">
            <ul className="flex flex-col gap-3 px-3">
                <li className="flex items-center gap-3 bg-[#2dac5c] hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaCashRegister />POS</li>
                <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaClockRotateLeft />Activity</li>
                <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaClipboardCheck />Inventory</li>
                <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaGear />Settings</li>
            </ul>
        </div>
    )
}

export default Sidebar;