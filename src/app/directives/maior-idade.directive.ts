import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true
  }]
})
export class MaiorIdadeDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const anoNascimento = new Date(control.value).getFullYear();
    const anoAtual = new Date().getFullYear();

    return ((anoAtual - anoNascimento) >= 18) ? null : { 'maiorIdadeValidator': true } 
  }
}
