import { observable, action } from "mobx";

class RootStore{
    // es7的装饰器语法
    @observable
    name = "Elsa";

    @action
    changeName(name){  //行为，修改名称
        this.name=name;
    }
}

export default new RootStore();