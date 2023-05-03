import Head from "./Header";
import p from "./assets/p.png";
import Form from "./Form";
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
            <button className="bg-red-600 rounded-2xl text-white pl-5 pr-5 pt-2 pb-2 " >Join</button>
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
      <Form />
      <div class="accordion accordion-flush mt-10" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde architecto iure dolore similique dicta quia ducimus est quam, quasi doloremque accusamus exercitationem, in iste aspernatur minus dolor officia consectetur quae.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed officiis facere consectetur ex. Corporis sint voluptates soluta temporibus. Maiores nesciunt nemo id laudantium voluptates et odit voluptate suscipit ipsam hic.</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam culpa unde, totam impedit a laboriosam blanditiis nobis ipsam quod, corrupti quidem. Ea nihil reprehenderit, enim praesentium eveniet nobis possimus.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;