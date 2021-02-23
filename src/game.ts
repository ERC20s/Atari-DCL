import * as RestrictedActions from '@decentraland/RestrictedActions'
import { movePlayerTo } from '@decentraland/RestrictedActions'
import * as ui from '@dcl/ui-scene-utils'
import utils from "../node_modules/decentraland-ecs-utils/index"



const camera = Camera.instance

class SomeSystem implements ISystem {
  entity: Entity
  constructor(entity: Entity) {
    this.entity = entity
  }

  update() {
    const transform = this.entity.getComponent(Transform)
    transform.rotation = camera.rotation
  }
}

let min = 2.75 // number in minutes
let gametime: number
let points: number = 0;
let totals: number = 0;
let result: number = 0;
let gameStarted = false

const canvas = new UICanvas()
const statusText = new UIText(canvas)
statusText.value = ""
statusText.vAlign = "bottom"
statusText.hAlign = "center"
statusText.fontSize = 25
statusText.width = 120
statusText.height = 30
statusText.color = Color4.Yellow()

var countdownTimer = new Entity()

const idoor = new Entity()
engine.addEntity(idoor)
idoor.addComponent(new GLTFShape("models/lama.gltf"))
idoor.addComponent(new Transform({ position: new Vector3(4,0,4), rotation: Quaternion.Euler(0, 90, 0), }));

idoor.addComponent(
  new OnPointerDown(
    (_e) => {
      home.addComponentOrReplace(new Transform({
          position: new Vector3(0, 0, 0),

        }));
      RestrictedActions.movePlayerTo({ x: 3, y: 25, z: 40 }, { x: 40, y: 0, z: 40 }),
        inventoryContainer.visible = true;
        bugscore.visible = true;


      if(!gameStarted){
        gameStarted = true
        gametime = Date.now() + (1000 * 60 * min)
        engine.addEntity(countdownTimer)
        updateCountdowntimer()
        countdownTimer.addComponentOrReplace(new utils.Interval(1000, ()=>{
          updateCountdowntimer()
        }))
      }


    },
    { hoverText: "Click to start!",
    distance: 50,

  }
  )
)

engine.addSystem(new SomeSystem(idoor))




const bugscore = new UIText(canvas)
bugscore.width = 76
bugscore.height = 76
bugscore.hAlign = "right"
bugscore.vAlign = "bottom"
bugscore.positionY = 110
bugscore.positionX = -120
bugscore.fontSize = 25
bugscore.color = Color4.Black()


const totalscore = new UIText(canvas)
totalscore.width = 76
totalscore.height = 76
totalscore.hAlign = "right"
totalscore.vAlign = "bottom"
totalscore.positionY = 210
totalscore.positionX = -120
totalscore.fontSize = 25
totalscore.color = Color4.Black()
totalscore.value = ""


const home = new Entity()
engine.addEntity(home)
home.addComponent(new GLTFShape("models/home.gltf"))
home.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));

const entity = new Entity('entity')
engine.addEntity(entity)
const gltfShape = new GLTFShape(
  'models/grass/FloorBaseGrass_01.glb'
)
entity.addComponent(gltfShape)
const transform2 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5, 1, 5),
})
entity.addComponentOrReplace(transform2)



const imageTexture = new Texture('images/UI_Guestbook.png')


const inventoryContainer = new UIContainerStack(canvas)
inventoryContainer.adaptWidth = true
inventoryContainer.adaptHeight = true
inventoryContainer.width = 200
inventoryContainer.height = 75
inventoryContainer.positionY = 100
inventoryContainer.positionX = 0
inventoryContainer.color = Color4.Yellow()
inventoryContainer.hAlign = "right"
inventoryContainer.vAlign = "bottom"
inventoryContainer.stackOrientation = UIStackOrientation.VERTICAL
inventoryContainer.opacity = 0.1
inventoryContainer.visible = true


const clickexit = new Entity()
engine.addEntity(clickexit)
clickexit.addComponent(new GLTFShape("models/home.glb"))
clickexit.addComponent(new Transform({ position: new Vector3(0, 0, 0) }));
clickexit.addComponent(

  new OnPointerDown(
    (_e) => {
      RestrictedActions.movePlayerTo({ x: 40, y: 3, z: 40 }, { x: 3, y: 50, z: 40 }),
        inventoryContainer.visible = false

    },
    { hoverText: "Exit!",
    distance: 5,  }
  )
)







  const point1 = new Vector3(55, 0, 90)
  const point2 = new Vector3(55, 0, 75)
  const point3 = new Vector3(55, 0, 40)
  const point4 = new Vector3(55, 0, 4)
  const point5 = new Vector3(55, 0, -10)
  const point6 = new Vector3(25,0, 90)
  const point7 = new Vector3(25, 0, 75)
  const point8 = new Vector3(25, 0, 40)
  const point9 = new Vector3(25, 0, 4)
  const point10 = new Vector3(25, 0, -10)
  const point11 = new Vector3(40, 0, 90)
  const point12 = new Vector3(40, 0, 75)
  const point13 = new Vector3(40, 0, 40)
  const point14 = new Vector3(40, 0, 4)
  const point15 = new Vector3(40, 222, -10)
  const point16 = new Vector3(70,0, 90)
  const point17 = new Vector3(70, 0, 75)
  const point18 = new Vector3(70, 0, 40)
  const point19 = new Vector3(70, 0, 4)
  const point20 = new Vector3(70, 0, -10)
  const point21 = new Vector3(90, 0, 90)
  const point22 = new Vector3(90, 0, 75)
  const point23 = new Vector3(90, 0, 40)
  const point24 = new Vector3(90, 0, 4)
  const point25 = new Vector3(90, 222, -10)

