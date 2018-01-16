import { Component, OnInit } from '@angular/core';
import {Projects} from '../projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Projects = {
    name : 'Test'
  }
  constructor() { }

  ngOnInit() {
  }

}
