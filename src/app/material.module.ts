import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatGridListModule, MatRadioModule, MatExpansionModule, MatFormFieldModule,} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatGridListModule, MatRadioModule, MatExpansionModule, MatFormFieldModule,
    ],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatGridListModule, MatExpansionModule, MatFormFieldModule,],
    providers: []
})
export class MaterialModule { }
