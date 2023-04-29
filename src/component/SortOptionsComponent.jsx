import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>SORT BY</option>
      <option value="price_1">Price: Low To High</option>
      <option value="price_-1">Price: High To Low</option>
      <option value="price_-1">Customer Rating</option>
      <option value="price_-1">Name A-Z</option>
      <option value="price_-1">Name Z-A</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
