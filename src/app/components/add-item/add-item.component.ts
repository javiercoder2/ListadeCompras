/* Importamos todo lo que se precisa para la adicion y resta de items  */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from '@angular/router'; 
import { Item } from 'src/app/models/Item';
import {ItemService} from '../../services/item.service';

/* Se agrega la propiedad component para demarcar que tendra 3 aristas donde se obtendra la clase AddItemComponent de
 */@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

/*   deBEMOS CREAR LO NECESARIOI PARA ESTABLECER EL FORMULARIO DE LA LISTA
 */  title:string;
  price:number;
  quantity: number;
/*   El emiter/emit seran el output que se esperara
 */  @Output() addItem:EventEmitter<any> = new EventEmitter();

  constructor(private router:Router, private itemService:ItemService) { }

  ngOnInit(): void {

  }
/* Que cosas se guardan al momento de ingresar un item para que asi se vayan agregando
 */  onSubmit(){
    const item = new Item();
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.completed = false;

    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });

    /* this.addItem.emit(item);
    this.router.navigate(['/']);  */
  }

}
