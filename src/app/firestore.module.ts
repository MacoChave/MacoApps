import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    exports: [
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
})
export class FirestoreModule {}