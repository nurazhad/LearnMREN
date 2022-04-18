import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const CarsList = () => {
  const [cars, setCar] = useState([])
  useEffect(()=>{
    getCars()
  },[])

  const getCars = async() => {
    const response = await axios.get('http://localhost:5000/cars')
    setCar(response.data)
  }

  const deleteCar = async(id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`)
      getCars()
    } catch (error) {
      console.log(error)
    }
  }
    return (
      <div className="columns">
        <div className="column is-half">
          <Link to ="create" className='button is-success mt-5'>Add New</Link>
          <table className="table is-striped is-fullwidth mt-5">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car, index) => (
                <tr key={car._id}>
                  <td>{index + 1}</td>
                  <td>{car.name}</td>
                  <td>{car.size}</td>
                  <td>Rp.{car.price}</td>
                  <td>{car.image}</td>
                  <td>
                    <Link to={
                      `edit/${car._id}`
                    } className='button is-info is-small'>Edit</Link>
                    <button onClick={() => deleteCar(car._id)} className='button is-danger is-small'>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default CarsList