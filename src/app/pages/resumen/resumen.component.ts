import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit {

  tipoDocumento: string = '';
  numeroDocumento: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.tipoDocumento = params['tipoDocumento'];
      this.numeroDocumento = params['numeroDocumento'];
    });
  }

  volver() {
    this.router.navigate(['/inicio']);
  }

  

}
