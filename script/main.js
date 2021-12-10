const menu = document.querySelectorAll('nav ul li a'),
      nav = document.querySelector('nav'),
      about = document.querySelector('#about'),
      skill = document.querySelector('#skill'),
      portfolio = document.querySelector('#portfolio'),
      connect = document.querySelector('#text');

const section = [about, skill, portfolio,connect];

const skillIcon = skill.querySelectorAll(".skill-wrap ul li a"),
      skillOpen = skill.getElementsByClassName("skill-info-wrap"),
      skillClose = skill.getElementsByClassName("close-btn"),
      skillInfo = skill.querySelectorAll('.skill-info-wrap ul li'),
      progressWrap = skill.querySelectorAll(".porgress-bar"),
      progressBar = skill.querySelectorAll(".bar"),
      progressText = skill.querySelectorAll(".rate"),
      portfolioBtn = portfolio.querySelectorAll('.portfolio-filter li'),
      portfolioSlide1 = portfolio.querySelector('.portfolio-slide'),
      portfolioSlide2 = portfolio.querySelector('.portfolio-slide2');


for(let i=0; i < skillIcon.length; ++i){
    //스킬 오픈

    skillIcon[i].addEventListener("click", function(e){
        e.preventDefault(); 
        skillOpen[0].style.height = "1000px"; 
        skillOpen[0].style.zIndex = "10";  
        setTimeout(function(){
            skillInfo[i].classList.add("show");
        },550);

    //숙련도

        let timer =  setInterval(textAnimationopen, 1000/10);

        let progressRate = progressText[i].dataset.rate;
        progressBar[i].animate({width : progressRate + "%"}, {duration: 1500, fill:'forwards'});
        function textAnimationopen(){
            let currentRate =  Math.ceil(progressBar[i].offsetWidth / progressWrap[i].offsetWidth * 100); 
            progressText[i].innerText = currentRate + "%";
            if ( currentRate == progressRate){
                clearInterval(timer);
           }
        }
    //스킬 닫기

        skillClose[0].addEventListener("click", function(){
            skillOpen[0].style.height = "0";   
            skillOpen[0].style.zIndex = "-1";
            skillInfo[i].classList.remove("show");

    //스킬 닫기 숙련도
            progressBar[i].animate({width : 0 + "%"}, {duration: 10, fill:'forwards'});
            clearInterval(timer);
        }); 
 
    });
}

//포트폴리오

portfolioBtn[0].addEventListener('click', function(){
    portfolioSlide2.style.display = 'none';
    portfolioSlide1.style.display = 'grid';
    portfolioBtn[0].style.background = '#fc6d6d';
    portfolioBtn[0].style.color = '#000';
    portfolioBtn[1].style.background = '#343F4F';
    portfolioBtn[1].style.color = '#fff';

});

portfolioBtn[1].addEventListener('click', function(){
    portfolioSlide1.style.display = 'none';
    portfolioSlide2.style.display = 'grid';
    portfolioBtn[1].style.background = '#fc6d6d';
    portfolioBtn[1].style.color = '#000';
    portfolioBtn[0].style.background = '#343F4F';
    portfolioBtn[0].style.color = '#fff';
});


//스크롤 애니메이션 변수

const aboutText1 = about.querySelector('#about h2'),
      aboutText2 = about.querySelector('#about p'),
      workList = document.querySelectorAll('.work-wrap ul li');

//스크롤 애니메이션

for(let u = 0; u < workList.length; u++){
    for(let y = 0; y < menu.length; y++){
        let LASTSCROLLTOP = 0;

window.addEventListener('scroll', function(){


        if(about.offsetTop / 2 < window.pageYOffset){
            nav.style.top = '-50px';
            nav.style.background = "#343F4F";

        let scrollTop = window.pageYOffset || document.documentElement.scrollTop; 

            if(scrollTop > LASTSCROLLTOP){
                nav.style.top = '-50px';
            }
            else{
                nav.style.top = '0';
            }
            LASTSCROLLTOP = scrollTop;
        }
        else{
           nav.style.top = '0';
           nav.style.background = "none";
        }

    if(about.offsetTop / 2  < window.pageYOffset){
        aboutText1.style.opacity = '1';
        aboutText2.style.opacity = '1';
    }
    else{
        aboutText1.style.opacity = '0';
        aboutText2.style.opacity = '0';
    }
    if(workList[u].offsetTop /1.5 < window.pageYOffset){
        workList[u].style.opacity = '1';
        workList[u].style.marginLeft = '0';
    }
    else{
        workList[u].style.opacity = '0';
        workList[u].style.marginLeft = '50%';
    }
});

 }
 
}

