import { renderPaymentSummary } from '../../../script/checkout/paymentSummary.js';
import { cart } from '../../../script/cart.js';
import { getProduct } from "../../../script/product.js";
import { getDeliveryOption } from '../../../script/deliveryOption.js';

describe('renderPaymentSummary', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="js-payment-summary"></div>';
    
    cart.length = 0; // Clear the cart array
    cart.push(
      { productId: 'PROD-547281', quantity: 2, deliveryOptionId: '1' },
      { productId: 'PROD-839472', quantity: 1, deliveryOptionId: '2' }
    );

    jest.spyOn(global.console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the payment summary correctly', () => {
    renderPaymentSummary();

    const paymentSummary = document.querySelector('.js-payment-summary').innerHTML;
    expect(paymentSummary).toContain('Order Summary');
    expect(paymentSummary).toContain('Items:');
    expect(paymentSummary).toContain('Shipping & handling:');
    expect(paymentSummary).toContain('Total before tax:');
    expect(paymentSummary).toContain('Estimated tax (10%):');
    expect(paymentSummary).toContain('Order total:');
    expect(paymentSummary).toContain('Place your order');
  });

  it('logs an error when a product is not found', () => {
    jest.spyOn(global.console, 'error');
    cart.push({ productId: 'INVALID_ID', quantity: 1, deliveryOptionId: '1' });

    renderPaymentSummary();

    expect(console.error).toHaveBeenCalledWith('Product not found for ID: INVALID_ID');
  });
});

