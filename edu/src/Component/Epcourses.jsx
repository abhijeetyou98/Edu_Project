import './App.css';
import { Button } from 'react-bootstrap';
import Epsearchbar from './Component/Epsearchbar';
import Epdummytable from './Component/Epdummytable';
function Epresults() {
    return (

        <div>
            <div>
                <Button className='m-2' variant="outline-success"> Banner</Button>
                <Button className='m-2'>  Categories</Button>
                <Button className='m-2'> Courses</Button>
                <Button className='m-2'> Results</Button>
                <Button className='m-2'> Testimonial</Button>
                <Button className='m-2'> FAQ</Button>
            </div>
            <div>
                <h5 className="d-flex flex-row mb-3 p-2">Banner text</h5>
                <div>
                    <div className="container px-4 text-center">

                        <div className="row gx-5">
                            <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1" style={{ hight: '50rem', width: '50rem' }}>
                                <h5 className="d-flex flex-row mb-3">Heading</h5>
                                <div className="p-3">                  <Epsearchbar> </Epsearchbar>

                                </div>
                            </div>
                            <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1" style={{ hight: '50rem', width: '50rem' }}>
                                <h5 className="d-flex flex-row mb-3">Banner text</h5>
                                <div className="p-3">
                                    <Button>+Add Courses</Button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h5 className="d-flex justify-content-center mb-3 p-2"> Your data table here.</h5>
            <Epdummytable></Epdummytable>

        </div>

    );
}

export default Epresults;
