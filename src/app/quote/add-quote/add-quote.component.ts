import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/model/quote';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  quote: Quote= new Quote(1, '', '', '',0, 0, new Date());
  title='npms'

  constructor( 
    public storageService : StorageService,
    public router: Router
    
  ) { }

  ngOnInit(): void {
  }
  addQuote(){
    if(this.quote.author==='' || this.quote.quote==='' || this.quote.submited_by===''){
      alert('Kindly fill all the fields')
      return
    }
    this.storageService.addQuote(this.quote);
    this.router.navigateByUrl('/')
  }

}
