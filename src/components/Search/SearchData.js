import {observable} from 'mobx';

export class SearchData {
    @observable value = '';

    update(e) {
        this.value = e.target.value;
    }

    clear() {
        this.value = '';
    }
}