export class Person{

  constructor(
    private name: string, 
    private age: number = 18, 
    private isSingle: boolean = false){
  }

  getName(): string{
    return this.name;
  }

  getAge(): number{
    return this.age;
  }

  getIsSingle(): boolean{
    return this.isSingle;
  }

  setSingle(isSingle: boolean): void{
    this.isSingle = isSingle;
  }

}