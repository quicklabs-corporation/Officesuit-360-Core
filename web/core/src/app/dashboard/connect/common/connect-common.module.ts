import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ChatProfileComponent } from "./chat-profile/chat-profile.component";
import { MailListItemComponent } from "./mail-list-item/mail-list-item.component";
import { MailViewComponent } from "./mail-view/mail-view.component";
import { PeopleComponent } from "./people/people.component";
import { PeoplelistitemComponent } from "./peoplelistitem/peoplelistitem.component";

@NgModule({
    declarations: [
        ChatProfileComponent,
        PeopleComponent,
        PeoplelistitemComponent,
        MailListItemComponent,
        MailViewComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ],
    exports: [
        ChatProfileComponent,
        PeopleComponent,
        PeoplelistitemComponent,
        MailListItemComponent,
        MailViewComponent
    ]
})
export class ConnectCommonModule { }