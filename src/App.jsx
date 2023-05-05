import Head from "./Header";
import p from "./assets/p.png";
import Form from "./Form";
import Collapse from "./Collapse";
function Alert(){
  alert("Clicked")
}
function App() {
  return (
    <div className="app">
      <Head />
      <div className="container">
        <div className="row">
          <img className="rounded-2xl mt-10 col-6" src={p} />
          <div className="bot col-6 self-center">
            <h2 className="container text-center text-red-600 font-bold text-3xl mt-24 ">
              Grow your day with us.
            </h2>
            <p className="text-white self-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla totam eligendi veritatis ad id pariatur quidem earum ab, molestias provident magni impedit eum enim eaque similique dicta nam laboriosam?</p>
            <button className="bg-red-600 rounded-2xl text-white pl-5 pr-5 pt-2 pb-2" onClick={Alert} >Join</button>
          </div>
        </div>

      </div>
      <div className="video bg-red-50 mt-10">
        <iframe src="https://www.youtube.com/embed/a5xUbuYHdi8" className="container p-2 "></iframe>
      </div>
      <div className="test mt-16">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div>
                <img src="https://wallpapers.com/images/hd/3d-horror-pennywise-from-it-54sbc52pvhqmf3yv.jpg" />
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio eveniet animi.</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src="https://wallpapers.com/images/hd/3d-horror-pennywise-from-it-54sbc52pvhqmf3yv.jpg" />
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio eveniet animi.</p>
              </div>
            </div>
            <div className="col-4">
              <div>
                <img src="https://wallpapers.com/images/hd/3d-horror-pennywise-from-it-54sbc52pvhqmf3yv.jpg" />
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis optio eveniet animi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="glass focus-sm bg-slate-100 rounded-2xl mt-10">
        <p className="text-red-600 p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam debitis totam facilis sit quisquam odit. Laborum voluptatem, dolorum nisi maxime totam consequuntur dignissimos quod possimus officiis harum, excepturi laboriosam corporis!</p>
      </div>
      <Form state = "Fill your state"/>
      <Collapse/>
    </div>
  )
}

export default App;