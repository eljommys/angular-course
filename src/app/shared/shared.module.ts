import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipe/order-list.pipe';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { BrokenImgDirective } from './directives/broken-img.directive';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    GenericSectionComponent,
    OrderListPipe,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    BrokenImgDirective,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    GenericSectionComponent,
    PlayListBodyComponent,
    PlayListHeaderComponent,
    OrderListPipe,
    BrokenImgDirective,
  ],
})
export class SharedModule {}
