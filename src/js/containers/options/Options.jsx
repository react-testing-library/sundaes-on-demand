import { useEffect, useState } from 'react';
//axios
import axios from 'axios';
//bootstrap
import Row from 'react-bootstrap/Row';
//components
import ScoopOption from '@/js/components/scoopOption/ScoopOption';

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        //optionType is 'scoops' or 'toppings'
        const res = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  return (
    <Row>
      {items.map((el, i) => (
        <ItemComponent key={i} {...el} />
      ))}
    </Row>
  );
};

export default Options;
