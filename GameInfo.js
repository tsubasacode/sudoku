    <div>
      <br/> 

      <article className="panel is-white">
  <p className="panel-heading">
   Game Info  
  </p>
  <p className="panel-tabs">
    <a className="is-active"> </a>
    <a> </a>
 
  </p>
  <div className="panel-block">
    <p className="control has-icons-left">
      { /*<input className="input is-primary" type="text" placeholder="Search"/> */}
      <span className="icon is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div>
  <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    <span className={"tag is-" + cName }> {gameLevel} </span>
  </a>

  <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
  Empty Cells :  { countEmptyCells }
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    Complexity  :   { complexityLevel }
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fas fa-book" aria-hidden="true"></i>
    </span>
    complexityLog :  { complexityLog }
  </a>
</article>

 



        <br/>
        <br/>
        <br/>

  


    </div>
