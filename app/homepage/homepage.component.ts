import { Component } from '@angular/core';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  hamburguers = any;

  constructor(private httpService: PostService) { }
  ngOnInit() {
    this.httpService.obterHamburguers().subscribe(
    (response) => { this.hamburguers = response; },
    (error) => { console.log(error); });
  }
}
