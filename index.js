document.addEventListener('DOMContentLoaded', function() {

  let numTile=1200
  let container = document.querySelector('.card-content')


  for (let i=0; i<numTile; i++){
        let tile = document.createElement("div")
        tile.style.width="2%"
        tile.style.paddingBottom="2%"
        tile.style.border="thin solid grey"
        tile.style.float='left'
        container.appendChild(tile)
  }
let br = document.createElement("br")



});
