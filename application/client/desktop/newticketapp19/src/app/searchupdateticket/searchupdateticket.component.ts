import { Component, OnInit } from '@angular/core';
import { SearchupdateticketService } from './searchupdateticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchupdateticket',
  templateUrl: './searchupdateticket.component.html',
  styleUrls: ['./searchupdateticket.component.scss'],
})

export class SearchupdateticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'description', field: 'description'  },{ headerName: 'groups', field: 'groups'  },{ headerName: 'types', field: 'types'  },{ headerName: 'severity', field: 'severity'  },];
    typesitemArray: any = [];
    severityitemArray: any = [];
    public tickets = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private searchupdateticketService: SearchupdateticketService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    severityGpGetAllValues() {
        this.searchupdateticketService.severityGpGetAllValues().subscribe(data => {
            this.severityitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    typesGpGetAllValues() {
        this.searchupdateticketService.typesGpGetAllValues().subscribe(data => {
            this.typesitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetAllValues() {
        this.searchupdateticketService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpRoute(queryId) {
        this.router.navigate(['./updateticket'], { queryParams: { 'id': queryId } })
    }
    onSelectionChanged(values) {
        this.GpRoute(values._id);
    }
}