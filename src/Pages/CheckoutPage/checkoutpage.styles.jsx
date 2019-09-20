import styled from 'styled-components';
// import StripeCheckoutButton from '../../Components/stripe-checkout-button/stripe-checkout-button.component';

export const CheckoutConatiner = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    font-size: 20px;
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const Total = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const Warning = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    color: red;
`;

