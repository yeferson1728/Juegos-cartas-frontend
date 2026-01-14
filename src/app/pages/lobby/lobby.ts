import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Table {
  id: number;
  name: string;
  bet: number;
  players: number;
  maxPlayers: number;
}

@Component({
  selector: 'app-lobby',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lobby.html',
  styleUrl: './lobby.scss',
})
export class LobbyComponent {
  credits = 10000;

  tables: Table[] = [
    {
      id: 1,
      name: 'Mesa Casual',
      bet: 100,
      players: 2,
      maxPlayers: 5,
    },
    {
      id: 2,
      name: 'Mesa Media',
      bet: 500,
      players: 4,
      maxPlayers: 5,
    },
    {
      id: 3,
      name: 'Mesa Pro',
      bet: 2000,
      players: 5,
      maxPlayers: 5,
    },
  ];

  // MODAL
  showCreateModal = false;
  tableType: 'public' | 'private' = 'public';
  inviteCode = 'REL-8F2K';

  // TOAST
  showToast = false;

  // BETS
  bets = [200, 500, 1000, 2000];
  selectedBet = 500;

  constructor(private router: Router) {}

  joinTable(tableId: number) {
    console.log('Entrando a mesa', tableId);
    this.router.navigate(['/game']);
  }

  openCreateModal() {
    this.showCreateModal = true;
  }

  closeModal() {
    this.showCreateModal = false;
  }

  confirmCreate() {
    console.log('Crear mesa', {
      type: this.tableType,
      bet: this.selectedBet,
    });

    this.closeModal();
    this.router.navigate(['/game']);
  }

  copyCode() {
    navigator.clipboard.writeText(this.inviteCode);

    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 2000);
  }
}
