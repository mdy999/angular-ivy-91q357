import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAd]',
})
export class AdDirective {
  // 注入了ViewContainerRef来获取对容器视图的访问权
  constructor(public viewContainerRef: ViewContainerRef) {}
}
