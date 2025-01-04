// currying function


const add = (a) => (b) => a + b;

// console.log(add(5)(3));

const totalPrice = (disCount) => (amount) => amount - amount * disCount;
    const WithDiscount = totalPrice(.3);

    console.log(WithDiscount(100));
