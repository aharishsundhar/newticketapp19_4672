import { Component, OnInit } from '@angular/core';
import { AddseverityService } from './addseverity.service';

@Component({
  selector: 'app-addseverity',
  templateUrl: './addseverity.component.html',
  styleUrls: ['./addseverity.component.scss'],
})

export class AddseverityComponent implements OnInit {
    public severity = {
        name: '',
        description: '',
    }

    constructor (
        private addseverityService: AddseverityService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addseverityService.GpCreate(this.severity).subscribe(data => {
            this.severity.name = ''
 	 	this.severity.description = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}