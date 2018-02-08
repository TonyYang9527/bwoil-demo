import {observable} from 'mobx';

export class FloatDialogController {
    @observable underControl = false;
    @observable clientWidth = document.documentElement.clientWidth;
    @observable clientHeight = document.documentElement.clientHeight;
    @observable width = 0;
    @observable height = 0;
    @observable x = 0;
    @observable y = 0;
    @observable left = 0;
    @observable top = 0;
    @observable background = '#F0F0F0';
}