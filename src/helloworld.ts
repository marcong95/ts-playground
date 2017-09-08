namespace HelloWorld {
  enum Gender {
    Male, Female, Other
  }

  let genderIconMap = new Map([
    [Gender.Male, '♂'],
    [Gender.Female, '♀'],
    [Gender.Other, ''],
  ])

  let genderToIcon = (g: Gender) => genderIconMap.get(g)

  interface Greetable {
    greet: () => string
  }

  class Animal {
    name: string
    gender: Gender

    constructor(name: string, gender: Gender) {
      this.name = name
      this.gender = gender
    }

    description() {
      return `${this.name}${genderToIcon(this.gender)}`
    }
  }

  class Human extends Animal {
    greet() {
      return `Hello, world. This is ${this.description()}.`
    }
  }

  class Dog extends Animal {
    greet() {
      return 'Wow!'
    }
  }

  let marco = new Human('Marco', Gender.Male)
  let fattie = new Dog('Fattie', Gender.Male)

  ;[marco, fattie].forEach((g: Greetable) => {
    console.log(g.greet())
  })
}
