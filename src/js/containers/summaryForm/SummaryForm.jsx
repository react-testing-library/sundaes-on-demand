import { useState } from 'react';
//bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const SummaryForm = () => {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const acceptTermsHandler = ({ target: { checked } }) => {
    setAcceptTerms(checked);
  };

  const popoverHoverFocus = (
    <Popover id="popover">
      <Popover.Body>No ice cream will actually be delivered.</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to{' '}
      <OverlayTrigger placement="right" overlay={popoverHoverFocus}>
        <span style={{ color: 'blue' }}> Terms and Conditions</span>
      </OverlayTrigger>
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
