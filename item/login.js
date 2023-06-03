const check_1 = document.querySelector("#login1");
const check_id = check_1.querySelector("#loginId");
const check_2 = document.querySelector("#login2");
const check_password = check_2.querySelector("#loginPassword");
const loginBtn = document.querySelector("#loginbtn");
const clearBtn = document.querySelector("#clearbtn");
const joinBtn = document.querySelector("#inbtn"); // 추가: "저장" 버튼

function CheckValue() {
    const ID = check_id.value;
    const PASSWORD = check_password.value;
    if (localStorage.getItem(ID) === PASSWORD) {
        alert("SUCCESS");
    } else {
        alert("WRONG");
    }
    // ID와 PASSWORD를 로컬 스토리지에 저장
    localStorage.setItem(ID, PASSWORD);
}

function clearLocal() {
    localStorage.clear();
}

function joinValue() {
    const ID = document.querySelector("#id").value;
    const PASSWORD = document.querySelector("#Password").value;
    // ID와 PASSWORD를 로컬 스토리지에 저장
    localStorage.setItem(ID, PASSWORD);
}

function init() {
    loginBtn.addEventListener("click", CheckValue);
    clearBtn.addEventListener("click", clearLocal);
    joinBtn.addEventListener("click", joinValue); // 추가: "저장" 버튼
}

init();