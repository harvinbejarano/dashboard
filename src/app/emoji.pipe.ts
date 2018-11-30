import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
	transform(value: string, args?: any): string {
		let emj = 'emoji';
		switch (value.toLowerCase()) {
			case 'happy':
				emj = '😀';
				break;
			case 'sad':
				emj = '😥';
			default:
				break;
		}
		return emj;
	}
}
