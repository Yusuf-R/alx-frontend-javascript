/* eslint-disable array-callback-return */
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(data) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = data;
  }

  get currency() {
    return this._currency;
  }

  set currency(obj) {
    if (!(obj instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    this._currency = obj;
  }

  displayFullPrice() {
    const ret = `${this._amount} ${this._currency.name} (${this._currency.code})`;
    return ret;
  }

  static converPrice(amount, conversionRate) {
    if (typeof amount === 'number') {
      return ('amount must be a number');
    }
    if (typeof conversionRate === 'number') {
      return ('conversionRate must be a number');
    }
    const ret = amount * conversionRate;
    return ret;
  }
}

export default Pricing;
