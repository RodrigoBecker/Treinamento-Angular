import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;
  cursos: string[];

  constructor(private cursosService: CursoService) {
    this.nomePortal = 'teste';

    // var servico = new CursoService();
    this.cursos = this.cursosService.getCursos();
  }

  ngOnInit() {
  }

}
