import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'mt-input-conteiner',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {


  @Input() labelMessage: string;
  @Input() errorMessage: string;
  @Input() successMessage: string;
  input: any;

  @ContentChild(NgModel) model: NgModel;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.model;
    if(this.input === undefined) {
      throw new Error('This component needs to be used with an ngModel directive');
    }
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }

}
