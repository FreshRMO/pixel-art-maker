document.addEventListener('DOMContentLoaded', function() {
  let numTile=1200
  let container = document.querySelector('.card-content')
  let buttonColor1 = document.querySelectorAll('.btn-floating')
  let pointerColor
  for (let i=0; i<numTile; i++){
        let tile = document.createElement("div")
        tile.style.width="2%"
        tile.style.paddingBottom="2%"
        tile.style.border="thin solid grey"
        tile.style.float='left'
        container.appendChild(tile)
        tile.addEventListener("click", function(){
          event.target.style.background=pointerColor
          console.log("hi")
        })
  }
for (let buttonColor of buttonColor1){
  buttonColor.addEventListener("click", function(){
    pointerColor=buttonColor.id
    console.log(pointerColor)
  })
  console.log(buttonColor.id)
}



//  let buttonClick = document.querySelectorAll(".btn-floating")
//  console.log(buttonClick)
//  for (let color of buttonClick){
//    console.log(color)
//    color.addEventListener("click", function(){
//     currentColor.strValue === color.querySelector("id")
// console.log(currentColor)
//    })
//  }
// buttonClick.addEventListener("click", function(){
//   console.log("inHere")
//    }
//  })
})
