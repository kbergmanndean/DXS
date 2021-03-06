/*----------------------------------------------------------------------------------------------------------------
 General Notes
 
 * For all exercises, please prefer readability/expressiveness over maximum algorithmic efficiency.
 
 * You may add any other code such as functions, data structures, etc. that you may want in order to better complete
 an exercise, beyond what is explicitly asked for. Feel free to reuse code for multiple exercises as well.
-----------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------
1) Create a function that takes an array of integers as its lone argument and returns an array containing
 the square of each value in the input.
 
 For example, an input of `[2, 4, 6, 8, 10]` should result in an output of `[4, 16, 36, 64, 100]`.
-----------------------------------------------------------------------------------------------------------------*/
function square(arr){
  return arr.map((item)=>item*item)
}

/*----------------------------------------------------------------------------------------------------------------
 2) Create a function that takes an array of counter objects (see example) as its lone argument and returns
 the sum of all of the counters' `count` properties.
 
 For example, an input of `[{count: 1}, {count: 2}, {count: 3}]` should result in an output of `6`.
-----------------------------------------------------------------------------------------------------------------*/
function count(arr){
  let sum=0
  arr.forEach(item=>sum+=item.count)
  return sum
}


/*----------------------------------------------------------------------------------------------------------------
 3) Create a function that takes an object in the general shape of `movies` (see below) as the first argument,
 and the name of an actor as the second argument. The function should return an object that is equivalent to
 the input, only with the given actor's name included in each movie's `actors` array. If the name is already
 present, it should not be added again. The function should not mutate the input object, or any of its sub-structures.
 
 Note: `movies` is just an example, the function should not assume that the movies in the object will be hard-coded.
-----------------------------------------------------------------------------------------------------------------*/
const movies = {
 theGoonies : {
   actors: [
     "Josh Brolin",
     "Corey Feldman",
     "Kerri Green",
   ],
 },
  
 momento : {
   actors: [
     "Guy Pearce",
     "Carrie-Anne Moss",
   ],
 },
}

function addTo(object,name){
  for (const prop in object){
    if (!object[prop]['actors'].includes(name)){
  const arr=[name,...object[prop]['actors']]
  return arr
    }
  }
}

/*----------------------------------------------------------------------------------------------------------------
 4) Create a procedure that takes an object in the general shape of `movies` as its lone argument and appends
 an unordered list of every actor's name to the DOM's `body` element.
 
 The names in the list should be unique (no actor's name should appear in the list more than once).
 If the list element already exists in the DOM, the procedure should replace the existing list with a new one.
 
 Bonus points if the names are alphabetically sorted :)
-----------------------------------------------------------------------------------------------------------------*/
function appendNames(object) {
    const ul = document.createElement("ul");
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(ul);
    let arrayFinal = [];
    Object.keys(object).forEach((key) => {
      const actors = object[key]["actors"];
      actors.forEach(actor=>
        arrayFinal.push(actor)
      )}
    );
    const set = [...new Set(arrayFinal)];
    set.sort().map((actor) => {
      const li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = actor;
      return set;
    });
  }

/*----------------------------------------------------------------------------------------------------------------
5) Create a procedure that retrieves the data from the REST API endpoint hosted here: https://jsonplaceholder.typicode.com/posts.
The procedure should then log the id of the first post with a userId of 7 and a title that begins with the letter "e"
(or undefined if it does not exist). It should also log any potential retrieval errors using `console.error`.
-----------------------------------------------------------------------------------------------------------------*/

function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const seven = data.find((item) => {
          if (!(item["title"][0] === "e" && item["userId"] === 7)) {
            return undefined;
          } else {
            return item["userId"] === 7 && item["title"][0] === "e";
          }
        });
        console.log(seven.id);
      })
      .catch((error) => console.error(error));
  }