//메뉴 클릭시 섹션으로 이동

for(let y = 0; y < menu.length; y++){
    menu[y].addEventListener('click', function(e){
        e.preventDefault();

        const scrollInterval = setInterval(function(){
        if(section[y].offsetTop - window.pageYOffset > 55 || window.pageYOffset - section[y].offsetTop > 55){
            if(section[y].offsetTop > window.pageYOffset){
                window.scrollBy(0, 55);
            }
        }else{
            clearInterval(scrollInterval);
            section[y].offsetTop = window.pageYOffset;
        }

        },10);
        const scrollInterval2 = setInterval(function(){
            if(section[y].offsetTop - window.pageYOffset > 100 || window.pageYOffset - section[y].offsetTop > 100){
                if(section[y].offsetTop < window.pageYOffset){
                    window.scrollBy(0, -100);
                }
            }else{
                clearInterval(scrollInterval2);
                section[y].offsetTop = window.pageYOffset;
            }
    
            },1);
    });
}



//포트폴리오 라이트 박스
const dim = portfolio.querySelector('.dim');
const slides1 = portfolioSlide1.querySelectorAll('li');
const content1 = portfolio.querySelector('.dim_content');
const slides2 = portfolioSlide2.querySelectorAll('li');
const content2 = portfolio.querySelector('.dim_content2');

for(let t = 0; t < slides1.length; t++){

    slides1[t].addEventListener('click', function(e){
        e.preventDefault();
        dim.style.display = 'flex';
        content1.style.display = 'flex';
    });
}


for(let r = 0; r < slides2.length; r++){

    slides2[r].addEventListener('click', function(e){
        e.preventDefault();
        dim.style.display = 'flex';
        content2.style.display = 'flex';
    });
}


dim.addEventListener('click',function(){
    content1.style.display = 'none';
    content2.style.display = 'none';
    dim.style.display = 'none';
});


//포트폴리오 라이트 박스 컨텐츠

const lightBoxtitle = dim.querySelector('.dim-picture h3'),
      lightBoxTextTitle = dim.querySelector('.dim-text h3'),
      lightBoxTextSubTitle = dim.querySelector('.dim-text h4'),
      lightBoxTextDIs = dim.querySelector('.dim-text p'),
      lightBoxBtn = dim.querySelector('.dim-text a'),
      lightBoxImage = portfolioSlide1.querySelectorAll('li a img'),   
      DimBoxImage = dim.querySelectorAll('.dim-picture img');


//포트폴리오 1
slides1[0].addEventListener('click', function(){
    lightBoxtitle.innerHTML = '오주영 포트폴리오<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(2일), 퍼블리싱(3일)<br>2021.11.26 - 11.30';
    lightBoxTextDIs.innerHTML = '제이쿼리나 기타 라이브러리를 사용하지 않고 순수 자바스크립트를 사용한<br>반응형 포트폴리오 사이트입니다. 모든 모바일 기기 및 가로모드에 맞춰 퍼블리싱 하였습니다.';
    lightBoxBtn.href = "#";
    DimBoxImage[0].setAttribute('src',lightBoxImage[0].getAttribute('src'));

});

slides1[1].addEventListener('click', function(){
    lightBoxtitle.innerHTML = 'SYMEKOREA<br>반응형 웹사이트';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(10일), 퍼블리싱(7일)<br>2021.11.08 - 11.24';
    lightBoxTextDIs.innerHTML = '웹 퍼블리싱 국비 수료 후 처음으로 만든 웹사이트입니다.<br>제이쿼리를 사용하여 만들었으며 그 외 라이브러리는 사용하지 않았습니다.<br>디자인, 웹기획, 퍼블리싱 작업 모두 스스로 하였습니다.';
    lightBoxBtn.href = "http://www.symekorea.com";
    DimBoxImage[0].setAttribute('src',lightBoxImage[1].getAttribute('src'));
});

