import {observable} from 'mobx';
import {FloatDialogController} from "../FloatDialog/FloatDialogController";

export class IMData {
    @observable status = 1;
    @observable mediumStatus = false;
    @observable floatController = new FloatDialogController();
}