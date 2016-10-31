import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import LocationService from 'resources/services/location-service';
import LoaderService from 'resources/services/loader-service';
import ToastService from 'resources/services/toast-service';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Router, LocationService, LoaderService, ToastService, EventAggregator)
export class Location {
  constructor(router, location, loader, toast, eventAggregator) {
    this.router = router;
    this.location = location;
    this.loader = loader;
    this.toast = toast;
    this.eventAggregator = eventAggregator;
  }

  async attached() {
    if (this.location.exists) {
      this.router.navigate('');
      return;
    }
    this.loader.display();
    await this.toast.info('Fetching the current location...');
    await this.location.getLocation(async x => {
      await this.toast.success('Location has been loaded.');
      this.loader.hide();
      this.router.navigate('');
    }, async error => {
      this.eventAggregator.publish('location:error');
    }, true);
  }
}
