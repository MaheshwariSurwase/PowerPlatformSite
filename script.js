let isOpenMoreNav = false;
let moreNavOverlay = document.createElement("div");
moreNavOverlay.id = "more-nav-overlay";
function openMoreNav(){

    isOpenMoreNav = !isOpenMoreNav;
    if(isOpenMoreNav){
        document.getElementById("up-arrow").style.display = "block";
        document.getElementById("first-more-nav").style.animation = "firstMoreNavShow .3s forwards";
        document.getElementById("moreNav").style.animation = "openMoreNav .2s forwards";


    }
    else{
        document.getElementById("up-arrow").style.display = "none";
        document.getElementById("moreNav").style.animation = "closeMoreNav .3s forwards";
// append overlay
        document.getElementById("moreNav").prepend(moreNavOverlay);
        // reset styling after animation
        document.getElementById("moreNav").addEventListener("animationend", () => {
          document.getElementById("first-more-nav").style.animation = "";
        // remove overlay
          document.getElementById("more-nav-overlay").remove();


        });
    }
}

//handle first column
function changeFirstCol(eventTarget){
    document.querySelectorAll("#first-more-nav p").forEach(result => {
        result.classList.remove("selectedFirstColumn");
    });
    //change selected
    eventTarget.classList.add("selectedFirstColumn");
    if(eventTarget.id === "first-col-2"){
        document.querySelectorAll("#second-more-nav p").forEach(result => {
            result.style.animation= "secondMoreNavShow .2s forwards";
        });
    }
}
function changeSecondCol(eventTarget){
    document.querySelectorAll("#second-more-nav p").forEach(result => {
        result.classList.remove("selectedSecondColumn");
    });
    eventTarget.classList.add("selectedSecondColumn");

    if(eventTarget.id === "second-col-1"){
        document.getElementById("third-more-nav").innerHTML= `<div class="third-nav-col">
        <div class="third-nav-header">TRAINING</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
        <div class="third-nav-header">CERTIFICATES</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
    </div>
    <div class="third-nav-col" style="margin-top: 40px">
        <div class="third-nav-header">I NEED TO...</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
        <div class="third-nav-header">PARTNER TRAINING</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
    </div>`
    }else if(eventTarget.id==="second-col-2"){
        document.getElementById("third-more-nav").innerHTML= `<div class="third-nav-col">
        <div class="third-nav-header">CERTIFICATIONS</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
        
    </div>
    <div class="third-nav-col" style="margin-top: 40px">
        <div class="third-nav-header">MOST POPULAR</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
        <div class="third-nav-header">I NEED TO...</div>
        <p>Sub 1</p>
        <p>Sub 2</p>
        <p>Sub 3</p>
        <p>Sub 4</p>
    </div>`
    }

}