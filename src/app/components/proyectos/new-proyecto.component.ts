import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) {}

  ngOnInit(): void {
      
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.nombreE, this.descripcionE);
    this.sProyecto.save(proyecto).subscribe(data => {
      alert("Proyect saved");
      this.router.navigate(['']);
    }, err => {
      alert("Error saving proyect");
      this.router.navigate(['']);
    }
    );
  }
}
