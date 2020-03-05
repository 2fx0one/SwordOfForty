
const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    speed: number = 2

    state: string;

    dir: cc.Vec2 = null;

    anim: cc.Animation = null;


    changeState(state: string) {
        this.state = state
        if (this.state == 'walk') {
            this.anim = this.getComponent(cc.Animation);
            this.anim.play();
        } else {
            this.anim.stop()
        }
    }

    walk(start: cc.Vec2, now: cc.Vec2) {
        console.log(start, now)
        console.log('diff', now.sub(start))

        this.dir = now.sub(start)

        // const angle = Math.tan(this.dir.y / this.dir.x) * 180.0 / Math.PI;
        this.node.angle = -this.vectorsToDegress(this.dir)
        console.log('angle', this.node.angle)

        console.log(this.dir.normalize())

        // this.dir = dir


    }


vectorsToDegress (dir) {
    let comVec = cc.v2(0, 1);    
    let radian = dir.signAngle(comVec);    // 求方向向量与对比向量间的弧度
    let degree = cc.misc.radiansToDegrees(radian);    // 将弧度转换为角度
    return degree;
}

    onLoad() {

    }

    start() {
    }

    update(dt) {
        if (this.state == 'walk') {
            this.node.position = this.node.position.add(this.dir.normalize().mul(this.speed))
        }
    }

    OnWeaponBegin() {
        console.log('weapon begin')
    }
    OnWeaponDone() {
        console.log('weapon done')
    }
}
