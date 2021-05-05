import { Component, OnInit } from '@angular/core';
import { AddticketService } from './addticket.service';

@Component({
  selector: 'app-addticket',
  templateUrl: './addticket.component.html',
  styleUrls: ['./addticket.component.scss'],
})

export class AddticketComponent implements OnInit {
    typesitemArray: any = [];
    severityitemArray: any = [];
    public tickets = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }

    constructor (
        private addticketService: AddticketService,
    ) { }

    ngOnInit() {
    }
    typesGpGetAllValues() {
        this.addticketService.typesGpGetAllValues().subscribe(data => {
            this.typesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.addticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.addticketService.GpCreate(this.tickets).subscribe(data => {
            this.tickets.name = ''
 	 	this.tickets.description = ''
 	 	this.tickets.groups = ''
 	 	this.tickets.types = ''
 	 	this.tickets.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}