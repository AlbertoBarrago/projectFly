import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {IonicModule} from '@ionic/angular';

import {EsibizionePage} from './esibizione.page';

const routes: Routes = [
    {
        path: '',
        component: EsibizionePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EsibizionePage]
})
export class EsibizionePageModule {
}
