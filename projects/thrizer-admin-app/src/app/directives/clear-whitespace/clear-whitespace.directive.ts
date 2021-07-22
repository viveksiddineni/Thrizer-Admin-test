import { Directive, ViewContainerRef, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClearWhitespace]'
})
export class ClearWhitespaceDirective {
  @HostBinding('attr')  inputRef:any
  constructor(
    private viewRef: ViewContainerRef, 
    private _el: ElementRef, 
    private renderer:Renderer2) { }

  @HostListener('keydown', ['$event']) keydown(e) {
    if (e.which === 32 && e.target.selectionStart === 0 || e.which === 192 && e.target.selectionStart === 0) {
      return false;
    }
  }

  @HostListener('paste', ['$event']) onPaste(event) {
    console.log("under developement");
    
    return false;
  }
}
