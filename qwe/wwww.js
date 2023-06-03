
//아이디 및 비밀번호 input 미입력시 창으로 못넘어감
document.getElementById('send').addEventListener('click', function(e) {
    let loginID = document.getElementById('email').value;
    let loginPW = document.getElementById('pw').value;
    
    // const id = "id값" 
    // localStorage.setItem("id",id) <이걸 쓰면 로컬 호스트에 저장됨



    
    if (loginID === '') {
        alert('아이디를 입력해주세요.');
        e.preventDefault();
    } else if (loginPW === '') {
        alert('비밀번호를 입력해주세요.');
        e.preventDefault();
    } else if (loginPW.length < 7) {
        alert('6자리 이상으로 입력해주세요.');
        e.preventDefault();
    } else if (/\S+@\S+\S+/.test(loginID)){
        alert('이메일 형식이 아님')
    }
});


// /\S+@\S+\.\S+/.test('aaa@bbb.ccc')
// document.getElementById('emali').addEventListener('input', function(){

// })



// function login(){
//     let id = document.querySelector('#email');
//     let pw = document.querySelector('#pw');

//     if(id.value =="" || pw.value == ""){
//         alert("로그인을 할 수 없습니다.")
//     } else{location.href ='success.html'}
// }
// function back(){
//     history.go(-1)
// }
// function create_id(){
//     let id = document.querySelector('#email');
//     let pw = document.querySelector('#pw');
//     let r_pw = document.querySelector('#r_pw')

//     if(id.value == "" || pw.value == ""||r_pw.value==""){
//         alert("회원가입을 할 수 없습니다")
//     } else {
//         if(pw.value !== r_pw.value){
//             alert("비밀번호를 확인해주세요")
//         } else{
//             location.href = 'qqqq.html'
//         }
//     }
// }
