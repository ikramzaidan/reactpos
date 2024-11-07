import { useEffect, useState } from "react";

const Modal = ({data, handleClose, setOrders}) => {
    const [newOrder, setNewOrder] = useState({});

    useEffect(() => {
        setNewOrder((prevOrder) => ({
            ...prevOrder,
            id: Date.now(),
            item_id: data.id,
        }));
    }, [data]);

    const handleSaveItem = () => {
        setOrders((prevOrders) => [...prevOrders, newOrder]);
        handleClose();
    }

    const handleChangeItem = () => (event) => {
        const { name, value } = event.target;

        setNewOrder((prevNewOrder) => ({
            ...prevNewOrder,
            [name]: value,
        }));
    }

    return(
        <>
            <div className="fixed w-full h-screen bg-gray-200 opacity-50"></div>
            <div className="fixed w-full h-screen px-3 py-10">
                <div className="flex flex-col relative max-w-[850px] w-full h-full bg-white border rounded-md shadow-md inset-x-0 mx-auto">
                    <div className="flex justify-between items-center bg-slate-50 border-b rounded-t rounded-b-none rounded-md p-3">
                        <button className="border border-green-600 rounded text-center text-sm text-green-600 font-semibold px-3 py-2" onClick={handleClose}>Cancel</button>
                        <div className="">{data.name}</div>
                        <button className="bg-green-600 rounded text-center text-sm text-white font-semibold px-3 py-2" onClick={() => handleSaveItem()}>Save</button>
                    </div>
                    <div className="flex flex-col gap-3 px-10 py-5">
                        {data.variations && 
                            <div className="flex flex-col gap-1 pb-3 border-b">
                                <div className="text-sm">Variations</div>
                                <div className="grid grid-cols-3 gap-5">
                                    {data.variations.map((variation) => (
                                        <div  key={variation.id} className={`flex justify-center border border-green-600 rounded font-semibold py-2 cursor-pointer
                                             hover:bg-green-600  hover:text-white ${newOrder.item_variation_id === variation.id ? 'bg-green-600 text-white' : 'text-green-600'}`}
                                             onClick={() => setNewOrder({...newOrder, item_variation_id: variation.id})}>
                                            {variation.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        <div className="flex flex-col gap-1 pb-3 border-b">
                            <div className="text-sm">Quantity</div>
                            <input name="item_quantity" type="number" className="border border-green-600 rounded px-3 py-2" onChange={handleChangeItem()} placeholder="Quatity" />
                        </div>
                        <div className="flex flex-col gap-1 pb-3 border-b">
                            <div className="text-sm">Notes</div>
                            <textarea name="item_notes" className="border border-green-600 rounded px-3 py-2 resize-none" onChange={handleChangeItem()} placeholder="Add Notes"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;