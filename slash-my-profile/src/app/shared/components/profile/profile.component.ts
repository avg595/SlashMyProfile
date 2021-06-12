import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  
  imagePath: any = "assets/images/profile-img.png";
  isImgSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);

      reader.onload = (event) => {
        this.imagePath = event.target.result;
      }
    }

    this.isImgSelected = true;
  }
}
