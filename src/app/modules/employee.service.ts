import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${environment.backend_server_url}/tracking/viewreport.php`);
  }

  updateEmployee(data):Observable<any>{
    return this.http.put<any>(`${environment.backend_server_url}/------`,data); // replace '----' to  the URL or API name 
  }
}
