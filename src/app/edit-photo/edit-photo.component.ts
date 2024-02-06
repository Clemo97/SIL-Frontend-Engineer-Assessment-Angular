import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {
  photoId: any;
  photoData: any; // Define the type of photoData based on the response data structure

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    // Get the photoId from the route parameter
    this.route.params.subscribe(params => {
      this.photoId = +params['id']; // Convert the id parameter to a number
    });

    // Call the DataService to get the individual photo data
    this.dataService.getIndividualPhoto(this.photoId).subscribe(
      (data: any) => {
        this.photoData = data;
        console.log(this.photoData); // Log the photo data for testing
      },
      (error) => {
        console.error('Error fetching individual photo:', error);
      }
    );
  }
}
