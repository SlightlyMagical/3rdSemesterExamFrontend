import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-available-times',
  templateUrl: './available-times.component.html',
  styleUrls: ['./available-times.component.css']
})
export class AvailableTimesComponent implements OnInit {

  availableTimesForm = new FormGroup({
    startTime: new FormControl("", [Validators.required]),
    endTime: new FormControl("", [Validators.required]),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
