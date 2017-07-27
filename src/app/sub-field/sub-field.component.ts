import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-sub-field',
  templateUrl: './sub-field.component.html',
  styleUrls: ['./sub-field.component.css']
})
export class SubFieldComponent implements OnInit {

  @Input() subVote: number;
  @Input() parentF: NgForm;

  constructor() {
    
  }



  ngOnInit(): void {
    this.parentF.ngSubmit.subscribe((x) => { this.internalSub(x) });
    
  }


  public internalSub(x){
    console.log("-----From internal-----");
    console.log(this.parentF.form.controls['name'].value);
    console.log("-----------------------");

  }
  

}
