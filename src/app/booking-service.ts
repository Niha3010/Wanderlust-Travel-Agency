import { Service } from '@angular/core';
import { IDestination } from './idestination.interface';

@Service()
export class BookingService {
    private booking : IDestination[] =[]

    addToBooking(destination: IDestination): void {
let existingbooking = this.booking.find((item) => item.id === destination.id );
if(existingbooking) {
    this.booking.push({ ...destination });

  }else{
    this.booking.push({...destination})
  }
}

  getdestinationItems(): IDestination[] {
    return this.booking;
  }

  getTotal(): number{
    let total = 0;

    for (let destination of this.booking) {
      total = total + destination.price;
    }

    return total;
  }

  removeDestination(index: number): void {
    this.booking.splice(index, 1);
  }

}
