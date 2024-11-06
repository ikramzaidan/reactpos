const ItemCard = ({data, handleClick}) => {

    return(
        <div className="w-full bg-white rounded shadow p-2 cursor-pointer" onClick={handleClick}>
            <img src={data.image} className="aspect-square object-cover rounded mb-2" />
            <div className="line-clamp-1">{data.name}</div>
        </div>
    )
}

export default ItemCard;