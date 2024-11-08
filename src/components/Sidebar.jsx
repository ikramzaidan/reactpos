import { FaTimes } from 'react-icons/fa';
import { FaCashRegister, FaClipboardCheck, FaClockRotateLeft, FaGear } from 'react-icons/fa6'

const Sidebar = ({setVisible}) => {
    return (
        <>
            <div className={`lg:hidden fixed w-full h-screen bg-gray-200 opacity-50 z-20`}></div>
            <div className="flex flex-col fixed lg:relative w-64 h-screen bg-green-600 p-3 z-30">
                <div className="flex md:hidden justify-end text-white" onClick={() => setVisible(false)}>
                    <FaTimes />
                </div>
                <ul className="flex flex-col justify-center h-full gap-3">
                    <li className="flex items-center gap-3 bg-[#2dac5c] hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaCashRegister />POS</li>
                    <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaClockRotateLeft />Activity</li>
                    <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaClipboardCheck />Inventory</li>
                    <li className="flex items-center gap-3 hover:bg-[#2dac5c] rounded-md text-white font-bold p-3"><FaGear />Settings</li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;