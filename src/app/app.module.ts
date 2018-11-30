import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { EmojiPipe } from './emoji.pipe';

@NgModule({
	declarations: [ AppComponent, DashboardComponent, CardComponent, EmojiPipe ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
