renderStops(train) {
  if (train) {
    return (

      <div key= { train.id } className="stopsInfo" >
      <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      ><button> stops </button>
       </AccordionSummary>
       <AccordionDetails>
      <ul onClick={ this.renderTrain }>
     { train.stops.map((stop) => <li> { stop } </li> )}
      </ul>
      </AccordionDetails>
      </Accordion>


      </div>
    )
  }
}
