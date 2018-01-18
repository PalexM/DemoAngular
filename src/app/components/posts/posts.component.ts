import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService:DataService) { }

posts:Post[];
jsonString:any;
fsModule:any;
  ngOnInit() {
    this.dataService.getPost().subscribe((posts) => {
      this.posts = posts;

    })
  }

}

interface Post{
  userId:number;
  id:number;
  title:string;
  body:string;
}
