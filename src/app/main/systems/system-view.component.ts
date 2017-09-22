import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemsService } from '../../services/systems.service';
import { FDevIDs } from '../../utilities/fdevids';
import { EBGSSystemChart } from '../../typings';

@Component({
    selector: 'app-system-view',
    templateUrl: './system-view.component.html'
})
export class SystemViewComponent implements OnInit {
    @HostBinding('class.content-area') contentArea = true;
    systemData: EBGSSystemChart;
    constructor(
        private systemService: SystemsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.systemService
            .parseSystemDataId([this.route.snapshot.paramMap.get('systemid')])
            .then(system => {
                this.systemData = system[0];
                this.systemData.government = FDevIDs.government[this.systemData.government].name;
                this.systemData.allegiance = FDevIDs.superpower[this.systemData.allegiance].name;
                this.systemData.primary_economy = FDevIDs.economy[this.systemData.primary_economy].name;
                this.systemData.state = FDevIDs.state[this.systemData.state].name;
            })
    }
}
