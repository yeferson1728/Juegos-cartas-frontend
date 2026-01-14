import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  id: number;
  name: string;
  isHouse?: boolean;
  isYou?: boolean;
  cards: number;
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class GameComponent {
  players: Player[] = [
    { id: 1, name: 'Casa', isHouse: true, cards: 2 },
    { id: 2, name: 'Tú', isYou: true, cards: 2 },
    { id: 3, name: 'Jugador 3', cards: 2 },
    { id: 4, name: 'Jugador 4', cards: 3 },
    { id: 5, name: 'Jugador 5', cards: 1 },
  ];
}