const Path1 = [point22, point24, point19, point17, point2, point4, point14, point11]
const Path2 = [point6, point7, point8, point9, point10, point11]
const Path3 = [point22, point17, point18, point19, point10, point21]
const Path4 = [point15, point25, point15, point20, point6, point25]
const Path5 = [point1, point7, point23, point14, point9, point21]
const Path6 = [point21, point12, point4, point17, point20, point6]
const Pathz = [point15, point25]

let doorAudioSource = new AudioSource(new AudioClip("sounds/bang.wav"))
let bonusAudioSource = new AudioSource(new AudioClip("sounds/bonus.wav"))

const bug = new Entity()
bug.addComponent(new GLTFShape('models/bug.glb'))
bug.addComponent(new Transform({
    position: new Vector3(20, 500, 20),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(2, 1, 2),
}))
bug.addComponent(
  new OnPointerDown(() => {
    doorAudioSource.playOnce()
    bugscore.visible = false;
    points = points + 10;
    totals = points
    bugscore.value = totals.toString() + " points"
    bugscore.visible = true;
  },
    {
      hoverText: "BANG!",
      distance: 500, }
)
)
engine.addEntity(bug)


const spider = new Entity()

spider.addComponent(new GLTFShape('models/spider.gltf'))
spider.addComponent(new Transform({
    position: new Vector3(30, 500, 40),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(2, 1, 2),
}))
spider.addComponent(
  new OnPointerDown(() => {
    doorAudioSource.playOnce()
    points = points + 222;
    totals = points
    bugscore.value = totals.toString() + " points"
    bugscore.visible = true;
  },
    {
      hoverText: "BANG!",
      distance: 500, }
)
)
engine.addEntity(spider)


const spider2 = new Entity()

spider2.addComponent(new GLTFShape('models/spider.gltf'))
spider2.addComponent(new Transform({
    position: new Vector3(20, 500, 20),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(2, 1, 2),
}))
spider2.addComponent(
    new OnPointerDown(() => {
      doorAudioSource.playOnce()
      points = points + 69;
      totals = points
      bugscore.value = totals.toString() + " points"
      bugscore.visible = true;
    },
      {
        hoverText: "BANG!",
        distance: 500, }
  )
  )
engine.addEntity(spider2)

const jumper = new Entity()

jumper.addComponent(new GLTFShape('models/jumper.glb'))
jumper.addComponent(new Transform({
    position: new Vector3(20, 500, 20),
    rotation: Quaternion.Euler(0, 90, 0),
    scale: new Vector3(2, 1, 2),
}))
jumper.addComponent(
    new OnPointerDown(() => {
      doorAudioSource.playOnce()
      points = points + 200;
      totals = points
      bugscore.value = totals.toString() + " points"
      bugscore.visible = true;
    },
      {
        hoverText: "BANG!",
        distance: 500, }
  )
  )

  const worm = new Entity()

  worm.addComponent(new GLTFShape('models/worm.glb'))
  worm.addComponent(new Transform({
      position: new Vector3(20, 500, 20),
      rotation: Quaternion.Euler(0, 90, 0),
      scale: new Vector3(2, 1, 2),
  }))
  worm.addComponent(
      new OnPointerDown(() => {
        bonusAudioSource.playOnce()
        points = points + 1000;
        totals = points
        bugscore.value = totals.toString() + " points"
        bugscore.visible = true;
      },
        {
          hoverText: "BANG!",
          distance: 500, }
    )
    )

engine.addEntity(jumper)
engine.addEntity(worm)

let StartPos = new Vector3(40, 0, 90)
let EndPos = new Vector3(40, 0, 0)

home.addComponent(doorAudioSource)
clickexit.addComponent(bonusAudioSource)

function updateCountdowntimer(){
  let distance = gametime - Date.now()
  if(distance > 165000){

}
  if(distance > 163000 && distance < 165000){
totalscore.value = "Ready?!"

}

  if(distance > 160000 && distance < 163000){
totalscore.value = "Set.."

}

  if(distance > 130000 && distance < 160000){
    totalscore.value = "Wave 1"
    bug.addComponent(new utils.FollowPathComponent(Path1, 30))
  }
  if(distance > 120000 && distance < 130000){
    spider2.addComponent(new utils.FollowPathComponent(Path2, 10))
    worm.addComponent(new utils.FollowPathComponent(Path3, 10))
  }
  if(distance > 75000 && distance < 115000){
    totalscore.value = "Wave 2"
    spider.addComponent(new utils.FollowPathComponent(Path1, 20))
    jumper.addComponent(new utils.FollowPathComponent(Path2, 10))
  }

  if(distance < 70000 && distance > 1){
    totalscore.value = "Final Wave!"
    bug.addComponent(new utils.FollowPathComponent(Path1, 20))
    spider.addComponent(new utils.FollowPathComponent(Path2, 20))
    jumper.addComponent(new utils.FollowPathComponent(Path4, 20))
    spider2.addComponent(new utils.FollowPathComponent(Path5, 10))
    worm.addComponent(new utils.FollowPathComponent(Path6, 10))
    spider2.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 8))
  }
    if(distance < 1){
      result = points
      log('Game over')
      engine.removeEntity(countdownTimer)
      statusText.value = "Game Over! Try again."
      gameStarted = false
      totalscore.value = "Result: " + result.toString() + " points"
      points = points * 0;
    }
    else{
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    statusText.value = "Squash bugs! " + distance.toString()
    }
  }
