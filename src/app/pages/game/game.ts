import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Player {
  id: string;
  name: string;
  isHouse: boolean;
  isYou?: boolean;
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
    { id: '1', name: 'Casa', isHouse: true },
    { id: '2', name: 'Tú', isHouse: false, isYou: true },
    { id: '3', name: 'Jugador 3', isHouse: false },
    { id: '4', name: 'Jugador 4', isHouse: false },
    { id: '5', name: 'Jugador 5', isHouse: false },
  ];

  get house() {
    return this.players.find((p) => p.isHouse)!;
  }

  get you() {
    return this.players.find((p) => p.isYou)!;
  }

  get others() {
    return this.players.filter((p) => !p.isHouse && !p.isYou);
  }

  /** Jugadores en arco (fuera del centro) */
  getOtherStyle(index: number, total: number) {
    const startAngle = -140;
    const endAngle = -40;

    const step = total === 1 ? 0 : (endAngle - startAngle) / (total - 1);
    const angle = ((startAngle + step * index) * Math.PI) / 180;

    return {
      left: `${50 + Math.cos(angle) * 40}%`,
      top: `${50 + Math.sin(angle) * 40}%`,
      transform: 'translate(-50%, -50%)',
    };
  }
}
