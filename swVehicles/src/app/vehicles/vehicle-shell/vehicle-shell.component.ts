import { Component } from '@angular/core';
import { VehicleDetailComponent } from '../vehicle-detail/vehicle-detail.component';
import { VehicleListComponent } from '../vehicle-list/vehicle-list.component';

@Component({
  standalone: true,
  imports: [ VehicleDetailComponent, VehicleListComponent ],
  template: `
  <div class='row'>
    <div class='col-md-4'>
        <sw-vehicle-list></sw-vehicle-list>
    </div>
    <div class='col-md-8'>
        <sw-vehicle-detail></sw-vehicle-detail>
    </div>
</div>
  `
})
export class VehicleShellComponent {

  constructor() { }

}
