import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IpAddressService {

  ipAdress: any;

  constructor(private http: HttpClient) {
    this.getIPAddress();
   }

  public getIPAddress()  
  {  
    return this.http.get("https://cors-anywhere.herokuapp.com/http://api.ipify.org/?format=json").toPromise();  
  }

  async getIP()
  {  
    const response = await this.getIPAddress();
    console.log(response);
    this.ipAdress =  response['ip'];
  }

  get ip() {
    // this.getIP();
    return this.ipAdress;
  }
}
