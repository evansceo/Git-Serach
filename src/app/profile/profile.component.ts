import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile = { login: '',
    company: '',
    location: '',
    avatar_url: '',
    public_repos: '',
    public_gist: '',
    followers: '',
    following: '',
    email: '',
    bio: '',
    created_at: ''};
  repos!: any[];
  username!: string;
  any: Object | undefined;



  constructor(private service: ProfileService) {
    this.service.getProfileInfo().subscribe((profile: { login: string; company: string; location: string; avatar_url: string; public_repos: string; public_gist: string; followers: string; following: string; email: string; bio: string; created_at: string; }) => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.any = repos;
    });


