function day21(union : (string | number) []) {
    let gabung : string
    gabung = union.join(" ")
    console.log(gabung)
    return gabung
}

day21([1, 'data', '3', 'result'])
day21(['Bejo', 'has', '4', 'sport', 'car'])

// Kapan kita menggunakan array, tuple, dan object?
// JAWAB

// array kita gunakan jika kita ingin menambahkan multiple values pada satu variabel

// tuple merupakan tipe array dengan mendefinisikan panjang 
// dan tipe pada setiap indexnya, tuple memungkinkan setiap elemen di array
// diketahui tipe datanya

//object digunakan ketika data yang ingin kita inputkan memiliki nama pada setiap datanya

type Programmer = (string | number)[]

function day22(pg: Programmer) {
    return console.log(pg)
}

day22(["Halfin", 9])
