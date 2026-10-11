import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from '../../idestination.interface';
import { DESTINATIONS } from '../../destination';
import { BookingService } from '../../booking-service';
import Swal from 'sweetalert2';

@Component({
  imports: [],
  selector: 'app-destinations-details',
  styleUrl: './destinations-details.css',
  templateUrl: './destinations-details.html',
})
export class DestinationsDetails implements OnInit {

  destination: IDestination | undefined;
  
  constructor(private route : ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    let destinationId = Number (this.route.snapshot.params['id']);
    console.log (typeof destinationId);
    this.destination = DESTINATIONS.find(d => d.id == destinationId);
    console.log(this.destination);
  }

addToBooking(): void {
    if (this.destination && this.destination.availability) {
      this.bookingService.addToBooking(this.destination);

      Swal.fire({
      title: 'Yu-Hu!',
      text: 'Your destination has been added to your bookings!',
      icon: 'success'
    });
    }
  }
}
