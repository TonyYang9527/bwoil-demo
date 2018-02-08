import { observable,  computed, action } from "mobx";
import {FloatDialogController} from "../FloatDialog/FloatDialogController";

export class IMData {

    @observable status = 1;
    @observable mediumStatus = false;
    @observable floatController = new FloatDialogController();

    @computed get setIconStyle() {
         return{fontSize: 16, color: '#08c', marginLeft: 16, marginRight: 16} ;
    }

    @action.bound openContectList(event) {
         this.status =this.status === 1?2:1 ;
    }

}
