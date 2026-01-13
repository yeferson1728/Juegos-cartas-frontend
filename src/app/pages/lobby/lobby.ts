import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lobby.html',
  styleUrl: './lobby.scss',
})
export class LobbyComponent {
  players = [
    { name: 'Jugador 1', credits: 10000, isHouse: true },
    { name: 'Jugador 2', credits: 10000, isHouse: false },
    { name: 'Jugador 3', credits: 10000, isHouse: false },
  ];
}
