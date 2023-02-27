let ValueFirstInput = document.getElementById("De-Value");
let UnitFirstInput = document.getElementById("De-Unit");
let UnitSecondInput = document.getElementById("Vers-Unit");
let ResultEle = document.getElementById("Result-Value")
let Boutton = document.getElementById("Convert-Button");
let BoutonInvert = document.getElementById("Invert-Unit");

let select = document.getElementById("De-Unit");
let select2 = document.getElementById("Vers-Unit")
let AddUnitInput = document.getElementById("Add-Unit");
let AddMeterInput = document.getElementById("Add-Meter")
let AddLinkInput = document.getElementById("Add-Link")
let BoutonAdd = document.getElementById("Add-New-Unit")

let ImgSpaceDe = document.getElementById("De-Img");
let ImgSpaceVers = document.getElementById("Vers-Img");

const Unite = new Map();
Unite.set("m", 1);
Unite.set("km", 1000);
Unite.set("cm", 0.01);
Unite.set("mm", 0.001);
Unite.set("Tour Eiffel", 330)
Unite.set("Homme", 1.756)
Unite.set("Smartphone", 0.1467)
Unite.set("Ariane 5", 56)
Unite.set("Golden Gate", 1970)
Unite.set("cmImg", "/Img/CM-Icon.png")
Unite.set("mmImg", "/Img/MM-Icon.png")
Unite.set("mImg", "/Img/M-Icon.png")
Unite.set("kmImg", "/Img/KM-Icon.png")
Unite.set("Tour EiffelImg", "/Img/tour-eiffel.png")
Unite.set("HommeImg", "/Img/homme.png")
Unite.set("SmartphoneImg", "/Img/smartphone.png")
Unite.set("Ariane 5Img", "/Img/fusee.png")
Unite.set("Golden GateImg", "/Img/pont.png")

const ConvertValue = () => {
    let ValeurDe = ValueFirstInput.value;
    let UniteDe = UnitFirstInput.value;
    let UniteVers = UnitSecondInput.value;

    let ValeurDeEnMetre;
    let ValeurVersEnMetre;
    let ValeurFinale;


    ValeurDeEnMetre = ValeurDe * Unite.get(UniteDe);
    ValeurVersEnMetre = 1 * Unite.get(UniteVers);
    ValeurFinale = ValeurDeEnMetre / ValeurVersEnMetre;

    AddImg(ValeurDe, ValeurFinale, UniteDe, UniteVers);

    ResultEle.value = ValeurFinale.toFixed(2);
}

function AddImg(Value, ResultValue, name, name2) {
    while (ImgSpaceDe.firstChild) {
        ImgSpaceDe.removeChild(ImgSpaceDe.firstChild);
    }

    while (ImgSpaceVers.firstChild) {
        ImgSpaceVers.removeChild(ImgSpaceVers.firstChild);
    }

    var fragment = document.createDocumentFragment();
    var Img1 = document.createElement("img");
    let source = name + "Img"
    Img1.setAttribute("src", Unite.get(source));
    let height3 = 512 / Value + " px"
    Img1.style.height = height3 + " "
    Img1.setAttribute("style", "height:" + height3)
    console.log(height3)
    fragment.appendChild(Img1);

    var fragment2 = document.createDocumentFragment();
    var Img2 = document.createElement("img");
    Img2.setAttribute("src", Unite.get(name2 + "Img"));
    let height2 = 512 / ResultValue + " px"
    Img2.style.height = height2 + " "
    Img2.setAttribute("style", "height:" + height2)
    Img2.className = 'height'
        .height = { height: height2 };
    Img2.setAttribute("class", "height")

    console.log(height2)
    fragment2.appendChild(Img2);

    for (let i = 0; i < Value - 1; i++) {
        fragment.appendChild(Img1.cloneNode(true));
    }
    ImgSpaceDe.appendChild(fragment);

    for (let i = 0; i < ResultValue - 1; i++) {
        fragment2.appendChild(Img2.cloneNode(true));
    }
    ImgSpaceVers.appendChild(fragment2);
}

const InvertUnit = () => {
    let UniteDe = UnitFirstInput.value;
    let UniteVers = UnitSecondInput.value;

    UnitFirstInput.value = UniteVers;
    UnitSecondInput.value = UniteDe;
}

function ajoute() {
    let NewUnit = AddUnitInput.value;
    let NewMeter = AddMeterInput.value;
    let NewLink = AddLinkInput.value;

    console.log(NewUnit);
    console.log(NewMeter);
    console.log(NewLink);

    Unite.set(NewUnit, NewMeter);
    Unite.set(NewUnit + "Img", NewLink);

    select.options[select.options.length] = new Option(NewUnit, NewUnit);
    select2.options[select2.options.length] = new Option(NewUnit, NewUnit);

    AddUnitInput.value = "";
    AddMeterInput.value = "1";
    AddLinkInput.value = "";
}

Boutton.addEventListener("click", ConvertValue);
BoutonInvert.addEventListener("click", InvertUnit);
BoutonAdd.addEventListener("click", ajoute);

