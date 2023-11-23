// import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  // imports: [
  //   CommonModule,
  // ],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})

export class ListComponent {
  @Input()
  characterList: Character[] = [{
    name:'Trunks',
    power: 10
  }]


  //onDelete = Index value : number EMITIR EL id
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    //TODO: EMITIR EL ID DEL PERSONAJE
    if (!id) return;

    this.onDelete.emit(id);
  }

 }
