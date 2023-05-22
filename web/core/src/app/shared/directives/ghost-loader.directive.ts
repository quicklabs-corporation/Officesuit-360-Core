import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[qlGostLoader]'
})
export class GhostLoaderDirective implements OnInit {
  private show: boolean = false;
  @Input() qlGostLoaderElse?: TemplateRef<unknown>;
  @Input() set qlGostLoader(value: any) {
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
    this.displayTemplate();
  }

  private displayTemplate() {
    this.vcr.clear();
    console.log(this.qlGostLoaderElse);
    if (this.show) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else if (this.qlGostLoaderElse) {
      this.vcr.createEmbeddedView(this.qlGostLoaderElse);
    }
  }
}
