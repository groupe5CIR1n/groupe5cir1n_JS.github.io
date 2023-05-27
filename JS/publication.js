function main(){
    console.log("HAAAA Vite faire qqch !");

    var colo = document.querySelector('select');
    colo.addEventListener('change', function () {
        console.log('selectedIndex => '+this.selectedIndex);
        let colo=["","#c32b72","#196ca3"];
        if(this.selectedIndex==1){
            var unset = document.getElementsByClassName("196ca3");
            for(let i =0; i<unset.length;i++){
                unset[i].style.display="none";
            }
        }
        else{
            var unset = document.getElementsByClassName("196ca3");
            for(let i =0; i<unset.length;i++){
                unset[i].style.display="block";
            }
        }
        if(this.selectedIndex==2){
            var unset = document.getElementsByClassName("c32b72");
            for(let i =0; i<unset.length;i++){
                unset[i].style.display="none";
            }
        }
        else{
            var unset = document.getElementsByClassName("c32b72");
            for(let i =0; i<unset.length;i++){
                unset[i].style.display="block";
            }
        }
        document.body.style.backgroundColor=colo[this.selectedIndex];
    })

}

main();