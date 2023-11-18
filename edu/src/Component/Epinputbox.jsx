import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Epinputbox() {
    return (
        <>
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                    Button
                </Button>
                <Form.Control
                    aria-label="Example text with button addon"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    );
}

export default Epinputbox;