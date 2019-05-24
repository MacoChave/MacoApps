import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
    ],
    exports: [
        MatTabsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
    ],
})
export class AngularModule {}