import React from "react";
import './test.css';

const Epsearchbar = () => {
    return (
        <section>
        <div> 
        <div> <div className="input-group">
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon"  >
<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" >
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                </span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon" />
        </div>           
        </div>
        <div>       
            </div>
            </div>
        </section>

    );
}

export default Epsearchbar;