slides1[2].addEventListener('click', function(){
    lightBoxtitle.innerHTML = 'PHP를 이용한 반응형 심플 게시판';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(1시간), 퍼블리싱(1일)';
    lightBoxTextDIs.innerHTML = 'MYSQL 과 PHP를 이용하여 간단한 게시판을 만들었습니다. <br> 서버사이드 언어인 php를 공부하며 서버 작업 환경에서 코딩을 어떻게 해야 하는지 배울 수 있는 시간이었습니다.';
    lightBoxBtn.href = "http://codingju.dothome.co.kr/port1/index.php";
    DimBoxImage[0].setAttribute('src',lightBoxImage[2].getAttribute('src'));
});

slides1[3].addEventListener('click', function(){
    lightBoxtitle.innerHTML = 'Krish 쇼핑몰 메인페이지';
    lightBoxTextTitle.innerHTML = '제작 기간 : 디자인(12일), 퍼블리싱(5일)';
    lightBoxTextDIs.innerHTML = '웹 퍼블리싱 교육과정 중 더 배우고 싶어서 따로 공부하고 검색하여 만든 첫 홈페이지입니다. 처음으로 만든 홈페이지라 HTML 태그가 복잡하고 반응형이 아니지만 디자인에 중점을 두었습니다.';
    lightBoxBtn.href = "https://ilovecodin98.github.io/juyoung/kirsh/";
    DimBoxImage[0].setAttribute('src',lightBoxImage[3].getAttribute('src'));
});


//포트폴리오 2
const lightBoxConImage = content2.querySelector('img');
const lightBoxConHTitle = content2.querySelector('h4');
const lightBoxConP = content2.querySelector('p');
const lightBoxConBtn = content2.querySelector('a');
conImage = portfolioSlide2.querySelectorAll('li a img');

slides2[0].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '2021년 END';
    lightBoxConP.innerHTML = '2021년을 마무리하며<br>앨범 커버 형식 디자인을 만들었습니다.';
    lightBoxConBtn.href = "./pdfFiles/design1.pdf";
    lightBoxConImage.setAttribute('src',conImage[0].getAttribute('src'));
});

slides2[1].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = 'New Balance 모바일 디자인';
    lightBoxConP.innerHTML = '스포티한 컬러와 둥근 사각형의 느낌을 살린<br>New Balance 모바일 디자인입니다.<br> 국비과정 중 모바일 디자인 수업에서 디자인하였습니다.';
    lightBoxConBtn.href = "./pdfFiles/design2.pdf";
    lightBoxConImage.setAttribute('src',conImage[1].getAttribute('src'));
});

slides2[2].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '키르시 웹 디자인';
    lightBoxConP.innerHTML = '국비과정 중 처음으로 웹 디자인을 했습니다.<br> 다시 보니 부족한 점이 참 많지만 <br>처음으로 한 디자인으로 의미가 있어서 포트폴리오에 추가했습니다.';
    lightBoxConBtn.href = "./pdfFiles/design3.pdf";
    lightBoxConImage.setAttribute('src',conImage[2].getAttribute('src'));
});

slides2[3].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = 'First Food 포스터 디자인';
    lightBoxConP.innerHTML = '포토샵 능력을 향상시키고 싶어서 국비과정이 끝난 후<br>유튜브에서 영상에 따라 디자인을 한 후 조금 변경해서 디자인했습니다.';
    lightBoxConBtn.href = "./pdfFiles/design4.pdf";
    lightBoxConImage.setAttribute('src',conImage[3].getAttribute('src'));
});

slides2[4].addEventListener('click', function(){
    lightBoxConHTitle.innerHTML = '영어학원 (SYME) 웹 디자인';
    lightBoxConP.innerHTML = '처음으로 웹상에 올라갈 웹 페이지를 디자인했습니다.<br> 취미로 만드는 디자인과 클라이언트와 소통하며 만드는 작업물의 차이점을 알게 되었고<br>어떻게 디자인을 더 잘 해야 하는지 배워가는 시간이었습니다.';
    lightBoxConBtn.href = "./pdfFiles/design5.pdf";
    lightBoxConImage.setAttribute('src',conImage[4].getAttribute('src'));
});
