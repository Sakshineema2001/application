import { Component } from '@angular/core';
import { Elite } from 'src/Elite';
import { EliteService } from '../elite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-elite',
  templateUrl: './update-elite.component.html',
  styleUrls: ['./update-elite.component.css']
})
export class UpdateEliteComponent {
 
  id !: number;
  elite : Elite = new Elite();
  
  constructor(private service: EliteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEliteById(this.id).subscribe(data => {
      console.log(data)
      this.elite = data as Elite;
    }, error => console.log(error));
  }
  

  formSubmit(){
    this.service.updateElite(this.id, this.elite).subscribe( data =>{
      this.goToEliteList();
    }
    , error => console.log(error));
  }

  goToEliteList(){
    this.router.navigate(['/data-table']);
  }
}
