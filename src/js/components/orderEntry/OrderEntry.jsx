import Options from '@/js/containers/options/Options';

const OrderEntry = () => {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
};

export default OrderEntry;
