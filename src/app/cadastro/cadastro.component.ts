import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

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
    cep: new FormControl(''),
    endereco: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl('')
  })

  ngOnInit(): void {
  }

  cadastrar(){
      // if(this.formulario.status == "VALID") {
      //   this.router.navigate(['./sucesso'])
      // }
      this.formulario.controls['nascimento']?.errors
  }
}
