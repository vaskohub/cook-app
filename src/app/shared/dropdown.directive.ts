import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  isOpen = false;
  dropdownMenu: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.dropdownMenu = this.renderer.nextSibling(this.elementRef.nativeElement);
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.dropdownMenu, 'show');
    } else {
      this.renderer.removeClass(this.dropdownMenu, 'show');
    }
  }

  @HostListener('blur') changeFocus() {
    this.isOpen = false;
    this.renderer.removeClass(this.dropdownMenu, 'show');
  }
}
