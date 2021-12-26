console.log("connecté !");

const form = document.getElementById("form");
// console.log(form);
const todo = document.getElementById("todo");
// console.log(todo);

// Je gère la création de la tâche (Create)
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log('bouton cliqué !');
  const todoValue = todo.value;
  //   console.log(todoValue);
  const listItems = document.querySelector(".list-items");
  console.log(listItems);

  // Je gère l'affichage de la tâche (Read)
  // Je crée l'élément
  let item = `
  <div class="item">
        <p>${todoValue}</p>
        <button class="btn-delete">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn-archive">
            <i class="fas fa-check-circle"></i>
        </button>
    </div>
  `;

  //   Je place item dans listItems
  listItems.innerHTML += item;

  // Je sélectionne et stocke l'icône Supprimer
  const btnDelete = document.querySelectorAll(".btn-delete");
  // console.log(btnDelete);

  // Je supprime la tâche
  btnDelete.forEach((i) => {
    // console.log("btn-delete");
    i.addEventListener("click", function () {
      console.log("btn-delete cliqué !");
      i.parentElement.remove();
    });
  });

  const btnArchive = document.querySelectorAll(".btn-archive");
  //   console.log(btnArchive);

  // Je check la tâche
  btnArchive.forEach((i) => {
    i.addEventListener("click", function () {
      console.log("btn-archive cliqué !");
      // Je cible l'élément parent de i
      const parent = i.parentElement;
      // J'agis sur la div parent (class item)
      parent.classList.toggle("done");
    });
  });
  // Réinitialiser le formulaire
  form.reset();
});
