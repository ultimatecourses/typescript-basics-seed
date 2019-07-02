const coupon: string = 'pizza25';

function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

console.log('Final coupon is ' + normalizeCoupon(coupon));