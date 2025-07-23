const todoInput = document.querySelector('#todo');
const todoBtn = document.querySelector('.submit');
//console.log(todoInput, todoBtn);
const list = document.querySelector('.list');
const listLi = document.querySelector('.list li');
//console.log(listLi, listLiAll, checkboxBtn, delBtn);
/* input focus 이벤트 */
todoInput.addEventListener('focus',()=>{
    todoInput.placeholder = '';
})
todoInput.addEventListener('blur',()=>{
    todoInput.placeholder = '할 일을 입력하세요.';
})
todoInput.addEventListener('mouseover',()=>{
    todoInput.title = '할 일을 입력하고 등록 버튼을 누르세요!';
})
/* 등록 이벤트 */
todoBtn.addEventListener('click',()=>{
    let li = listLi.cloneNode(true);
    //console.log('확인');
    //console.log(todoInput.value);
    if (todoInput.value != '') {
        list.appendChild(li);
        li.style.display = 'flex';
        li.children[1].textContent = todoInput.value;
        todoInput.value = '';
            /* 체크박스 이벤트 */
            const listLiAll = document.querySelectorAll('.list li');
            const checkboxBtn = document.querySelectorAll('.checkbox');
            const delBtn = document.querySelectorAll('.del');
            let check = false;
            checkboxBtn.forEach((obj,idx)=>{
                obj.addEventListener('click',()=>{
                    if (check) {
                        obj.children[0].src = './images/btn_checkbox_non.png';
                        check = false;
                        listLiAll[idx].children[1].style.textDecoration = 'none';
                    } else {
                        //console.log(obj.children[0].src);
                        obj.children[0].src = './images/btn_checkbox.png';
                        check = true;
                        //console.log(listLi[idx].children[1]);
                        listLiAll[idx].children[1].style.textDecoration = 'line-through';
                    }
                })
            })
            /* 삭제 이벤트 */
            for (let i of delBtn){
                i.addEventListener('click',()=>{
                    i.parentElement.remove();
                })
            }
    } else {
        alert('할 일을 입력해주세요.');
    }
    
})