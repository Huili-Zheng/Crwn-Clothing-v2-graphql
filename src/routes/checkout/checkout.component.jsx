import {
  CheckoutItemContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "../../components/checkout-item/checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../context/card.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <CheckoutItemContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Descrption</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>{`Total:${total}`}</Total>
    </CheckoutItemContainer>
  );
};

export default Checkout;
