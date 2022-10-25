const book = (
    {name:"Seni untuk bersikap bodo amat", price:"100000", author:"Mark Manson", stock:"10"}
);

function bookpurchase (book, indc, intax, many) {
    let result = 0;

    let stock = book.stock;
    
    if(many <= stock) {
        for(let i=0; i<many; i++) {
       
            if( book && (stock > 0)) {
    
                stock--;
    
                const price = book.price;
                const dc = price * (indc/100);
                const dcprice = price - dc;
                const tax = dcprice * (intax/100);
                const total = dcprice + tax;
                
                result += total;
            }
        }
            console.group();
            console.log("");
            console.log("Jumlah buku yang dibeli : ",  many)
            console.log("Harga total : ", result )
            console.groupEnd();
    } else {
        console.log("Stock buku ini tidak mencukupi");
    }

    return result;
}

bookpurchase(book, 25, 10, 8);
    