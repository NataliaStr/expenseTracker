import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense, tempExpenses } from 'src/app/model/expense.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {
    this.getAllExpenses();
  }

  expenses : Expense[] = []
  removedIds: number[] = []
  total: number = 0
  count: number = 0;

  getAllExpenses(){
    this.expenses = tempExpenses;
    this.expenses.forEach(e => {
      this.total += e.amount
      this.count +=1
    });
  }

  addExpence(){
    this.router.navigate(['expenses', -1])
  }

  editExpense(id: number){
    this.router.navigate(['expenses', id])
  }

  deleteExpense(id: number){
    this.removedIds.push(id)
    let newExpenses: Expense[] = this.expenses.filter(e => e.id !== id)
    console.log(newExpenses)
    this.expenses = newExpenses
  }

}


