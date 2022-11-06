export class Food{
  static getAllFoods(): Food[] {
    throw new Error('Method not implemented.');
  }
  id!:number;
  name!:string;
  price!:number;
  tags?:string[];
  favorite!:boolean;
  stars!:number;
  imageUrl!:string;
  origins!:string[];
  cookTime!:string;
}

