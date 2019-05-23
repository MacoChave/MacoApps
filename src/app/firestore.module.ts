import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
    imports: [
        AngularFirestoreModule
    ],
    exports: [
        AngularFirestoreModule
    ],
})
export class FirestoreModule {}