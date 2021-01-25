import { Component, OnInit } from '@angular/core';
import { faCoffee,faCloudRain,faHome,faTachometerAlt , faCartArrowDown , faUserEdit,faUserPlus,faSeedling,faLayerGroup,faLeaf,faUserSecret} from '@fortawesome/free-solid-svg-icons';
import { Router,RouterLinkActive } from '@angular/router';
import { TokenStorageService } from '../../../_services/token-storage.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
      faCoffee=faCoffee;
      faHome=faHome;
      faUserSecret=faUserSecret;
      faCloudRain=faCloudRain;
      faTachometerAlt=faTachometerAlt; 
      faUserEdit = faUserEdit;
      faUserPlus = faUserPlus;
      faCartArrowDown = faCartArrowDown;
      faSeedling = faSeedling;
      faLayerGroup = faLayerGroup;
      faLeaf = faLeaf;
      private roles: string[];
      isLoggedIn = false;
      showAdminBoard = false;
      showModeratorBoard = false;
      showSeederBoard  = false;
      username: string;

  constructor(private router:Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_EXTENSION');
      this.showSeederBoard = this.roles.includes('ROLE_SEEDER');

      this.username = user.username;
    }
  }
  
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  dashboardPage(){
    this.router.navigate([`/dashboard`]);      
      
  }

}