//document.addEventListener("DOMContentLoaded"), () =>{
  function search(){
    let inserisciArtisti = document.getElementById("searchField").value
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+inserisciArtisti)
     .then(response =>{
      return response.json()
     })
    .then(generale =>{
    document.getElementById("searchResults").style.display="block"
    let sec =document.getElementById("artistSection")
    let nomeArt = document.getElementById("nomeArtista")
    nomeArt.innerHTML= artist.toUpperCase()
    sec.innerHTML=""
    generale["data"].forEach(element => {
      
      //console.log(generale)
      document.getElementById("artist").classList.remove("d-none")
      let card= document.createElement("div")
      card.classList.add("corpoCard")   /*dare style*/
      let titoloAlbum= document.createElement("p")
      titoloAlbum.innerHTML= element.album.title
      let titoloCanzone = document.createElement("h5")
      titoloCanzone.innerHTML= element.title_short
      let durata = document.createElement("p")
      durata.innerHTML=element.duration  /*aggiungi secondi*/
      let immagine = document.createElement("img")
      immagine.src = element.album.cover
      

      card.appendChild(immagine)
      card.appendChild(titoloAlbum)
      card.appendChild(titoloCanzone)
      card.appendChild(durata)
      sec.appendChild(card)

    });
    })
  }


        /*let contenitore = document.getElementById("eminemSection")
        let sottocont= document.createElement("div")
        let titolo = document.createElement("h3")
        titolo.textContent = element.title
        console.log(titolo)
        let immagine = document.createElement("img")
        immagine.src = element.album.cover
        sottocont.appendChild(titolo)
        sottocont.appendChild(immagine)
        contenitore.appendChild(sottocont)
      })
      document.getElementById("eminemSection").remove("d-none");*/
    
    //.catch((err)=>{console.log("errore + err")})






 //fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")

  
 //https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem



 /*fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
      .then(response =>{
       return response.json()
       
      })
      .then(pippo => {
         pippo.data.forEach(element => {
         // console.log(element.artist.name)
          document.getElementById("searchResults").style.display="block"
          let sect = document.getElementById("eminenSection")
          sect.innerHTML += element.title
         });

      })*/

   
