function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1 , b: 2, c: 3, d: 4 }

console.log(getProperty(x, 'a'))
// console.log(getProperty(x, 'x'))

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal2 {
    numLegs: number;
}

class Bee extends Animal2 {
    keeper: BeeKeeper;
}

class Lion extends Animal2 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal2>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!

let items = [1, 2, 3]
items.forEach((val, idx, arr) => console.log(val))
