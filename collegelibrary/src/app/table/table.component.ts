import { Component } from '@angular/core';
import { FooterService } from '../services/footer.service';
import { Footer } from '../models/footer';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  food:Footer[]=[];
  constructor(private service:FooterService){   
  }
  ngOnInit():void{
    this.service.onsubmit().subscribe(data => this.food=data);
  }
}
