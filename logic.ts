function day1(str:string, num1:number, num2:number): string {
    let case1 : string
    case1 = str.slice(num2, num1)
    console.log(case1)
    return case1
}

day1('Learning Typescript is different than Javascript', 19, 9)