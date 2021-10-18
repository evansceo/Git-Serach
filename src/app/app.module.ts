
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }