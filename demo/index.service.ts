import {RestResource} from '../';
import {Inject} from "angular2/core";
import {Http} from "angular2/http";

const URL_PREFIX = "http://jsonplaceholder.typicode.com/";

export class DataProvider extends RestResource{
  protected url : string = URL_PREFIX + "posts/:id";
  
  protected params : Object = { ':id' : '@id' }
  
  constructor(@Inject(Http) _http: Http) {
    super(_http);
  }
}