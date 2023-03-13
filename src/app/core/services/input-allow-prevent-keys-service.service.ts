import { Injectable } from '@angular/core';
import { AsciiCode } from '../master-data';

@Injectable({
  providedIn: 'root'
})
export class InputAllowPreventKeysService {

  
  public trimData(perValue: any){
    let currentDataTrim = perValue.trim();
    return currentDataTrim;
  }
  public hasSingleSpaceOnPaste(clipBoardGetData:any){
    let hasSpace:boolean = false;
    if(/([\s])\1/.test(clipBoardGetData === undefined ? "" : clipBoardGetData)) {
      hasSpace = true;
    }
      return hasSpace
  }
  public hasOnlyAlphabetsOnPaste(clipBoardGetData:any){
    let hasOnlyAlphabet:boolean = false;
    if (/^([A-Za-z])+( [A-Za-z]+)*$/.test(clipBoardGetData === undefined ? "" : clipBoardGetData)) {
      hasOnlyAlphabet = true;
    }
      return hasOnlyAlphabet
  }

  public exceptSpecialCharOnPaste(clipBoardGetData:any){
    let exceptSpecialCharOnPaste:boolean = false;
    if (/^[A-Za-z0-9 ]+$/.test(clipBoardGetData === undefined ? "" : clipBoardGetData)) {
      exceptSpecialCharOnPaste = true;
    }
      return exceptSpecialCharOnPaste
  }
  

  public hasSingleSpaceOnDrag(dragData:any){
    let hasSpaceOnDrag:boolean = false;
    if(/([\s])\1/.test(dragData === undefined ? "" : dragData)) {
      hasSpaceOnDrag = true;
    }
      return hasSpaceOnDrag
  }

  public exceptSpecialCharOnDrag(dragData:any){
    let hasAlphaNumberOnDrag:boolean = false;
    if (/^[A-Za-z0-9 ]+$/.test(dragData === undefined ? "" : dragData)) {
      hasAlphaNumberOnDrag = true;
    }
      return hasAlphaNumberOnDrag
  }

  public allAllowExceptDoubleSpace(enterData:any,event:any){
    if ((event.target.selectionStart === 0 && event.charCode === AsciiCode.Space)) {
      return enterData;
    }
  }

  isAlfa(evt: any) {
    let charCode = (evt.which || evt.keyCode);
    return (((charCode > AsciiCode.Space) && (charCode < AsciiCode.A || charCode > AsciiCode.Z) && 
    (charCode < AsciiCode.a || charCode > AsciiCode.z)) || 
    this.willCreateWhitespaceSequence(evt)) ? false : true;
  }

 public willCreateWhitespaceSequence(evt: any) {
    let willCreateWSS = false;
    if (this.isWhiteSpace(evt.key)) {

      let elmInput = evt.currentTarget;
      let content = elmInput.value;

      let posStart = elmInput.selectionStart;
      let posEnd = elmInput.selectionEnd;

      willCreateWSS = (
        this.isWhiteSpace(content[posStart - 1] || '')
        || this.isWhiteSpace(content[posEnd] || '')
      );
    }
    return willCreateWSS;
  }

  isWhiteSpace(char: string) {
    return (/\s/).test(char);
  }

}
