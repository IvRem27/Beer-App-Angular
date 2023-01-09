import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  private url = 'http://api.punkapi.com/v2/';
  constructor(private httpClient: HttpClient) { }

  getAllBeers() {
    return this.httpClient.get("/beers")
  }
}
