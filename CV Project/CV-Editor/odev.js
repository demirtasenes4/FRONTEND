
saveBtn.addEventListener("click", click)

get()
let day="01";
let month="01";
let year="1900";

function click(){
    {
        allInput.forEach(input => {
            if(input.value != ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
            }
        })
    }
}

function setMyInformation(person){
    document.getElementById("name").innerText = person.name;
    document.getElementById("title").innerText = person.name;
    document.getElementById("date").innerText = person.name;
    document.getElementById("phone").innerText = person.name;
    document.getElementById("email").innerText = person.name;
    document.getElementById("address").innerText = person.name;
    document.getElementById("name").innerText = person.name;

    const date = new Date(person.dateOfBirth);
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    const dateString = '${day}/${month}/${year}'
    document.getElementById("dateOfBirth").innerText = dateString;
}


const firstForm = document.querySelector('.container');

const addButton = document.querySelector('.add-form');
const removeButton = document.querySelector('.remove-form');


let socialDetailCount = 0;

function addSocialDetailField(){
socialDetailCount++;

const text = `
<div class="fields" id="socialField${socialDetailCount}">
     <div class="input-field">
          <label>Title</label>
          <input type="text" placeholder="Enter your title">
      </div>
      <div class="input-field">
          <label>Link</label>
          <input type="text" placeholder="Enter your link">
      </div>
      <button class="remove-form" onclick='removeSocialField("socialField${socialDetailCount}")'>Çıkar (-)</button>
</div>`

const element = document.getElementById("social-pages");
element.innerHTML += text;
}

function removeSocialField(id){
    document.getElementById(id).remove();
}

function addExperienceField(){
socialDetailCount++;
    
const text = `
<div class="fields" id="experienceField${experienceCount}">
    <div class="input-field">
        <label>Company/School Name</label>
            <input type="text" placeholder="Enter the name of Company or School">
        </div>
        <div class="input-field">
            <label>Position/Field</label>
            <input type="text" placeholder="Enter your position or field of study">
        </div>
        <div class="input-field">
            <label>Years</label>
            <input type="text" placeholder="Enter years of position or education">
        </div>
        <div class0"input-field">
            <label>Description</label>
            <input type="text" placeholder="Enter description for this position">
        </div>
        <button class="remove-form" onclick='removeExperienceField("experienceField${experienceCount}")'>Çıkar (-)</button>
</div>`
    
const element = document.getElementById("experience-field");
element.innerHTML += text;
}
    
function removeExperienceField(id){
    document.getElementById(id).remove();
}