//HTTPTestService.ts class
import {Injectable} from '@angular/core';
import { Http }  from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers}  from '@angular/http';

@Injectable ()
export class HTTPTestService {
 constructor(private _http : Http) {}
     getCurrentTime() {
         return this._http.get('http://date.jsontest.com/')
         .map(res => res.json());
     }

     postData() {   
         var json =  JSON.stringify(this._http.get('/app/test.json')
         );
         var params = 'json='+json;
         var headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');

         return this._http.post("http://validate.jsontest.com",params,{
             headers: headers
         })
         .map(res => res.json());
     }

}