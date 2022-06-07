import Alert from 'react-bootstrap/Alert';

const AlertBanner = ({ message, variant }) => (
  <Alert variant={variant || 'danger'} style={{ backgroundColor: 'red' }}>
    {message || 'An unexpected error occurred. Please try again later.'}
  </Alert>
);

export default AlertBanner;
