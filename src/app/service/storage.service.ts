import { Injectable } from '@angular/core';
import { Quote } from '../model/quote';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  quotes: Quote[] =  [
    new Quote(1, 'Bill Watterson', '“The greatest glory in living lies not in never falling, but in rising every time we fall.“', 'Beatrice Johns',0, 0, new Date('2021,11,20'),false),
    new Quote(2, 'Bill Watterson',  '“You know, Hobbes, some days even my lucky rocketship underpants don\'t help.” ','Isaac Kiptoo',0, 0, new Date('2022,1,10'),false),
    new Quote(3, 'Stephen Chbosky', ' "Even if we don\'t have the power to choose where we come from, we can still choose where we go from there."', 'Alex Omondi',0, 0, new Date('2021,12,15'),false),
    new Quote(4, 'J.K. Rowling', '"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default."', 'Hughes Mugera',0, 0, new Date('2022,4,8'),false)
  ];
getQuotes(){
  this.setBestQuote()
  return this.quotes
}
getQuote(id:number){
  return this.quotes.find(quote=>quote.id===id)
}
addQuote(quote:Quote){
  const quote_id=this.quotes.length+1;
  quote.id=quote_id;
  const new_quotes=[...this.quotes,quote];
  this.quotes=new_quotes
}
upvoteQuote(id:number){
  const q = this.getQuote(id)
    if(q){
      q.upvotes += 1;
    }
    this.setBestQuote();

}
downVotesQuote(id:number){
  const q = this.getQuote(id)
  if(q){ 
    q.downvotes += 1;
  }
  this.setBestQuote();
    
 
  this.setBestQuote();
}
deleteQuote( id:number){
  const q = this.getQuote(id)
  if(q){
    this.quotes.splice(this.quotes.indexOf(q,1))
  }
  this.setBestQuote();
 
}
  constructor() { }

  setBestQuote(){
    this.quotes.forEach(quote => quote.best = false);
    this.quotes.sort((a, b) => b.upvotes - a.upvotes);
    this.quotes[0].best = true;
    this.quotes.sort((a, b) => a.id - b.id);
    console.log(this.quotes)
  }
}
