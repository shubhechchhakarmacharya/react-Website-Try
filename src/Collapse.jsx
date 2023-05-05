function Collapse(){
    return(
        <div className="accordion accordion-flush mt-10" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde architecto iure dolore similique dicta quia ducimus est quam, quasi doloremque accusamus exercitationem, in iste aspernatur minus dolor officia consectetur quae.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed officiis facere consectetur ex. Corporis sint voluptates soluta temporibus. Maiores nesciunt nemo id laudantium voluptates et odit voluptate suscipit ipsam hic.</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam culpa unde, totam impedit a laboriosam blanditiis nobis ipsam quod, corrupti quidem. Ea nihil reprehenderit, enim praesentium eveniet nobis possimus.</div>
          </div>
        </div>
      </div>
    )
}

export default Collapse;