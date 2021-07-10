
let mainColor = document.querySelector(":root");
let seasonBtn = Array.from(document.querySelectorAll('.season-btn'));
const seasonBtnShow = document.querySelector('.season-btn-show')


//계절 스위치 누름에 따라 메인 컬러 바뀌는 함수
function changeBgColor(){
    if(this === seasonBtn[0]){
        mainColor.style.setProperty('--season-color','#FF9AAE');
    }else if(this === seasonBtn[1]){
        mainColor.style.setProperty('--season-color','#80DAF0');
    }else if(this === seasonBtn[2]){
        mainColor.style.setProperty('--season-color','#D57160');
    }else{
        mainColor.style.setProperty('--season-color','#92b6cF');
    }
    //윈도우 리사이즈 되었을 시 시즌버튼의 위치가 상이해지는 것을 수정하기 위함
    //임시로 active 클래스를 만들어 해당 클래스가 붙어있는 버튼 위치로 원이 이동한다.
    seasonBtn.forEach(function(obj,index,array){
       array[index].classList.remove("active");
    });
    this.classList.add("active");
    seasonBtnShow.style.left = this.offsetLeft + "px";
}
seasonBtn.forEach(e=>e.addEventListener('click',changeBgColor));

//캐릭터 리스트 제작. 새 캐릭터가 추가될 때 마다 오브젝트를 하단에 생성하면 끝.
const characterList = [
    {
        img: "img/%ED%95%9C%EC%9A%B0%EB%A6%AC.png",
        name: "한우리",
        sex: "여",
        age: "17",
        perso: "긍정적 / 활발한 / 감정 풍부한 / 단순한",
        color: "#456325",
        country: "한국"
    },
    {
        img: "img/%EC%84%B8%EA%B2%B0.png",
        name: "세결",
        sex: "여",
        age: "18",
        perso: "화끈한 / 행동파 / 직설적 / 모험적",
        color: "#D15346",
        country: "한국"
    },
    {
        img: "img/%ED%83%80%EB%B0%80%EB%9D%BC%EC%97%90%EC%9D%B4%EC%A0%A0.png",
        name: "타밀라 에이젠",
        sex: "남",
        age: "17",
        perso: "둔한 / 직설적 / 냉정한 / 단순한",
        color: "#EDF9F9",
        country: "미국"
    },
    {
        img: "img/%EA%B0%95%EC%A7%80%ED%98%B8.png",
        name: "강지호",
        sex: "여",
        age: "25",
        perso: "시끄러운 / 행동파 / 붙임성 좋은",
        color: "#7C3535",
        country: "한국"
    },
    {
        img: "img/%ED%94%8C%EB%A6%AC%EC%96%B4%EB%B8%8C%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8.png",
        name: "플리어 브라이언트",
        sex: "남",
        age: "16",
        perso: "쾌활한 / 용감한 / 활동적 / 다정다감",
        color: "#ABD8DE",
        country: "영국"
    },
    {
        img: "img/류가연.png",
        name: "류가연",
        sex: "여",
        age: "18",
        perso: "개인주의 / 직설적 / 나르시즘 / 당돌한",
        color: "#F8C3B5",
        country: "한국"
    },
    {
        img: "img/모리에이치.png",
        name: "모리 에이치",
        sex: "남",
        age: "17",
        perso: "차분한 / 솔직한 / 겁쟁이",
        color: "#F2DDCC",
        country: "일본"
    },
    {
        img: "img/신해리.png",
        name: "신해리",
        sex: "여",
        age: "23",
        perso: "까칠한 / 단호함 / 다혈질 / 비활동적",
        color: "#323232",
        country: "한국"
    },
    {
        img: "img/이제이.png",
        name: "이제이",
        sex: "여",
        age: "27",
        perso: "침착함 / 솔직함 / 이타적 / 당당한",
        color: "#FFFFFF",
        country: "한국"
    },
    {
        img: "img/야나밀러.png",
        name: "야나밀러",
        sex: "여",
        age: "21",
        perso: "쾌활한 / 천방지축 / 외향형",
        color: "#FACBAD",
        country: "???"
    },
    {
        img: "img/이시아이토키오.png",
        name: "이시아이 토키오",
        sex: "남",
        age: "19",
        perso: "단순한 / 겉멋든 / 쾌활한",
        color: "#FFFFFF",
        country: "일본"
    },
    {
        img: "img/이하연.png",
        name: "이하연",
        sex: "여",
        age: "18",
        perso: "여유로운 / 덤벙대는 / 다정한",
        color: "#D5D9CF",
        country: "한국"
    },
    {
        img: "img/진랑.png",
        name: "진랑",
        sex: "남",
        age: "21",
        perso: "소극적 / 예민함 / 부정적",
        color: "#000000",
        country: "한국"
    },
    {
        img: "img/김강구.png",
        name: "김강구",
        sex: "남",
        age: "26",
        perso: "내향적 / 조용한 / 겁많은",
        color: "#D6DDE5",
        country: "한국"
    },
    {
        img: "img/김한결.png",
        name: "김한결",
        sex: "남",
        age: "27",
        perso: "성실한 / 이타적 / 겁많은",
        color: "#E4DDCA",
        country: "한국"
    },
    {
        img: "img/나이솔.png",
        name: "나이솔",
        sex: "여",
        age: "28",
        perso: "조용한 / 순응적 / 선이 있는",
        color: "#453D4A",
        country: "한국"
    },
    {
        img: "img/도은수.png",
        name: "도은수",
        sex: "여",
        age: "20",
        perso: "거만함 / 오만함 / 여유로운",
        color: "#FFE5A1",
        country: "한국"
    },
    {
        img: "img/배정은.png",
        name: "배정은",
        sex: "여",
        age: "37",
        perso: "상냥한 / 침착한 / 배려있는",
        color: "#F1E9D2",
        country: "한국"
    },
    {
        img: "img/오리하시라이지.png",
        name: "오리하시 라이지",
        sex: "남",
        age: "28",
        perso: "여유로운 / 눈치빠른 / 느긋함",
        color: "#FFFFFF",
        country: "일본"
    },
    {
        img: "img/차택수.png",
        name: "차택수",
        sex: "남",
        age: "28",
        perso: "살가운 / 활동적 / 부지런한",
        color: "#000000",
        country: "한국"
    },
    {
        img: "img/카미즈키사호.png",
        name: "카미즈키 사호",
        sex: "여",
        age: "???",
        perso: "???",
        color: "#FE585A",
        country: "일본"
    },
    {
        img: "img/클라레트다비드.png",
        name: "클라레트 다비드",
        sex: "여",
        age: "23",
        perso: "뻔뻔함 / 재간꾼 / 장난스러운",
        color: "#E3C3AA",
        country: "프랑스"
    },
    {
        img: "img/페이드리스콜.png",
        name: "페이 드리스콜",
        sex: "여",
        age: "???",
        perso: "조용한 / 침착한 / 소심함",
        color: "#FFF2D3",
        country: "영국"
    },
    {
        img: "img/하츠카제유에.png",
        name: "하츠카제 유에",
        sex: "여",
        age: "19",
        perso: "이타적 / 과묵함 / 신중한",
        color: "#FAF8EC",
        country: "일본"
    },
    {
        img: "img/현희.png",
        name: "현희",
        sex: "여",
        age: "28",
        perso: "활동적 / 거침없는 / 기센",
        color: "#000000",
        country: "한국"
    },
    {
        img: "img/호시미야신.png",
        name: "호시미야 신",
        sex: "여",
        age: "17",
        perso: "위풍당당 / 직설적인 / 뻔뻔한",
        color: "#CCA782",
        country: "일본"
    }
]

