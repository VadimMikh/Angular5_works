import {Component, OnInit, Output, AfterViewInit, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';
import { Range } from '../interfaces';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit, AfterViewInit {
    constructor(private fb: FormBuilder, private mainService: MainService) { }

    addForm: FormGroup;

    formErrors = {
        name: '',
        price: '',
        category: ''
    };

    categoryRange: Range = this.mainService.getCategoryRange();

    validationMessages = {
        name: {
            required: 'Обязательное поле',
            minlength: 'Минимум 4 сивола'
        },
        price: {
            required: 'Обязательное поле'
        },
        category: {
            required: 'Обязательное поле',
            min: `От ${this.categoryRange.min} до ${this.categoryRange.max}`,
            max: `От ${this.categoryRange.min} до ${this.categoryRange.max}`
        }
    };

    @Output()
    addItemHandle = new EventEmitter<object>();

    ngOnInit() {
        this.initForm();
    }

    ngAfterViewInit() {
        this.addForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.addForm) {
            return;
        } else {
            const form = this.addForm;

            for (const field in this.formErrors) {
                this.formErrors[field] = '';

                const control = form.get(field);

                if (control && control.dirty && !control.valid) {
                    const message = this.validationMessages[field];
                    for (const key in control.errors) {
                        this.formErrors[field] += message[key] + ' ';
                    }
                }
            }
        }
    }

    initForm() {
        this.addForm = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            price: ['', Validators.required],
            category: ['', [Validators.required, Validators.min(this.categoryRange.min), Validators.max(this.categoryRange.max)]]
        });
    }

    addItem(form) {
        const newItem = {
            id: 0,
            name: form.value.name,
            price: form.value.price,
            category: form.value.category
        };
        form.reset();
        this.addItemHandle.emit(newItem);
    }
}
