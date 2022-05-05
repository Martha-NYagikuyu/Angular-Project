import { Directive ,Input ,ElementRef ,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBestquote]'
})
export class BestquoteDirective {
  @Input() appBestquote = false;

  // @HostBinding('class')
  our_class = "best-quote"
  constructor(private el: ElementRef, private renderer: Renderer2) { 
   
    // renderer.addClass(el.nativeElement, 'best-quote');
   }

  ngOnInit() {
    if(this.appBestquote){
      this.renderer.addClass(this.el.nativeElement, 'best-quote');
    }
  }


}
