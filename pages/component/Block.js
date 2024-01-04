import Image from "next/image"


function Block({ title, pera, img }) {
    return (
        <div className='border-r border-gray-300 w-60 h-full flex items-center px-3'>
            <Image src={img} height={200} width={200} className="w-10 h-10 mr-5" />
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="text-gray-400 text-xs line-clamp-1">{pera}

                </p>
            </div>
        </div>
    )
}

export default Block