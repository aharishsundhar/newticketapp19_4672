import { Component, OnInit } from '@angular/core';
import { UpdateticketService } from './updateticket.service';

@Component({
  selector: 'app-updateticket',
  templateUrl: './updateticket.component.html',
  styleUrls: ['./updateticket.component.scss'],
})

export class UpdateticketComponent implements OnInit {
    queryId: any;
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
        private updateticketService: UpdateticketService,
    ) { }

    ngOnInit() {
    }
    typesGpGetAllValues() {
        this.updateticketService.typesGpGetAllValues().subscribe(data => {
            this.typesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severityGpGetAllValues() {
        this.updateticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.updateticketService.GpUpdate(this.tickets).subscribe(data => {
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
    GpGetNounById() {
        this.updateticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.tickets = data
        },
        error => {
            console.log('Error', error);
        });
    }
}