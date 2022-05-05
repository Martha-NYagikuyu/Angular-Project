import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from 'src/app/model/quote';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.scss']
})
export class QouteDetailComponent implements OnInit {
  qoute: Quote | undefined;


  constructor(
    public activateRuote: ActivatedRoute,
    public storageService : StorageService
    ) { }

  ngOnInit(): void {
  }

}
