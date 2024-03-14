// window.onload = function () {
//   let existing = getData();
//   view(existing);
// };

let id = document.getElementById('id');
let name = document.getElementById("name");
let email = document.getElementById("email");
let contact = document.getElementById("contact");
let age = document.getElementById("age");
let std = document.getElementById("std");
let dob = document.getElementById("dob");

let editForm = false;
let index;

const view = (existing) => {
  document.getElementById('form').innerHTML = "";
  if (existing.length > 0) {
    existing.forEach((todo) => {
      document.getElementById('form').innerHTML += `
      <div class="col-4  p-2 ">
      
      <div class="p-4 bg-light text-dark border-1 card">
      <p>Id : ${todo.id}</p>
      <p>Name : ${todo.name}</p>
      <p>Email : ${todo.email}</p>
      <p>Contact : ${todo.contact}</p>
      <p>Age : ${todo.age}</p>
      <p>Standard : ${todo.std}</p>
      <p>Date of Birth : ${todo.dob}</p>
      <div class="d-flex flex-wrap-wrap p-2">
            <div class="p-2"><button onclick="edit(${todo.id})" class="rounded-2 btn btn-dark button ">Edit</button></div>
            <div class="p-2"><button onclick="remove(${todo.id})" class="rounded-2 btn btn-dark button">Remove</button></div>
            <div class="p-2"><button onclick="select(${todo.id})" class="rounded-2 btn btn-dark button">select</button></div>
            </div>
            </div>
            
            </div>
            `;
    });
  } else {
    document.getElementById('form').innerHTML = "No Data Found!!";
  }
}


const getData = () => {
  return JSON.parse(localStorage.getItem('myTodos')) || []
}

let existing = getData();
view(existing);
//   let count = parseInt(localStorage.getItem('select')) || 0;

// const select = (id) => {
//   let existing = getData();
//   let selected = existing.find(data => data.id == id);
//   //selectData is array
//   // let selectData = selected;
//   localStorage.setItem("selected", JSON.stringify(selected));
//   count++;
//   let selectData = JSON.parse(localStorage.getItem('selected')) || [];

//   console.log(selectData,count, "hjgfkj");
//   // selectData.push(selected);   
//   // localStorage.setItem("selected", JSON.stringify(selectData));  
//   // selectview(selectData);
// }
// const selectview = (selectedData) => {
 
//   // let count = selectedData.length || 0;
//   document.getElementById('select').innerHTML = count;
//   // let selectData = JSON.parse(localStorage.getItem('selected')) || [];
  
//   let selectItem = selectedData.map(data => data.name).join(' || ');
//   let showElement = document.getElementById('show');
  
//   showElement.innerHTML = '';
//   showElement.innerHTML += `<p class="d-block">${selectItem}</br></p>`;
// }

// selectview(id);
// const selectDelete = (id) => {
//   let selectData = getCount();
//   let index = selectData.findIndex(data => data.id == id);
  
//   if (index != -1) {
//     selectData.splice(index, 1);
//     localStorage.setItem('selected', JSON.stringify(selectData));
//     selectview(selectData);
//   }
// }


// let count = parseInt(localStorage.getItem('select')) || 0;
// const select = (id) => {

//   let existing = getData();
//   let selected = existing.find(data => data.id == id);
//   let selectData = JSON.parse(localStorage.getItem('selected')) || [];
//   selectData.push(selected);
//   localStorage.setItem("selected", JSON.stringify(selectData));
//   count++;
//   localStorage.setItem('select', count);
//   // document.getElementById('select').innerHTML= count;

//   selectview();

// }


// const getCount = () => {
//  return JSON.parse(localStorage.getItem('selected')) || [];
// }

// let selectedData = getCount();   

// const select = (id) => {
//   let existing = getData();
//   let selected = existing.find(data => data.id == id);
//   let selectData = JSON.parse(localStorage.getItem("selected")) || [];
//   selectData.push(selected);
//   localStorage.setItem("selected", JSON.stringify(selectData));  
//   selectview(selectData);
// }

