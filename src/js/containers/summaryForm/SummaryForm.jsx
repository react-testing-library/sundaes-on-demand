import { useState } from 'react';
//bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SummaryForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const acceptTermsHandler = ({ target: { checked } }) => {
    setAcceptTerms(checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: 'blue' }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={acceptTerms}
          onChange={acceptTermsHandler}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!acceptTerms}>
        Confirm order
      </Button>
    </Form>
  );
};

export default SummaryForm;
