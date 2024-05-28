import { Directive } from '@angular/core';
import { ConsultaCepService } from '../services/consulta-cep.service';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Directive({
  selector: '[validadorCep]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidadorCepDirective,
    multi: true
  }]
})
export class ValidadorCepDirective implements AsyncValidator {

  constructor(private cepService: ConsultaCepService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let cep = control.value
    return this.cepService.getConsultaCEP(cep).pipe(map(
      (r) => r.erro ? { 'validadorCep': true } : null
    ))
  }
}
