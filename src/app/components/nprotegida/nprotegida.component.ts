import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-nprotegida',
  templateUrl: './nprotegida.component.html',
  styleUrls: ['./nprotegida.component.css']
})
export class NprotegidaComponent implements OnInit {

  constructor(public auth: AuthService ) { }

  ngOnInit(): void {
  }

}
