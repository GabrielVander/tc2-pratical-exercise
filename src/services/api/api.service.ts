import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public static baseAPIEndpoint = 'https://tiagoifsp.ddns.net/noticias/';

  constructor() { }
}