let putIn ="";

//화면에 캐릭터 리스트 카드를 만드는 함수 백틱활용
function makeCard(){
    putIn="";
    characterList.forEach(function (obj,index,list){
    const characterCard = document.querySelector("#character-list");
        putIn += `<div class="character-card">
                   <!--사진-->
                    <div class="character-img">
                       <img src=${list[index].img} alt="캐릭터 얼굴">
                    </div>
                    <!--기본 프로필-->
                    <div class="character-profile">
                       <!--이름,성별,나이 부분-->
                        <div class="profile-up">
                            <p class="cha-name">${list[index].name}</p>
                            <p class="cha-sex">${list[index].sex}</p>
                            <p class="cha-age">${list[index].age}세</p>
                        </div>

                        <!--성격,컬러 부분-->
                        <p class="cha-perso">성격: ${list[index].perso}</p>
                        <p class="cha-color">main color : <span style="color: ${list[index].color}">${list[index].color}</span></p>

                    </div>
                    <!--국적-->
                    <div class="character-country">
                        <p>${list[index].country}</p>
                    </div>
                </div>`;
        characterCard.innerHTML = putIn;
    });
}

//각 버튼별 오름/내림차순 확인 변수 
let nameAcs = true;
let ageAcs = true;
let sexAcs = true;
let countryAcs = true;

const orderBtnArray = Array.from(document.querySelectorAll(".order-btn"));

