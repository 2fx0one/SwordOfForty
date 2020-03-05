import Player from "./Player";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Controller extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    @property(Player)
    player: Player = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START,
            (event) => { this.player.changeState('walk') },
            this);

            this.node.on(cc.Node.EventType.TOUCH_END,
                (event) => { this.player.changeState('stand') },
                this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE,
            (event) => { 
                // console.log('start ', event.getStartLocation()) 
                // console.log('now ', event.getLocation()) 
                this.player.walk(event.getStartLocation(), event.getLocation())
            },
            this);
    }

    // update (dt) {}
}
