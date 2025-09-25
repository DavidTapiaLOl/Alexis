import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports:[UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
name = signal('Iroman');
  age = signal(45);

private PipoteName = 'Iroman';
  private PipoteAge = 45;

  nuevoName = 'Spiderman';
  nuevoAge = 22;



   getHeroDescription(){
    return `${ this.name } - ${ this.age }`;
   }

   changeHero(){
    this.name.set(this.nuevoName);
   }

   changeEdad(){
    this.age.set(this.nuevoAge);
   }

   resetForm(){
    this.name.set(this.PipoteName);
    this.age.set(this.PipoteAge);
   }
}
