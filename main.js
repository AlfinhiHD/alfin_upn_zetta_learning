const book = (
    {name:"Seni untuk bersikap bodo amat", price:"90000", author:"Mark Manson"}
);

function bookpurchase (name, indc, intax) {
    let result = 0;

    const price = book.price
    const dc = price * (indc/100);
    const dcprice = price - dc;
    const tax = dcprice * (intax/100);
    const total = dcprice + tax;

    console.group();
    console.log('Original Price', price);
    console.log('Discount Amount', dc);
    console.log('Price after Discount', dcprice);
    console.log('Tax Amount', tax);
    console.log('Price after Tax', total);
    console.groupEnd();
}

bookpurchase(book, 25, 10);
    