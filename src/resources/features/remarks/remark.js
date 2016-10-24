import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import LocationService from 'resources/services/location-service';
import RemarkService from 'resources/services/remark-service';
import ToastService from 'resources/services/toast-service';
import LoaderService from 'resources/services/loader-service';
import AuthService from 'resources/services/auth-service';
import {EventAggregator} from 'aurelia-event-aggregator';
import environment from '../../../environment';

@inject(Router, LocationService, RemarkService, ToastService, LoaderService, AuthService, EventAggregator)
export class Remark {
    constructor(router, locationService, remarkService, toastService, loader, authService, eventAggregator) {
        this.router = router;
        this.locationService = locationService;
        this.remarkService = remarkService;
        this.toast = toastService;
        this.loader = loader;
        this.authService = authService;
        this.eventAggregator = eventAggregator;
        this.remark = {};
        this.isDeleting = false;
        this.isInRange = false;
    }

    get canDelete(){
        let profile = JSON.parse(this.authService.profile);

        return profile.user_id === this.remark.author.userId;
    }

    get canResolve(){
        return this.remark.resolved == false && this.isInRange;
    }

    async activate(params, routeConfig){
        this.id = params.id;
        let remark = await this.remarkService.getRemark(this.id);
        this.remark = remark;
        this.mediumPhoto = this.remark.photos.find(x => x.size === 'medium');
        this.bigPhoto = this.remark.photos.find(x => x.size === 'big');
        this.resolveUrl = this.router.generate("resolve-remark", {id : remark.id});
        this.state = remark.resolved ? "resolved" : "new";
        this.isInRange = this.locationService.isInRange({
            latitude : remark.location.coordinates[1], 
            longitude : remark.location.coordinates[0]
        });
    }

    async delete(){
        if(this.canDelete == false)
        {
            await this.toast.error("I'm sorry. You are not allowed to delete remark!")
            return;    
        }
        this.loader.display();
        this.isDeleting = true;
        await this.remarkService.deleteRemark(this.id);
        await this.toast.info('Delete request was sent, please wait...');
        this.isDeleting = false;
        this.loader.hide();
        this.router.navigate("remarks");
    }
}
