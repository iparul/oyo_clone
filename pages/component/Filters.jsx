"use client"

import axios from "axios"
import { useEffect, useState } from "react"

const Filters = ({ price, setPrice, handlePrice, heckList, setCheckList }) => {
    const [list, setList] = useState([])
    const fetchFailities = async () => {
        try {
            const { data } = await axios.get(`api/facilities`)
            if (data?.failities) {
                setList(data?.failities)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleCheckList = (e) => {
        let newList = []
        if (e.target.value) {
            newList.push(e.target.value)
            setCheckList(newList)
            return;
        }
        newList = newList.filter(i => i !== e.target.value)
        setCheckList(newList)
    }

    useEffect(() => {
        fetchFailities()
    }, [])
    return (
        <>
            <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
                <label htmlFor="price" className="text-xl mr-3 font-bold">Price:</label>
                <input type="range" name="price" id="price" min={500} max={3000} onChange={(e) => setPrice(e.target.value)} defaultValue={price ? price : ""} />
                <span className="ml-10">&#8377;{price ? price : 0}</span>
                <div>
                    <button className="w-40 h-10 bg-green-300 cursor-pointer my-3" onClick={handlePrice}>Search</button>
                </div>
                <div className="my-10">
                    <h3 className="text-xl font-bold my-3">Filter by Facilities:</h3>

                    {list?.map((e) => {
                        return (
                            <p className="grid grid-cols-4 items-center my-3" key={e}>
                                <label htmlFor="checkbox" className="col-span-2">{e}</label>
                                <input type="checkbox" name="checkbox" id="checkbox" className="w-5 h-5 ml-3 col-span-2" value={e} onChange={handleCheckList} />
                            </p>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Filters