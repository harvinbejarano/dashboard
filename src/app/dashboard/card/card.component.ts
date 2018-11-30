import {
	Component,
	Input,
	OnInit,
	EventEmitter,
	Output,
} from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ],
})
export class CardComponent implements OnInit {
	@Input() imageUrl;
	@Output() zoomImage = new EventEmitter<string>();

	constructor() {}

	ngOnInit() {}

	onImageClicked() {
		this.zoomImage.emit(this.imageUrl);
	}
}
