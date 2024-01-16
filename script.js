// // Array of strings
// var allStudent = [`Christiana`, `Tola`, `Ijinle`, `Imulemofo`, `Obaraka`]
// console.log(allStudent);

// // array of number
// var ages = [34, 87, 90, 32, 55]
// console.log(ages);

// var cart = [`Ata rodo`, `Pomo kika`, `Gino tomato`, ` Cucumber`, `Efo tete`]
// console.log(cart);

// var girlfriends = [`Pelumi`, `Gloria`, `Christiana`, `Mary`, `Janet`, `Blessings`, `Adeola`]
// // .pop'remove the only last item'
// girlfriends.pop()
// girlfriends.shift()
// girlfriends.push(`Adunni`)
// girlfriends.unshift(`Precious`)
// console.log(girlfriends);

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[0];
// console.log(fruits);

// // method can be used to add new items to an array:
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

//         //   it count from the last
// var fruits = ["orange", "cherry", "cucumber", "Mango"]
// fruits.reverse(3);
// console.log(fruits);

// var foods = ["Amala", "Eba", "Iyan", "Fufu"]
// foods.at (2);
// console.log(foods);

// var arr1 = ["Cecilie", "Joshua", ]
// var arr2 = ["Timileyin", "Burna boy"]
// var children = arr1.concat(arr2);
// console.log(arr1 + arr2);

// var fruits = ["orange", "cherry", "cucumber", "Mango"]
// fruits.fill( "banana", 2, 4)
// console.log(fruits);

// var fruits = ["orange", "cherry", "cucumber", "Mango"]
// fruits.copyWithin(2,0)
// console.log(fruits);

var cart = []
console.log(cart);


function addItems() {
    if (inp.value === '') {
        alert("fill in something now")
    } else {
        console.log(inp.value);
        cart.push(inp.value);
        document.getElementById('inp').value = ''
        console.log(cart);
        

        show.innerHTML = ""
        for (i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i + 1}.${cart[i]}</p> 
            
            <button class="btn btn-danger btn-sm" onclick="del(${i})">delete</button>
            <button class= "btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="Edit(${i})" >Edit</button>
            ` 
        }
    }
}
function del(index){
    
    cart.splice(index,1)
    displaycart()
}



function addBegin() {
    if (inp.value === '') {
        alert("fill the space")
    } else {
        cart.unshift(inp.value)
        document.getElementById('inp');
        console.log(cart);

        show.innerHTML = ""
        for ( i = 0; i < cart.length; i++) {
            show.innerHTML += `<p>${i + 1}.${cart[i]}</p>`
        }
    }
}

function deleteFisrt() {
    cart.shift()
    document.getElementById('inp').value = ''
    console.log(cart);

    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p>`
    }
}

function deleteLast() {
    cart.pop()
    document.getElementById('inp').value = ''
    console.log(cart);

    show.innerHTML = ""
    for ( i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p>`
    }
}

function deleteAny() {
    var con = prompt("delete any")
    cart.splice(con - 1, 1)
    document.getElementById('inp').value = ''
    console.log(cart);

    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p>`
    }
}

function Edit() {
    // var con = prompt("num")
    // var conf = prompt("edt")
    cart.splice(con - 1, 1, conf)
    document.getElementById('inp').value = ''
    console.log(cart);

    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p> 
        <button class="btn btn-danger btn-sm" onclick="del(${i})">delete</button>
        <button class= "btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="Edit(${i})" >Edit</button>
        
        `
    }
}

function deleteAll() {
    cart.splice(0, cart.length)
    document.getElementById('inp').value = ''
    console.log(cart);

    show.innerHTML = ""
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p>
    
        `
        
    }
}
function displaycart() {
    show.innerHTML = "";
    for (i = 0; i < cart.length; i++) {
        show.innerHTML += `<p>${i + 1}.${cart[i]}</p> 
        <button class="btn btn-danger btn-sm" onclick="del(${i})">delete</button>
        <button class= "btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="Edit(${i})" >Edit</button>
        ` ;
    }
}





// var cartoon = ['Kenny', 'Maryam', 'Pelumi', 'David', 'Christiana', 'Uthman'],

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// var itemarray = []

// function addItem() {
//     var itemobj = {
//         item: inp.value,
//         amount: inp1.value
//     }
//     itemarray.push(itemobj)
//     loady()
//     console.log(itemarray);

// }
// function loady() {
//     table.innerHTML = `
//     <tr>
//     <th>S/N</th>
//     <th>ITEM</th>
//     <th>AMOUNT</th>
//     <th>ACTIONS</th>
// </tr>
//     `
//     for (let index = 0; index < itemarray.length; index++) {
//         table.innerHTML += `
//         <tr>
//         <th>${index + 1}</th>
//         <th>${itemarray[index].item}</th>
//         <th>${itemarray[index].amount}</th>
//         <th>${itemarray[index].actions}
//         <button onclick="delety(${index})" class="btn btn-danger">Delete</button>
//         <button onclick="edity(${index})" class="btn btn-success">Edit</button>
//         </th>
//         </tr>
//         `

//     }

// }
// function delety(itemindex) {
//     itemarray.splice(itemindex, 1)
//     loady()
    
// }


