function addtodo() {
const inputElement=document.querySelector('input');
const value= inputElement.value;
const todocontainer=document.createElement('div')
todocontainer.className='flex justify-between items-center';

const todolist=document.createElement('h4');
todolist.textContent=value;

const dotobtn= document .createElement('button')
dotobtn.className='bg-green-500 p-3 rounded-lg';
dotobtn.textContent='Done';

 todocontainer.appendChild(todolist);
 todocontainer.appendChild(dotobtn);

 const Alltodocontainer= document. querySelector('#todocontainer');
 Alltodocontainer.appendChild(todocontainer);
 inputElement.value="";
}
