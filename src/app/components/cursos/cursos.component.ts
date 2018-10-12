import {Component, OnInit} from '@angular/core';
import {CursoInterface} from '../../models/cursoInterface';
import {CursoService} from '../../services/curso.service';

@Component({
    selector: 'app-cursos',
    templateUrl: './cursos.component.html',
    styles: []
})
export class CursosComponent implements OnInit {
    cursos: CursoInterface[];
    editState = false;
    cursoToEdit: CursoInterface;

    constructor(private cursoService: CursoService) {
    }

    ngOnInit() {
        this.cursoService.getCursos().subscribe(cursos => {
            console.log('cursos: ', cursos);
            this.cursos = cursos;
        });
    }

    clearState() {
        this.editState = false;
        this.cursoToEdit = null;
    }

    editCurso(event, curso: CursoInterface) {
        this.editState = true;
        this.cursoToEdit = curso;
    }

    onUpdateCurso(curso: CursoInterface) {
        this.cursoService.updateCurso(curso);
        this.clearState();
    }

    deleteCurso(event, curso: CursoInterface) {
        this.cursoService.deleteCurso(curso);
        this.clearState();
    }

}
