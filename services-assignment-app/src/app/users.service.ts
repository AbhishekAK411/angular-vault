import { Injectable } from "@angular/core";
import { CounterService } from "./logging/counter.service";

@Injectable()
export class UserService {
    activeUsers = ['max', 'anna'];
    inactiveUsers = ['chris', 'manu'];
    count = 0;

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.onLog(++this.count);
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.onLog(++this.count);
    }
}