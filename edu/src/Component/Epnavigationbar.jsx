import { Button } from 'react-bootstrap';
import './App.css';
import EpsearchBar from './Epsearchbar';

function Epnavigationbar() {
    return (

        <div>
            <h5>Manage Navigation</h5>

            <div className="container px-4 text-center">

                <div className="row gx-5">
                    <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                        <EpsearchBar></EpsearchBar>
                        <div className="p-3">
                        </div>
                    </div>
                    <div className="col shadow-none p-3 mb-5 bg-light rounded row gx-5 m-1">
                        <Button style={{ width: '200px' }}> +Add New</Button>
                        <div className="p-3">
                        </div>
                    </div>
                </div>
                <h5>Navigation</h5>
            </div>
        </div>


    );
}

export default Epnavigationbar;
