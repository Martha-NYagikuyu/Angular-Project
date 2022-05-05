import { Component, OnInit } from '@angular/core';
import { Quote } from '../model/quote';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes : Quote []=[];
  selectedQuote: Quote | undefined;

  constructor(public storageService:StorageService ) {  }

  ngOnInit(): void {
    this.getQuotes()
  }
  getQuotes(){
    this.quotes=[...this.storageService.getQuotes()]
  }
  selectQuote(quote :Quote){
    this.selectedQuote=quote;
  }
  upvoteQuote(id:number){
    this.storageService.upvoteQuote(id);
    this.getQuotes();
  }
  downVoteQuote(id:number){
    this.storageService.downVotesQuote(id);
    this.getQuotes();
  }
  deleteQuote(id:number){
    if(this.selectedQuote !== undefined){
    this.storageService.deleteQuote(id || 1000);
    this.selectedQuote= undefined;
    this.getQuotes()
    }
  }

}
