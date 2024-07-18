import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, distinctUntilChanged, map, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { Role } from './roles';


@Directive({
  selector: '[akoShowForRoles]',
})

export class ShowForRolesDirective implements OnInit, OnDestroy{

  @Input('akoShowForRoles') allowedRoles?:Role[];
  private sub?: Subscription;
  role!:Role;

  constructor(private auth: AuthService, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>){}
  
  ngOnInit(): void {
    this.sub = this.auth.user$
    .pipe(
      map((user) => Boolean(user && this.allowedRoles?.includes(this.role))),
      distinctUntilChanged(),
      tap((hasRole)=> hasRole 
      ? this.viewContainerRef.createEmbeddedView(this.templateRef) 
      : this.viewContainerRef.clear())
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  
}