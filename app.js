function Personne(sonNom, sonPrenom, sonAge, sonSexe){

    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.getPhrase = function (){
        return "ma personne s'appelle "+ this.nom +", "+ this.prenom +" il a "+ this.age +" ans et est de sexe "+this.sexe;
    }

    this.setNomPrenom = function (){
        this.nom = "Pete";
        this.prenom = "Matthias";
    }
}

let john = new Personne("John", "David", 24, "Homme");
let hubert = new Personne("Truko", "Hubert", 87, "Homme");

let p1 = document.getElementsByClassName("propriete1")
let p2 = document.getElementsByClassName("propriete2")
let p3 = document.getElementsByClassName("propriete3")
let p4 = document.getElementsByClassName("propriete4")

let m1 = document.getElementsByClassName("method1")
let m2 = document.getElementsByClassName("method2")

p1[0].innerHTML = john.nom
p2[0].innerHTML = john.prenom
p3[0].innerHTML = john.age
p4[0].innerHTML = john.sexe

m1[0].innerHTML = john.getPhrase();
m1[1].innerHTML = hubert.getPhrase();

john.setNomPrenom();
hubert.setNomPrenom();
m2[0].innerHTML = john.getPhrase();
m2[1].innerHTML = hubert.getPhrase();

p1[1].innerHTML = hubert.nom
p2[1].innerHTML = hubert.prenom
p3[1].innerHTML = hubert.age
p4[1].innerHTML = hubert.sexe