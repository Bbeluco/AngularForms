import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConsultaCepService } from '../services/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) { }

  formulario = new FormGroup({
    nome: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    nascimento: new FormControl(''),
    telefone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/(\(?\d{2}\)?\s?)(\d{5}\-?\d{4})/)
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    cep: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(9),
      Validators.pattern(/^(\d{5})(-?\d{3})$/)
    ])),
    endereco: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    numero: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern(/\d/)
    ])),
    complemento: new FormControl(''),
    bairro: new FormControl('', Validators.required),
    cidade: new FormControl('', Validators.required),
    estado: new FormControl('')
  })

  ngOnInit(): void {
  }

  cadastrar(){
      if(this.formulario.status == "VALID") {
        this.router.navigate(['./sucesso'])
      }
  }

  consultarCep() {
    this.consultaCepService.getConsultaCEP(this.formulario.get('cep')?.value!).subscribe(r => {
      
      this.formulario.get('endereco')?.setValue(r.logradouro);
      this.formulario.get('bairro')?.setValue(r.bairro);
      this.formulario.get('cidade')?.setValue(r.localidade);
      this.formulario.get('estado')?.setValue(r.uf);
    })
  }
}
