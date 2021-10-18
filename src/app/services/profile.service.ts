import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '203dd913322b3db7d987';
  private clientsecret = '020c0b3665296b33d758edeeced30473ef44f7da';
  httpClient: any;


  constructor(private http: HttpClient) {
    console.log('service is now ready');
    this.username = 'evansceo';
  }

  getProfileInfo() {
    interface ApiResponse {
      login: string;
    }
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
     .pipe(map(res => res));
  }

  getProfileRepos() {
    // tslint:disable-next-line:max-line-length
    return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret)
      .pipe(map(res => res));
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
