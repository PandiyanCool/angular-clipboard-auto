import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appCopy]'
})
export class CopyDirective implements OnInit {

    constructor(private _el: ElementRef, private _renderer: Renderer2) {

    }

    ngOnInit() {
        let copy_icon = this._renderer.createElement('i');
        this._renderer.addClass(copy_icon, 'fa');
        this._renderer.addClass(copy_icon, 'fa-copy');
        this._renderer.addClass(copy_icon, 'angular-copy-icon');
        let simple = this._renderer.listen(copy_icon, 'click', (evt) => {
            this.copy(this._el.nativeElement);
        });

        this._renderer.appendChild(this._el.nativeElement.parentNode, copy_icon);
    }

    copy(event) {
        let input = event;
        input.select();
        document.execCommand('copy');
        input.setSelectionRange(-1, -1);
    }

}