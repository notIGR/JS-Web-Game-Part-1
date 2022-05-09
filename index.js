/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */

/*const pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree) */
//Hopfully using const will not affect the activity

/*const sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword) 

sword.addEventListener('click', function() {
    sword.remove()
}) */

/*function newItem(url, left, bottom) {
    const object = document.createElement('img')
object.src = url;
object.style.position = 'fixed'
object.style.left = left + 'px'
object.style.bottom = bottom + 'px'
document.body.append(object) 

object.addEventListener('click', function() {
    object.remove()
})
}*/
//did look at the source code, newItem and newImage are added similaly, so re can recall the funtion inside of the new function!
const newImage = (url, left, bottom) => {
  const object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}

const tile = (url, left, bottom, width, height) => {
    for (let h = 0; h < height; h++) {
      for (let w = 0; w < width; w++) {
        newImage(url, left + w * 100, bottom + h * 100);
      }
    }
  }
  
  const horizon = window.innerHeight / 1.75;
  const heightOfSky = window.innerHeight - horizon;
  const heightOfGrass = horizon;
  
  tile("assets/sky.png", 0, horizon, window.innerWidth / 100, heightOfSky / 100);
  tile("assets/grass.png", 0, 0, window.innerWidth / 100, heightOfGrass / 100);

newImage("assets/pine-tree.png", 450, 200);
newImage("assets/green-character.gif", 100, 100);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

const newItem = (url, left, bottom) => {
  const object = newImage(url, left, bottom);

  object.addEventListener("dblclick", () => {
    object.remove();
  });
}

newItem("assets/sword.png", 500, 405);
newItem("assets/sheild.png", 165, 185);
newItem("assets/staff.png", 600, 100);


