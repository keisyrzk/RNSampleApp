export interface BasketItem {
  cinemaName: string;
  filmName: string;
  hour: string;
  hall: number;
  tickets: Ticket[];
}

export interface Order {
  items: BasketItem[];
}

export interface Ticket {
  type: TicketType;
  amount: number;
}

export type TicketType = 'normal' | 'discounted';
