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
            console.log("------------------------------")
            console.log("Kredit setiap bulannya : ", )
            console.groupEnd();
            
    } else {
        console.log("Stock buku ini tidak mencukupi");
    }

    return result;
}

function creditPayment(priceBook, duration, interest) {
    let totalcredit = 0;
    
    perMonth = priceBook / duration
    const creditPrice = perMonth + (perMonth * (interest/100))
    
    for (let cur=0; cur<duration; cur++){
        console.log(" Cicilan per bulan : " + (cur+1) + " " + creditPrice);
        totalcredit += creditPrice;
    }
    console.log("------------------------------")
    console.log(" Harga total : " + totalcredit);
    console.log("------------------------------")
    
    return totalcredit;
}

creditPayment(bookpurchase(book, 25, 10, 8), 5, 10);
    