interface Sellable {
  name?: string
  readonly price: number
}

class Goods implements Sellable{
  name: string
  value: number
  price: number

  constructor(options: any) {
    Object.assign(this, options)
  }
}

function describeGoods(item: Sellable) {
  let subject = item.name ? 'The ' + item.name : 'It'
  return `${subject} costs ${item.price}.`
}

// Optional Properties:
console.log(describeGoods({ price: 10 }))
console.log(describeGoods({ name: 'GTX1080', price: 4599 }))

// Readonly Properties:
let rx580: Sellable = { name: 'RX580', price: 2399 }
// Sellable.price is readonly, cuz the price is determined by the market
// (there should be a hilariouslie <-_<-)
// rx580.price = 450

// Excess Property Checks:
// The statement commented below raises an error due to excess property check
// on object literals, but there is a bunch of ways to avoid it like all the
// uncommented statements below

// console.log(describeGoods({ name: 'GTX1080', value: 1080, price: 4599 }))
let gtx1080 = { name: 'GTX1080', value: 1080, price: 4599 }
console.log(describeGoods(gtx1080), '(object in a variable)')
console.log(describeGoods(new Goods({
  name: 'GTX1080', value: 1080, price: 4599
})), '(object wrapped by a class)')
console.log(describeGoods({
  name: 'GTX1080', value: 1080, price: 4599
} as Sellable), '(object using type assertion)')

// Function Types
interface GoodsConsumer {
  (goods: Goods): string
}

let consumer: GoodsConsumer = (g: Goods) =>
  `Marco wants a ${g.name} with of ${g.value} CNY.`
console.log(consumer(gtx1080))

// Indexable Types
interface StringArray {
  [index: number]: string
}

// 0 cannot be one of the elements in a StringArray which can be retrieved by
// a numeric index, i.e., an array element
// let arr: StringArray = [0, 'Bob', 'Fred']
let arr: StringArray = ['Bob', 'Fred']
let a: string = arr[0]
console.log(a.substr(0, 1))
