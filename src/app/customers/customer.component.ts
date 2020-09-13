import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    customerForm: FormGroup;
    customer = new Customer();

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(50)]],
            email: ['', Validators.required, Validators.email],
            sendCatalog: true
        });
    }

    populatePartial(): void {
        this.customerForm.reset();
        this.customerForm.patchValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            sendCatalog: false
        });
    }

    populateAll(): void {
        this.customerForm.setValue({
            firstName: 'Jack',
            lastName: 'Harkness',
            email: 'jack@torchwood.com',
            sendCatalog: false
        });
    }

    save(): void {
        console.log(this.customerForm);
        console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    }
}
