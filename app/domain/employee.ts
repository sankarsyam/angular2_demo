import { State } from './state';
export class Employee{
    constructor(
    public id:number,
    public name: string,
    public email:string,
    public mobile:number,
    public state:State,
    public country:string,
    public username?: string,
    public password?: string
  ) {  }
}