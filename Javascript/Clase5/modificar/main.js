const myH1$$ = document.querySelector("h1");
myH1$$.textContent="Hola, te acabo de cambiar el titulo"
const myH1Class$$ = document.querySelector(".mih1");
console.log(myH1Class$$);

myH1Class$$.innerText = "esto es el innerText";

//vamos a modificar y añadirle una clase

myH1$$.className="miNuevaClase";
console.log(myH1$$);

const myUl$$ = document.createElement("ul");
document.body.appendChild(myUl$$);

const myLi$$ = document.createElement("li");
myLi$$.textContent = "este es mi li";
myUl$$.appendChild(myLi$$);

const miDiv$$ = document.querySelector("div");
miDiv$$.innerHTML=`
<ul>
    <li class="miPrimerLi">a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
</ul>`