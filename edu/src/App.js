import './App.css';
import { Button } from 'react-bootstrap';
import Epdummytable from './Component/Epdummytable';
import Epsearchbar from './Component/Epsearchbar';
import Epdropdownmenu from './Epdropdownmenu';
function App() {
  return (

    <div>
      <div>
        
        <Button className='m-2' variant="success" style={{ border: '2px solid Green', borderRadius: '5px', boxShadow: '5px 5px 5px 0px #676767' }}><b>Banner</b></Button>
        <Button className='m-2' variant="success" style={{ border: '2px solid Green', borderRadius: '5px', boxShadow: '5px 5px 5px 0px #676767' }}><b>Categories</b></Button>
        <Button className='m-2' variant="success" style={{ border: '2px solid Green', borderRadius: '5px', boxShadow: '5px 5px 5px 0px #676767' }}><b>Courses</b></Button>
        <Button className='m-2' variant="success" style={{ border: '2px solid Green', borderRadius: '5px', boxShadow: '5px 5px 5px 0px #676767' }}><b>Testimonial</b></Button>
        <Button className='m-2' variant="success" style={{ border: '2px solid Green', borderRadius: '5px', boxShadow: '5px 5px 5px 0px #676767' }}><b>FAQ</b></Button>
        
      </div>
      <div>
        <h5 className="d-flex flex-row mb-3 p-2">Banner text</h5>
        <div>
          <div className="container px-4 text-center">

            <div className="row gx-5">
              <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1" style={{ hight: '50rem', width: '50rem' }}>
                <h5 className="d-flex flex-row mb-3">Heading</h5>
                <div className="p-3">Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.
                </div>
              </div>
              <div className="col shadow-none p-3 mb-5 rounded row gx-5 m-1" style={{ hight: '50rem', width: '50rem' }}>
                <h5 className="d-flex flex-row mb-3">  </h5>
                <div className="p-3"> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>

      </div>
      <div>
        <div>
        </div>
      </div>
      <div>
      </div>
      <h5 className="container px-4 text-center p-3"><b>Results</b></h5>
      <div>
       
       <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div><Epsearchbar></Epsearchbar></div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><h5 style={{margin:'4px' }}>Show all :</h5><Epdropdownmenu></Epdropdownmenu></div>
        <div><Button variant="success"><b>+ Add Testimony</b></Button>{' '}
</div>
      </div>
    </div> 
          

    </div>    
      
          <Epdummytable></Epdummytable>


      
    </div>

  );
}

export default App;
