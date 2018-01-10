import { Component } from '@angular/core';
import {Projects} from '../projects';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent {
  project = new Projects('');

  submitted = false;

  onSubmit() { this.submitted = true;
  console.log("test")}

  constructor() { }

  ngOnInit(): void {
    this.projectsForm = new FormGroup({
        'name': new FormControl(this.project.name, [
            Validators.required,
            Validators.minLength(2)
        ])
    })
  }
    get name() { return this.projectsForm.get('name'); }

}
