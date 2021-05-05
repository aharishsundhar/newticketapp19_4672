import { Component, OnInit } from '@angular/core';
import { AddtypesService } from './addtypes.service';

@Component({
  selector: 'app-addtypes',
  templateUrl: './addtypes.component.html',
  styleUrls: ['./addtypes.component.scss'],
})

export class AddtypesComponent implements OnInit {
    public types = {
        name: '',
        description: '',
    }

    constructor (
        private addtypesService: AddtypesService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addtypesService.GpCreate(this.types).subscribe(data => {
            this.types.name = ''
 	 	this.types.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}