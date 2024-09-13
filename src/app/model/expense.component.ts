import { ExpenseCategory } from "../app-enums.config";

export interface Expense{
    name: string
    category: ExpenseCategory
    amount: number
    date: Date
}

export interface IExpense{
    id?: number | null
    name: string
    amount: number 
    category?: ExpenseCategory
    date?: Date
}

export class Expense{
    id: number 
    name: string
    amount: number 
    category: ExpenseCategory
    date: Date

    constructor(params: IExpense){
        this.name = params.name
        this.amount = params.amount
        this.category = params.category? params.category : ExpenseCategory.WithoutCategory
        this.date = params.date? params.date : new Date()
        this.id = params.id? params.id : -1
    }
}

export const tempExpenses = [
    new Expense({name:'ElectricityBill', amount: 150, category: ExpenseCategory.Utilietes, id:1}),
    new Expense({name:'Dress',  amount: 50,  category:ExpenseCategory.Clothing, id:2}),
    new Expense({name:'Movie Ticket', amount: 30,  category:ExpenseCategory.Leisure, id:3}),
    new Expense({name:'Weekly Grocery', amount: 200,  category:ExpenseCategory.Groceries, id:4}),
    new Expense({name:'Game subscription',  amount: 20,  category:ExpenseCategory.Electronics, id:5}),
    new Expense({name:'Other expense', amount: 50,  category:ExpenseCategory.Others, id:6}),
    new Expense({name:'Some expense',  amount: 50 , id:7})
]
