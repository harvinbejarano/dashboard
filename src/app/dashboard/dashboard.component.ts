import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {
	constructor() {}
	imageUrl;
	show = true;
	showEmoji = 'happy';
	ngOnInit() {}

	onZoomImage(imageUrl) {
		this.imageUrl = imageUrl;
	}
}
