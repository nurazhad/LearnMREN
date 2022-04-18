import CarsList from "./components/carsList";
import CarsCreate from "./components/carsCreate";
import CarsEdit from "./components/carsEdit";
// import multer from "multer"
import{
  BrowserRouter, Routes, Route
} from "react-router-dom"


// const storage = multer.diskStorage({
//   destination:(req, file, callback)=>{
//     callback(null, "./ui/public/uploads")
//   },
//   filename:(req, file, callback) => {
//     callback(null, file.originalname)
//   }
// })

// const upload = multer ({storage:storage})

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes >
          <Route path="/" element={<CarsList />}/>
          <Route path="/create" element={<CarsCreate />}/>
          <Route path="/edit/:id" element={<CarsEdit />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
