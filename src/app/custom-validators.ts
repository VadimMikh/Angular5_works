import { AbstractControl } from '@angular/forms';

export function priceValid(control: AbstractControl) {
    if (control.value < 1) {
        return { priceValid: true };
    }
    return null;
}
