import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {faBars,faCog,faQuestionCircle,faUser,faSignOutAlt, faCloudRain, faLock } from '@fortawesome/free-solid-svg-icons/';
import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  faBars=faBars;
  faCog=faCog;
  faUser=faUser;
  faSignOutAlt=faSignOutAlt;
  faQuestionCircle=faQuestionCircle;
  faLock=faLock;
  //faCloudRain=faCloudRain;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  @Input() name: string

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize') 
      );
    }, 300);
  }
  logout() {
    this.tokenStorageService.signOut();
   // window.location.reload();
  }
  
}