// //  selectview(selectedData);
// const selectDelete = (id) => {
//   let selectData = getCount();
//   let index = selectData.findIndex(data => data.id == id);
  
//   if (index != -1) {
//     selectData.splice(index, 1);
//     localStorage.setItem('selected', JSON.stringify(selectData));
//     selectview(selectData);
//   }
// }

// const selectview = (selectedData) => {
//   let count = selectedData.length || 0;
//   document.getElementById('select').innerHTML = count;
  
//   let selectItem = selectedData.map(data => data.name).join(' || ');
//   let showElement = document.getElementById('show');
  
//   showElement.innerHTML = '';
//   showElement.innerHTML += `<p class="d-block">${selectItem}</br></p>`;
// }



const getCount = () => {
  const storedData = JSON.parse(localStorage.getItem('selected'));
  return Array.isArray(storedData) ? storedData : [];
}

let selectedData = getCount();
// selectview(selectedData);


const select = (id) => {
  let existing = getData();
  let selected = existing.find(data => data.id == id);
  let selectData = JSON.parse(localStorage.getItem("selected")) || [];
  if (!Array.isArray(selectData)) {
    selectData = [];
}
  selectData.push(selected);
  localStorage.setItem("selected", JSON.stringify(selectData));  
  selectview(selectData);
}

const selectDelete = (id) => {
  let selectData = getCount();
  let index = selectData.findIndex(data => data.id == id);
  
  if (index != -1) {
    selectData.splice(index, 1);
    localStorage.setItem('selected', JSON.stringify(selectData));
    selectview(selectData);
  }
}

const selectview = (selectedData) => {
  let count = selectedData.length || 0;
  document.getElementById('select').innerHTML = count;
  
  let selectItem = selectedData.map(data => data.name).join(' || ');
  let showElement = document.getElementById('show');
  
  showElement.innerHTML = '';
  showElement.innerHTML += `<p class="d-block">${selectItem}</br></p>`;
}

selectview(selectedData);
view(existing);


function clearform() {
  name.value = '';
  email.value = '';
  contact.value = '';
  age.value = '';
  std.value = '';
  dob.value = '';
}

let edit = (id) => {
  let existing = getData();
  let formdataEdit = existing.find(data => data.id == id);
  console.log(formdataEdit);
  name.value = formdataEdit.name;
  email.value = formdataEdit.email;
  contact.value = formdataEdit.contact;
  age.value = formdataEdit.age;
  std.value = formdataEdit.std;
  dob.value = formdataEdit.dob;

  existing.splice(id, 1);

  editForm = true;
  index = id;
}

const submitForm = () => {
  let existing = getData();
  console.log(existing);

  event.preventDefault();

  if (!editForm) {
    var formData = {
      name: name.value,
      email: email.value,
      contact: contact.value,
      age: age.value,
      std: std.value,
      dob: dob.value,
      id: existing.length > 0 ? existing[existing.length - 1].id + 1 : 1,
    };

    existing.push(formData);
  } else {
    existing = getData();

    let newData = existing.map((data) => {
      console.log("a", data);
      if (data.id == index) {
        return {
          name: name.value,
          email: email.value,
          contact: contact.value,
          age: age.value,
          std: std.value,
          dob: dob.value,
          id: data.id
        };
      } else {
        return data;
      }
    });
    editForm = false;
    // console.log(newData);
    existing = newData;
  }
  localStorage.setItem('myTodos', JSON.stringify(existing));
  existing = getData();
  clearform();
  view(existing);

}

let remove = (id) => {
  let existing = getData();

  let index = existing.findIndex(data => data.id == id);

  if (index !== -1) {
    existing.splice(index, 1);
    localStorage.setItem("myTodos", JSON.stringify(existing));
    existing = getData();
    view(existing);

    console.log(id);
    selectDelete(id);

  }

}


