import { Form, Button, ListGroup } from 'react-bootstrap'; // Import Bootstrap components
import './App.css'; // Import your custom CSS file

function App() {
  return (
    <>
      <Form style={{maxWidth: '1000px'}}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Github User name</Form.Label>
          <Form.Control type="text" placeholder="User name" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => { alert('Submitted') }}>
          Submit
        </Button>
      </Form>
      <br />
      <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis. Perferendis rem doloribus a enim suscipit eius similique labore, ducimus dolorem, velit molestiae necessitatibus culpa autem libero minima voluptate optio! </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default App;
