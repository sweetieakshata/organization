import {Routes,RouterModule} from '@angular/router'
import { OrganizationComponent } from './organization/organization.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';



const arr : Routes=[
  {path:'org',component:OrganizationComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'con',component:ContextmenuComponent},
  {path:'drag',component:DragDropComponent}

  // {path:'sid',component:SideComponent}


  // {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr);
