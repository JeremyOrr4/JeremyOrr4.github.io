function resizeFolderBody(){
    let body = document.querySelector(".PopUp-Background");
    let folderBody = document.querySelector(".folder-Body");

    folderBody.offsetHeight = body.offsetHeight + 50;
}


resizeFolderBody();

window.addEventListener("resize", resizeFolderBody);


