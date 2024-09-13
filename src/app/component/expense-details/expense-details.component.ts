import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense.component';

@Component({
  selector: 'app-expense-details',
  templateUrl: './expense-details.component.html',
  styleUrls: ['./expense-details.component.scss']
})
export class ExpenseDetailsComponent implements OnInit {
  id: number = -1
  expense: Expense = new Expense({name:'', amount:0})

  constructor(private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
      let id = this.route.snapshot.params['id']
      if(this.id != -1){

      }
  }


  saveExpense(){}

}



