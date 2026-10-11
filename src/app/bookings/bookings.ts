import { Component } from '@angular/core';
import { BookingService } from '../booking-service';
import { IDestination } from '../idestination.interface';

@Component({
  imports: [],
  selector: 'app-bookings',
  styleUrl: './bookings.css',
  templateUrl: './bookings.html',
})
export class Bookings {

  bookingItems: IDestination[] = [];

  constructor(private bookingService : BookingService){
    this.loadBooking();

  }

  loadBooking(): void {
  this.bookingItems = this.bookingService.getdestinationItems();
}
   getTotal(): number {
    return this.bookingService.getTotal();
  }

  removeDestination(index: number): void {
    this.bookingService.removeDestination(index);
    this.loadBooking();
  }
}
