import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { map, throttleTime } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth/auth.service';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  clicked = false

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 2 },
          chart: { cols: 1, rows: 3 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 2,
        miniCard: { cols: 1, rows: 2 },
        chart: { cols: 1, rows: 2 },
        table: { cols: 4, rows: 3 },
      };
    })
  );
 
 
   constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {}

   ngOnInit(){

   }
}
