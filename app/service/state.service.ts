import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { State }           from '../domain/state';
@Injectable()
export class StateService {
  constructor(private http: Http) {}

   search(stateName: string): Observable<State[]> {
    return this.http
               .get(`app/states/?name=${stateName}`)
               .map((r: Response) => r.json().data as State[]);
  }

  getAll(): Observable<State[]> {
    
     return this.http
               .get(`app/states`)
               .map((r: Response) => <State[]>r.json().data)
               .catch(this.handleError);
  }

  private handleError(error:Response){
    return Observable.throw(error.json().error||'Server error');
  }
  
}