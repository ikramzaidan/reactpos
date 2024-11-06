const Modal = ({data, handleClose}) => {
    return(
        <>
            <div className="fixed w-full h-screen bg-gray-200 opacity-50"></div>
            <div className="fixed w-full h-screen px-3 py-10">
                <div className="flex flex-col relative max-w-[850px] w-full h-full bg-white border rounded-md shadow-md inset-x-0 mx-auto">
                    <div className="flex justify-between items-center bg-slate-50 border-b rounded-t rounded-b-none rounded-md p-3">
                        <button className="border border-green-600 rounded text-center text-sm text-green-600 font-semibold px-3 py-2" onClick={handleClose}>Cancel</button>
                        <div className="">{data.name}</div>
                        <div className="bg-green-600 rounded text-center text-sm text-white font-semibold px-3 py-2">Save</div>
                    </div>
                    <div className="flex flex-col gap-3 px-10 py-5">
                        {data.variations && 
                            <div className="flex flex-col gap-1 pb-3 border-b">
                                <div className="text-sm">Variations</div>
                                <div className="grid grid-cols-3 gap-5">
                                    {data.variations.map((variation, index) => (
                                        <div  key={index} className="flex justify-center hover:bg-green-600 border border-green-600 rounded text-green-600 hover:text-white font-semibold py-2 cursor-pointer">{variation.name}</div>
                                    ))}
                                </div>
                            </div>
                        }
                        <div className="flex flex-col gap-1 pb-3 border-b">
                            <div className="text-sm">Quantity</div>
                            <input type="number" className="border border-green-600 rounded p-2" placeholder="Qty"></input>
                        </div>
                        <div className="flex flex-col gap-1 pb-3 border-b">
                            <div className="text-sm">Notes</div>
                            <textarea className="border border-green-600 rounded p-2"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;