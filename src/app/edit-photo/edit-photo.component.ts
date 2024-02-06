import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {
  photoId: any;
  photoData: any;
  photoForm: FormGroup; // Define the form group

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.photoId = +params['id'];
    });

    this.dataService.getIndividualPhoto(this.photoId).subscribe(
      (data: any) => {
        this.photoData = data;
        this.createForm(); // Call createForm after fetching photoData
      },
      (error) => {
        console.error('Error fetching individual photo:', error);
      }
    );
  }

  // Method to create the form group
  createForm() {
    this.photoForm = this.fb.group({
      title: [this.photoData.title, Validators.required] // Prefill title and mark as required
    });
  }

  // Method to update the photo title
  updatePhoto() {
    if (this.photoForm.valid) {
      const updatedTitle = this.photoForm.value.title;
      this.dataService.updatePhotoTitle(this.photoId, updatedTitle).subscribe(
        (response: any) => {
          console.log('Photo title updated successfully:', response);
        },
        (error) => {
          console.error('Error updating photo title:', error);
        }
      );
    }
  }
}
