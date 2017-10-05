import environment from '../../environment';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import * as retry from 'retry';
import AuthService from 'resources/services/auth-service';

@inject(EventAggregator, AuthService)
export default class SignalRService {
  constructor(eventAggregator, authService) {
    this.eventAggregator = eventAggregator;
    this.authService = authService;
    this.connection = null;
    this.reconnect = true;
  }

  initialize() {
    try {
      if (this.connected) {
        return;
      }
      if (!this.authService.isLoggedIn) {
        return;
      }
      let transportType = signalR.TransportType.WebSockets;
      let http = new signalR.HttpConnection(environment.signalRUrl, { transport: transportType });
      this.connection = new signalR.HubConnection(http);
      this.connection.on('remark_created', (message) => {
        this.eventAggregator.publish('remark:created', message);
      });
      this.connection.on('remark_resolved', (message) => {
        this.eventAggregator.publish('remark:resolved', message);
      });
      this.connection.on('remark_deleted', (message) => {
        this.eventAggregator.publish('remark:deleted', message);
      });
      this.connection.on('photos_to_remark_added', (message) => {
        this.eventAggregator.publish('remark:photo_added', message);
      });
      this.connection.on('photos_from_remark_removed', (message) => {
        this.eventAggregator.publish('remark:photo_removed', message);
      });
      this.connection.on('remark_vote_submitted', (message) => {
        this.eventAggregator.publish('remark:vote_submitted', message);
      });
      this.connection.on('remark_vote_deleted', (message) => {
        this.eventAggregator.publish('remark:vote_deleted', message);
      });
      this.connection.on('operation_updated', (message) => {
        this.eventAggregator.publish('operation:updated', message);
      });
      this.connection.on('disconnect', async (message) => {
        console.log("disconnecting...");
        this.reconnect = false;
        this.connection.stop();
      });
      this.connection.connectionClosed = e => {
        if (e) {
          console.log('Connection closed with error: ' + e);
        } else {
          console.log('SignalR connection was lost.');
          if (this.reconnect) {
            this.connect();
          }
        }
      };
      this.connect();
    } catch (err) {
      console.log("SignalR error.", err);
    }

  }

  get connected() {
    return this.connection !== null;
  }

  connect() {
    let operation = retry.operation({
      retries: 5,
      factor: 2,
      minTimeout: 1000,
      maxTimeout: 5000
    });
    operation.attempt(currentAttempt => {
      console.log(`Connecting to the Collectively Hub, attempt: ${currentAttempt}.`);
      let connection = this.connection;
      let token = `Bearer ${this.authService.token}`;
      connection.start()
        .then(() => {
          connection.invoke('initializeAsync', token.split(' ')[1]);
        })
        .catch(err => operation.retry(err));
    });
  }
}
