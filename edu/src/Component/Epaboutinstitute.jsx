import './App.css';
import { Button } from 'react-bootstrap';
import Epinputbox from './Component/Epinputbox';
function Epaboutinstitute() {
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
                                <div className="p-3">Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.
                                </div>
                            </div>
                            <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1" style={{ hight: '50rem', width: '50rem' }}>
                                <h5 className="d-flex flex-row mb-3">Banner text</h5>
                                <div className="p-3"> Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.Editable text table.
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
                <h5>Manage Navigation</h5>

                <div className="container px-4 text-center">

                    <div className="row gx-5">
                        <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                            <div className="p-3">
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                            </div>
                        </div>
                        <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                            <div className="p-3">
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>Manage Navigation</h5>

                <div className="container px-4 text-center">

                    <div className="row gx-5">
                        <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                            <div className="p-3">
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                            </div>
                        </div>
                        <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                            <div className="p-3">
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>
                                <h5 className="d-flex flex-row mb-3">Number</h5>
                                <Epinputbox></Epinputbox>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Epaboutinstitute;
