import axios from "axios"
import { useEffect, useState } from "react"
import Filters from "../component/Filters"
import Header1 from "../component/Header1"
import Hotel from "../component/Hotel"


function Hotels({ hotels }) {
    const [list, setList] = useState([])
    const [price, setPrice] = useState(500)
    const [checkList, setCheckList] = useState([])

    const handleCheckList = async () => {
        const { data } = await axios.get(`api/facilities/search?val=${checkList}`)
        if (data?.hotels) {
            setList(data?.hotels)
        }
    }

    const handlePrice = async () => {

        const { data } = await axios.get(`api/facilities/range?price=${price}`)
        if (data?.hotels) {
            setList(data?.hotels)
        }
    }

    useEffect(() => {
        handleCheckList()
    }, [
        checkList
    ])
    return (
        <>
            <Header1 />
            <div className="grid grid-cols-12">
                <div className="col-span-3">
                    <Filters price={price} setPrice={setPrice} handlePrice={handlePrice} checkList={checkList} setCheckList={setCheckList} />
                </div>
                <div className="col-span-9">


                    {
                        list.length > 0 ? list.map((e) => {
                            return (<div className="m-5 ">
                                <Hotel e={e} />
                            </div>)
                        }) : hotels ? hotels.map((e) => {
                            return (
                                <div className="m-5 ">
                                    <Hotel e={e} />
                                </div>
                            )
                        }) : ""
                    }
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`)
    const data = await res.json()
    return {
        props: {
            hotels: data.hotelList
        }
    }
}

export default Hotels