import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"

const CarsEdit = () => {
    const [name, setName] = useState("")
    const [size, setSize] = useState("Small")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const navigate = useNavigate() 
    const {id} = useParams()

    
    useEffect(() =>{
        getCarById()
    }, [])

    const getCarById = async() => {
        const response = await axios.get(`http://localhost:5000/cars/${id}`)
        setName(response.data.name)
        setSize(response.data.size)
        setPrice(response.data.price)
        setImage(response.data.image)
    }

    const editCars = async(e) => {
        e.preventDefault()
        try {
            await axios.put(`http://localhost:5000/cars/${id}`,{
                name,
                size,
                price,
                image
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
    <div className='columns'>
        <div className='column is-half'>
            <form onSubmit={editCars}>
                <div className='field'>
                <div className="label">Name</div>
                <div className="control">
                    <input type="text" className="input" value={name} onChange={(e) => 
                    setName(e.target.value)} placeholder='Name'/>
                </div>
            </div>
            <div className='field'>
                <div className="label">Size</div>
                <div className="control">
                <div className="select is-fullwidth">
                    <select value={size} onChange={(e) => 
                    setSize(e.target.value)}>
                        <option value="Small">Small</option>
                        <option value="Big">Big</option>
                    </select>
                </div>
                </div>
            </div>
            <div className='field'>
                <div className="label">Price</div>
                <div className="control">
                    <input type="text" className="input" value={price} onChange={(e) => 
                    setPrice(e.target.value)} placeholder='Price'/>
                </div>
            </div>
            <div className='field'>
                <div className="label">Image</div>
                <div className="control">
                    <input type="text" className="input" value={image} onChange={(e) => 
                    setImage(e.target.value)} placeholder='Image'/>
                </div>
            </div>
            <div className='field'>
                <div className="control">
                    <button type="submit" className="button is-success">Edit</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    )
}

export default CarsEdit