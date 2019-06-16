import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective implements OnInit {

  private status = false;
  private dropdownMenu: ElementRef;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.dropdownMenu = this.renderer.nextSibling(this.elementRef.nativeElement);
  }

  @HostListener('document:click', ['$event'])
  toggleDropdownMenu(event: Event) {
    this.isOpen(event) ? this.openMenu() : this.closeMenu();
  }

  private isOpen(event: Event): boolean {
    return this.status = this.elementRef.nativeElement.contains(event.target) ? ! this.status : false;
  }

  private closeMenu() {
    this.renderer.removeClass(this.dropdownMenu, 'show');
  }

  private openMenu() {
    this.renderer.addClass(this.dropdownMenu, 'show');
  }
}
