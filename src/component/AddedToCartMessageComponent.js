import { Alert } from "react-bootstrap";
import { useState } from "react";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again. Duis mollis, est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
