import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[qlGostLoader]'
})
export class GhostLoaderDirective implements OnInit {
  private show: boolean = false;
  @Input() qlGostLoaderElse?: TemplateRef<unknown>;
  @Input() set qlGostLoader(value: any) {
    console.log(value, 'base value');
    if (value) {
      this.show = true;
      this.displayTemplate();
    }
  }
  constructor(
    private templateRef: TemplateRef<unknown>,
    private vcr: ViewContainerRef,
  ) {}

  ngOnInit(): void {
  }

  private displayTemplate() {
    this.vcr.clear();
    console.log(this.show);
    if (this.show) {
      console.log(this.templateRef);
      this.vcr.createEmbeddedView(this.templateRef);
    } else if (this.qlGostLoaderElse) {
      this.vcr.createEmbeddedView(this.qlGostLoaderElse);
    }
  }
}
