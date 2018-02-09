import {observable} from 'mobx';

export class Data {

    @observable clientWidth = document.documentElement.clientWidth;
    @observable clientHeight = document.documentElement.clientHeight;
    @observable width = 0;//控件的宽度
    @observable height = 0;//控件的高度
    @observable x = 0;//鼠标的x坐标
    @observable y = 0;//鼠标的y坐标
    @observable left = 0;//控件离左边的距离
    @observable top = 0;//控件离右边的距离
    @observable background = '#F0F0F0';

    @observable focused = false;
    @observable action;

    constructor(){
        let that = this;
        window.onresize = function () {
            that.clientWidth = document.documentElement.clientWidth;
            that.clientHeight = document.documentElement.clientHeight;
        }
    }

    takeAction(e) {
        if (e.pageX - 10 <= e.target.offsetLeft && e.pageY - 10 <= e.target.offsetTop) {//鼠标在控件左上角
            console.log('鼠标在左上角');
            e.target.style.cursor = 'se-resize';
            this.action = 'changeLeftTop';
        } else if (e.pageX - 10 <= e.target.offsetLeft && e.pageY - e.target.offsetTop + 10 >= e.target.clientHeight) {//鼠标在控件左下角
            console.log('鼠标在左下角');
            e.target.style.cursor = 'ne-resize';
            this.action = 'changeLeftBottom';
        } else if (e.pageX - e.target.offsetLeft + 10 >= e.target.clientWidth && e.pageY - 10 <= e.target.offsetTop) {//鼠标在控件右上角
            console.log('鼠标在右上角');
            e.target.style.cursor = 'ne-resize';
            this.action = 'changeRightTop';
        } else if (e.pageX - e.target.offsetLeft + 10 >= e.target.clientWidth && e.pageY - e.target.offsetTop + 10 >= e.target.clientHeight) {//鼠标在控件右下角
            console.log('鼠标在又下角');
            e.target.style.cursor = 'se-resize';
            this.action = 'changeRightBottom';
        } else if (e.pageX - 10 <= e.target.offsetLeft && e.pageY - 10 > e.target.offsetTop && e.pageY - e.target.offsetTop + 10 < e.target.clientHeight) {//鼠标在控件左边
            console.log('鼠标在左边');
            e.target.style.cursor = 'w-resize';
            this.action = 'changeLeft';
        } else if (e.pageX - e.target.offsetLeft + 10 >= e.target.clientWidth && e.pageY - 10 > e.target.offsetTop && e.pageY - e.target.offsetTop + 10 < e.target.clientHeight) {//鼠标在控件右边
            console.log('鼠标在右边');
            e.target.style.cursor = 'w-resize';
            this.action = 'changeRight';
        } else if (e.pageY - 10 <= e.target.offsetTop && e.pageX - 10 > e.target.offsetLeft && e.pageX - e.target.offsetLeft + 10 < e.target.clientWidth) {//鼠标在控件上边
            console.log('鼠标在上边');
            e.target.style.cursor = 's-resize';
            this.action = 'changeTop';
        } else if (e.pageY - e.target.offsetTop + 10 >= e.target.clientHeight && e.pageX - 10 > e.target.offsetLeft && e.pageX - e.target.offsetLeft + 10 < e.target.clientWidth) {//鼠标在控件下边
            console.log('鼠标在下边');
            e.target.style.cursor = 's-resize';
            this.action = 'changeBottom';
        } else {//鼠标在控件内部
            e.target.style.cursor = 'default';
            this.action = 'changePosition';
        }
        if (this.focused) {
            this[this.action](e);
        }
    }

    //改变位置
    changePosition(e) {
        let offsetX = e.pageX - this.x;
        let offsetY = e.pageY - this.y;

        this.x = e.pageX;
        this.y = e.pageY;

        if (this.left + offsetX < 0) {
            this.left = 0;
        } else if (this.left + offsetX > this.clientWidth - this.width) {
            this.left = this.clientWidth - this.width;
        } else {
            this.left += offsetX;
        }

        if (this.top + offsetY < 0) {
            this.top = 0;
        } else if (this.top + offsetY > this.clientHeight - this.height) {
            this.top = this.clientHeight - this.height;
        } else {
            this.top += offsetY;
        }
    }

    //控制左边线
    changeLeft(e) {
        console.log('鼠标在左边');
        e.target.style.cursor = 'w-resize';
        let offsetX = e.pageX - this.x;
        this.width -= offsetX;
        this.left += offsetX;
        this.x = e.pageX;
        console.log('左拉');
    }

    //控制右边线
    changeRight(e) {
        console.log('鼠标在右边');
        e.target.style.cursor = 'w-resize';
        let offsetX = e.pageX - this.x;
        this.width += offsetX;
        this.x = e.pageX;
        console.log('右拉');
    }

    //控制顶部变边线
    changeTop(e) {
        e.target.style.cursor = 's-resize';
        let offsetY = e.pageY - this.y;
        this.height -= offsetY;
        this.top += offsetY;
        this.y = e.pageY;
        console.log('上拉');
    }

    //控制底部变边线
    changeBottom(e) {
        console.log('鼠标在下边');
        e.target.style.cursor = 's-resize';
        let offsetY = e.pageY - this.y;
        this.height += offsetY;
        this.y = e.pageY;
        console.log('下拉');
    }

    changeLeftTop(e) {
        this.changeLeft(e);
        this.changeTop(e);
    }

    changeLeftBottom(e) {
        this.changeLeft(e);
        this.changeBottom(e)
    }

    changeRightTop(e) {
        this.changeRight(e)
        this.changeTop(e);
    }

    changeRightBottom(e) {
        this.changeRight(e)
        this.changeBottom(e);
    }

    //鼠标获取焦点
    focus(e) {
        this.focused = true;
        this.x = e.pageX;
        this.y = e.pageY;
    }

    //鼠标失去焦点
    blur() {
        this.focused = false;
        console.log('失去焦点');
    }
}