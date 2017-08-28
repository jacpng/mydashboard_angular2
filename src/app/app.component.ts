import { Component } from '@angular/core';
import { HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
coaches
	constructor(public httpService : HttpService){

		this.httpService.getCoaches()
		.subscribe(data => {
			console.log(data)
			this.coaches = data 
		})

	}

  title = 'app';
  augustBaby ='Franklin';
  newcoach = {
  	name: '',
  	description:'',
  	image_url:''
  }

	saveCoach(newcoach){
		this.httpService.addCoach(newcoach)
		.subscribe(data => {
			console.log(data)

		this.coaches.push(newcoach)
  		this.newcoach ={
  			name:'',
  			description:'',
  			image_url:''

  		}

  	})
  	}
}




    /* [{
  	name:'Yunkie',
  	description:'special in golf',
  	image_url:'http:www.facebook.com'


  },
  {
  	name:'Franklin',
  	description:'special in weight loss',
  	image_url:'http:www.facebook.com'

  },
  {
  	name:'Ken',
  	description:'weight lifting',
  	image_url:'http:www.facebook.com'
  }

  	]*/

  
