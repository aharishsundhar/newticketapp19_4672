import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class SearchupdateticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    severityGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/severity');
    }
    typesGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/types');
    }
    GpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/tickets');
    }
}