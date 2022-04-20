function newImage(a,b,c,d){
    let a = document.createElement('img')
a.src = 'b'
a.style.position = 'fixed'
a.style.left = 'c'
a.style.bottom = 'd'
document.body.append(a)
}

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
//Hopfully using const will not affect the activity
const pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