//정렬 함수
function listReOrder(){
    //버튼 색상 초기화
    orderBtnArray.forEach(function(obj,index,array){
        array[index].style.backgroundColor = "rgba(255,255,255,0.6)"
    });
    //클릭한 버튼의 색상을 하얀색으로
    //현재 선택한 버튼을 시각적으로 보여주기 위함
    this.style.backgroundColor = "#fff"
    
    if(this.dataset.order === "name"){
        //클릭한 버튼이 이름일 경우
        if(nameAcs===true){
            //현재 오름차순이니 내림차순으로 바꿔야 함
            this.value = "이름▼";
            nameAcs=false;
            characterList.sort(function(a,b){
                if(a.name>b.name){
                    return 1;
                }else{
                    return -1;
                }
            });
        }else{
            //현재 내림차순이니 오름차순으로 바꿔야 함
            this.value = "이름▲";
            nameAcs=true;
            characterList.sort(function(a,b){
                if(a.name>b.name){
                    return -1;
                }else{
                    return 1;
                }
            });
        }
    }else if(this.dataset.order === "age"){
        //클릭한 버튼이 나이일 경우
        if(ageAcs===true){
            this.value = "나이▼";
            ageAcs=false;
            characterList.sort(function(a,b){
                if(a.age>b.age){
                    return 1;
                }else{
                    return -1;
                }
            });
        }else{
            this.value = "나이▲";
            ageAcs=true;
            characterList.sort(function(a,b){
                if(a.age>b.age){
                    return -1;
                }else{
                    return 1;
                }
            });
        }
    }else if(this.dataset.order === "sex"){
        //클릭한 버튼이 성별일 경우
        if(sexAcs===true){
            this.value = "성별▼";
            sexAcs=false;
            characterList.sort(function(a,b){
                if(a.sex>b.sex){
                    return 1;
                }else{
                    return -1;
                }
            });
        }else{
            this.value = "성별▲";
            sexAcs=true;
            characterList.sort(function(a,b){
                if(a.sex>b.sex){
                    return -1;
                }else{
                    return 1;
                }
            });
        }
    }else if(this.dataset.order === "country"){
        //클릭한 버튼이 국적일 경우
        if(countryAcs===true){
            this.value = "국적▼";
            countryAcs=false;
            characterList.sort(function(a,b){
                if(a.country>b.country){
                    return 1;
                }else{
                    return -1;
                }
            });
        }else{
            this.value = "국적▲";
            countryAcs=true;
            characterList.sort(function(a,b){
                if(a.country>b.country){
                    return -1;
                }else{
                    return 1;
                }
            });
        }
    }
    makeCard();
}

//각 정렬 버튼 클릭 시 함수 호출
orderBtnArray.forEach(e=>e.addEventListener('click',listReOrder));

//화면 로드 시, 캐릭터 카드 제작 함수 호출
window.addEventListener('load',makeCard);

//윈도우 리사이즈 되었을 시 상단 시즌버튼의 위치가 상이해지는 것을 수정하기 위함
window.addEventListener('resize',()=>{
    seasonBtn.forEach(function(obj,index,array){
       if(array[index].classList == "season-btn active"){
           seasonBtnShow.style.left = array[index].offsetLeft + "px";
       }
    });
});


//눈내리는 효과
const maxSnow = 150;   
let snowList = document.querySelector(".snowlist");
let putSnowIn = "";
let count = 1;

let randomDuration =  new Uint32Array(maxSnow);
let randomDelay =  new Uint16Array(maxSnow);
let randomLeft =  new Uint8Array(maxSnow);
let randomSize =  new Uint16Array(maxSnow);

let testLeft = new Array(maxSnow);

window.crypto.getRandomValues(randomDuration);
window.crypto.getRandomValues(randomDelay);
window.crypto.getRandomValues(randomLeft);
window.crypto.getRandomValues(randomSize);

for (let i = 0; i < maxSnow; i++) {
    randomDuration[i] = (randomDuration[i]/300000000+7);
    randomDelay[i] = (randomDelay[i]/10000);
    testLeft[i] = Math.round((randomLeft[i]*6) /window.screen.width * 100);
    randomSize[i] = (randomSize[i]/10000)+3;
    console.log(randomDuration[i])
}

function letItSnow(){
    putSnowIn=""
    for(let i = 0; i < maxSnow; i++){
        putSnowIn +=
            `<div class="snow" style="
animation-duration:${randomDuration[i]}s;
animation-delay:${randomDelay[i]}s;
left:${testLeft[i]}%;
top:-50px;
width:${randomSize[i]}px;
height:${randomSize[i]}px">
    </div>`
        snowList.innerHTML = putSnowIn;
    }

}

window.addEventListener('load',letItSnow);










