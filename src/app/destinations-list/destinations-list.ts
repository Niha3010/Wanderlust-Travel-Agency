import { Component } from '@angular/core';
import { IDestination } from '../idestination.interface';
import { DESTINATIONS } from '../destination';
import { RouterLink } from '@angular/router';
import { BookingService } from '../booking-service';
import Swal from 'sweetalert2';

@Component({
  imports: [RouterLink],
  selector: 'app-destinations-list',
  styleUrl: './destinations-list.css',
  templateUrl: './destinations-list.html',
})
export class DestinationsList {
  destinationsArray: IDestination[]= DESTINATIONS;

  constructor(private bookingService : BookingService){

  }
  addToBooking(destination :IDestination):void{
    this.bookingService.addToBooking(destination);
     Swal.fire({
          title: 'Yu-Hu!',
          text: 'Your destination has been added to your bookings!',
          icon: 'success'
        });
    console.log(this.bookingService.getdestinationItems());
  }
}
