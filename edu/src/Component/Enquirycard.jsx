import Card from 'react-bootstrap/Card';


function Enquirycard() {
    return (
        <div className="d-flex justify-content-around p-2">
            <Card style={{ hight: '20rem', width: '30rem' }}>

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example
                        Some quick example
                        Some quick example
                        Some quick example
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card style={{ hight: '20rem', width: '30rem' }}>

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example
                        Some quick example
                        Some quick example
                        Some quick example
                    </Card.Text>

                </Card.Body>

            </Card>
            <Card style={{ hight: '10rem', width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example
                        Some quick example
                        Some quick example
                        Some quick example
                    </Card.Text>

                </Card.Body>

            </Card>
        </div>
    );
}

export default Enquirycard;