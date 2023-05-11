import { Component } from '@angular/core';
import { EliteService } from '../elite.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-elite',
  templateUrl: './update-elite.component.html',
  styleUrls: ['./update-elite.component.css']
})
export class UpdateEliteComponent {
 
  id !: any;
  elite: any = {
    course: {
      id: '',
      courseName: ''
    },
    state: {
      id: '',
      state: ''
    },
    city:{
       id: '',
       city: ''
    }
  };
  // cities : any;
  cities :any;
  states :any;
  courses:any;
  
  constructor(private service: EliteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getEliteById(this.id).subscribe(data => {
      console.log(data)
      this.elite = data;
    }, error => console.log(error));

  this.service.getCourses().subscribe((data:any)=>{
      this.courses=data;
  })

    this.service.getAllState().subscribe((data:any) =>{
      this.states=data;
      console.log(this.states)
      this.onChangeState(this.elite)
     },(error:any) =>{
      alert('something went wrong')
  });

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

  onChangeState(elite:any) {
    const id = elite.state.id;
     this.service.getCities(id).subscribe((cities :any)=> {
       this.cities = cities;
     }
     );
    }
}
