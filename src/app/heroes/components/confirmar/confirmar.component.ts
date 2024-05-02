import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Heroe } from './../../interfaces/heroe.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html'
})
export class ConfirmarComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe ) { }

  ngOnInit(): void {
    //console.log(this.data); //verificamos que haya la data
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar(){
    this.dialogRef.close();
  }

}
