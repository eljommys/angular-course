import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appBrokenImg]',
})
export class BrokenImgDirective {
  @HostListener('error') handleError(): void {
    const nativeElm = this.hostElm.nativeElement;
    nativeElm.src = '';
  }

  constructor(private hostElm: ElementRef) {
    console.log(hostElm);
  }
}
