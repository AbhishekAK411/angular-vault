import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server!: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams); //! snapshots -> only gets loaded first time component is rendered.
    // console.log(this.route.snapshot.fragment); //! snapshots -> only gets loaded first time component is rendered.

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    }); //! Observable-> queryParams
    this.route.fragment.subscribe(); //! Observable-> fragment

    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    //* Subscribe to route params to update the id if the params change
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to discard the changes?');
    }else {
      return true;
    }
  }
}
