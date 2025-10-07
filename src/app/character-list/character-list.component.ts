import { Component, input, signal } from '@angular/core';
import { Character } from '../interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {


  // Signals
  name = signal('Ironman');
  power = signal(1000);
  characters = signal<Character[]>([
    { id: 1, name: 'Krilin', power: 8000 },
    { id: 2, name: 'Gallo', power: 7300 }
  ]);

  private nextId = 3;

  addCharacter() {
    if (!this.name().trim()) return;

    const newCharacter: Character = {
      id: this.nextId++,
      name: this.name(),
      power: this.power()
    };

    // Actualizar lista
    this.characters.update(chars => [...chars, newCharacter]);

    // Resetear inputs
    this.name.set('');
    this.power.set(0);
  }

 
}
