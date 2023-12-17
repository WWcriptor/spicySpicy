let windowWidth;
let windowHeight;

let scrollY =0;
let relativeScrollY =0;
let totalScrollHeight =0;
let currentScene =0;

let prevDuration =0;
let pixelDuration =0;

let aniKeyFrames=[
    {//start out
        aniVal:{
            opacity:[1,0],
        }
    },
    {//떡볶이 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//떡볶이 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[900,4000],
            years:[1953,1983],
            marks:[0,-16.22]
        }
    },
    {//고추 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//고추 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4000,1300],
            years:[1983,1986],
            marks:[-16.22,-2.09]
        }
    },
    {//신라면 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//신라면 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[1300,2300],
            years:[1986,1997],
            marks:[-2.09,-7.33]
        }
    },
    {//짬뽕 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//짬뽕 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[2300,2000],
            years:[1997,1999],
            marks:[-7.33,-5.76]
        }
    },
    {//신전 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//신전 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[2000,4000],
            years:[1999,2002],
            marks:[-5.76,-16.22]
        }
    },
    {//엽떡 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//엽떡 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4000,4404],
            years:[2002,2012],
            marks:[-16.22,-18.34]
        }
    },
    {//불닭 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//불닭 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4404,5000],
            years:[2012,2013],
            marks:[-18.34,-21.46]
        }
    },
    {//마라 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//마라 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[5000,8706],
            years:[2013,2017],
            marks:[-21.46,-40.85]
        }
    },
    {//핵물닭 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//핵불닭 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
        }
    },
     {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    }
]

let aniKeyFrames2=[
    {//start out
        aniVal:{
            opacity:[1,0],
            opacity2:[0,1]
        }
    },
    {//떡볶이 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//떡볶이 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[900,4000],
            years:[1953,1983],
            marks:[0,-32.44]
        }
    },
    {//고추 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//고추 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4000,1300],
            years:[1983,1986],
            marks:[-32.44,-4.18]
        }
    },
    {//신라면 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//신라면 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[1300,2300],
            years:[1986,1997],
            marks:[-4.18,-14.66]
        }
    },
    {//짬뽕 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//짬뽕 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[2300,2000],
            years:[1997,1999],
            marks:[-14.66,-11.52]
        }
    },
    {//신전 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//신전 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[2000,4000],
            years:[1999,2002],
            marks:[-11.52,-32.44]
        }
    },
    {//엽떡 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//엽떡 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4000,4404],
            years:[2002,2012],
            marks:[-32.44,-36.68]
        }
    },
    {//불닭 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//불닭 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[4404,5000],
            years:[2012,2013],
            marks:[-36.68,-42.92]
        }
    },
    {//마라 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//마라 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
            scoville:[5000,8706],
            years:[2013,2017],
            marks:[-42.92,-81.70]
        }
    },
    {//핵물닭 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//핵불닭 out
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0],
        }
    },
    {//아웃트로 in
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    },
    {//더미
        aniVal:{
            opacity:[0,1],
            opacity2:[1,0]
        }
    }
]

let elbody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    
    scrollY = window.pageYOffset;
    //console.log(scrollY);

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }
    if(scrollY > pixelDuration + prevDuration)
    {
        prevDuration += pixelDuration;
        currentScene++;
    }
    else if(scrollY < prevDuration)
    {
        currentScene--;
        prevDuration -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDuration;
    if(windowWidth>600){
        render(currentScene);
    }
    else{
        render2(currentScene);
    }
    //console.log(currentScene);
}

function resizeHandler()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    
    totalScrollHeight =0;
    pixelDuration = windowHeight *0.5;

    for(let i=0; i<aniKeyFrames.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }

    totalScrollHeight += windowHeight;

    elbody.style.height = totalScrollHeight + 'px';
    
}

function render(nowState)
{
    let targetElem = document.querySelectorAll('.container');
    let targetBack = document.querySelectorAll('.left');
    let year = document.querySelector('.year');
    let targetYear = year.querySelector('p');
    let scov = document.querySelector('.scoville');
    let tri = document.querySelector('.triangle');
    let bg = document.getElementById('redBack');
    let grid =document.querySelector('.grid');
    let white = document.querySelectorAll('.bgWhite');

    switch(nowState)
    {
        case 1:{
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            scrollAniElem[0].style.opacity=1;
            bg.style.backgroundColor='rgba(255,19,0,1)';
        }break;
        case 2 :{
            let opacityVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[0].aniVal.opacity);

            targetBack[0].style.opacity=1;
            bg.style.backgroundColor='rgba(255, 19, 0,' + opacityVal +')';
            scrollAniElem[0].style.opacity = opacityVal;

        }break;
        case 3 :{
            let scrollAniElem0 = targetElem[0].querySelectorAll('.sa');
            bg.style.backgroundColor='rgba(255,19,0,0)';
            scrollAniElem0[0].style.opacity=0;
            white[0].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '900SHU';
            targetYear.textContent = '1953';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[1].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[1].aniVal.opacity2);
            
            year.style.opacity=opacityVal;
            tri.style.opacity=opacityVal;
            scov.style.opacity=opacityVal;
            grid.style.opacity=opacityVal;
            targetBack[0].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 4 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[2].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[2].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[2].aniVal.years);
            triVal = calcAni(aniKeyFrames[2].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[2].aniVal.scoville);

            year.style.opacity=1;
            tri.style.opacity=1;
            scov.style.opacity=1;
            grid.style.opacity=1;
            targetBack[0].style.opacity = 0;
            targetBack[1].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[0].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 5 :{
            let scrollAniElem0 = targetElem[1].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity =0;
            white[0].style.backgroundColor='rgba(255,255,255,0)';
            white[1].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '4000SHU';
            targetYear.textContent = '1983';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[3].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[3].aniVal.opacity2);
            
            targetBack[1].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 6 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[4].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[4].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[4].aniVal.years);
            triVal = calcAni(aniKeyFrames[4].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[4].aniVal.scoville);

            targetBack[1].style.opacity = 0;
            targetBack[2].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[1].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 7 :{
            let scrollAniElem0 = targetElem[2].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[1].style.backgroundColor='rgba(255,255,255,0)';
            white[2].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '1300SHU';
            targetYear.textContent = '1986';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[5].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[5].aniVal.opacity2);
            
            targetBack[2].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 8 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[6].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[6].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[6].aniVal.years);
            triVal = calcAni(aniKeyFrames[6].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[6].aniVal.scoville);

            targetBack[2].style.opacity = 0;
            targetBack[3].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[2].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 9 :{
            let scrollAniElem0 = targetElem[3].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity = 0;
            scrollAniElem0[2].style.opacity = 0;
            white[2].style.backgroundColor='rgba(255,255,255,0)';
            white[3].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '2300SHU';
            targetYear.textContent = '1997';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[7].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[7].aniVal.opacity2);
            
            targetBack[3].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 10 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[8].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[8].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[8].aniVal.years);
            triVal = calcAni(aniKeyFrames[8].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[8].aniVal.scoville);

            targetBack[3].style.opacity = 0;
            targetBack[4].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[3].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 11 :{
            let scrollAniElem0 = targetElem[4].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[3].style.backgroundColor='rgba(255,255,255,0)';
            white[4].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '2000SHU';
            targetYear.textContent = '1999';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[9].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[9].aniVal.opacity2);
            
            targetBack[4].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 12 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[10].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[10].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[10].aniVal.years);
            triVal = calcAni(aniKeyFrames[10].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[10].aniVal.scoville);

            targetBack[4].style.opacity = 0;
            targetBack[5].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[4].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 13 :{
            let scrollAniElem0 = targetElem[5].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[4].style.backgroundColor='rgba(255,255,255,0)';
            white[5].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '4000SHU';
            targetYear.textContent = '2002';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[11].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[11].aniVal.opacity2);
            
            targetBack[5].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 14 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[12].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[12].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[12].aniVal.years);
            triVal = calcAni(aniKeyFrames[12].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[12].aniVal.scoville);

            targetBack[5].style.opacity = 0;
            targetBack[6].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[5].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 15 :{
            let scrollAniElem0 = targetElem[6].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[5].style.backgroundColor='rgba(255,255,255,0)';
            white[6].style.backgroundColor='rgba(255,255,255,1)';
            
            scov.textContent = '4404SHU';
            targetYear.textContent = '2012';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[13].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[13].aniVal.opacity2);
            
            targetBack[6].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 16 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[14].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[14].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[14].aniVal.years);
            triVal = calcAni(aniKeyFrames[14].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[14].aniVal.scoville);

            targetBack[6].style.opacity = 0;
            targetBack[7].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[6].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 17 :{
            let scrollAniElem0 = targetElem[7].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[6].style.backgroundColor='rgba(255,255,255,0)';
            white[7].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '5000SHU';
            targetYear.textContent = '2013';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[15].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[15].aniVal.opacity2);
            
            targetBack[7].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 18 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[16].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[16].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames[16].aniVal.years);
            triVal = calcAni(aniKeyFrames[16].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames[16].aniVal.scoville);

            targetBack[7].style.opacity = 0;
            targetBack[8].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[7].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 19 :{
            let scrollAniElem0 = targetElem[8].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[7].style.backgroundColor='rgba(255,255,255,0)';
            white[8].style.backgroundColor='rgba(255,255,255,1)';
            targetBack[9].style.opacity=1;

            scov.textContent = '8706SHU';
            targetYear.textContent = '2017';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[17].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[17].aniVal.opacity2);
            
            targetBack[8].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
            tri.style.opacity=1;
            scov.style.opacity=1;
            grid.style.opacity=1;
            year.style.opacity=1;
        }break;
        case 22:{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames[18].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames[18].aniVal.opacity2);

            targetBack[8].style.opacity = 0;
            targetBack[9].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            tri.style.opacity=opacityVal2;
            scov.style.opacity=opacityVal2;
            grid.style.opacity=opacityVal2;
            year.style.opacity=opacityVal2;
            white[8].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;
            targetBack[9].style.opacity = opacityVal2;
            
        }break;
        case 23:{
            let scrollAniElem0 = targetElem[9].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[8].style.backgroundColor='rgba(255,255,255,0)';
            targetBack[9].style.opacity=0;
            tri.style.opacity=0;
            scov.style.opacity=0;
            grid.style.opacity=0;
            year.style.opacity=0;
            
        }break;
    }
}

function render2(nowState)
{
    let targetElem = document.querySelectorAll('.container');
    let targetBack = document.querySelectorAll('.left');
    let year = document.querySelector('.year');
    let targetYear = year.querySelector('p');
    let scov = document.querySelector('.scoville');
    let tri = document.querySelector('.triangle');
    let bg = document.getElementById('redBack');
    let grid =document.querySelector('.grid');
    let white = document.querySelectorAll('.bgWhite');

    switch(nowState)
    {
        case 1:{
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            scrollAniElem[0].style.opacity=1;
            bg.style.backgroundColor='rgba(255,19,0,1)';
        }break;
        case 2 :{
            let opacityVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[0].aniVal.opacity);

            targetBack[0].style.opacity=1;
            bg.style.backgroundColor='rgba(255, 19, 0,' + opacityVal +')';
            scrollAniElem[0].style.opacity = opacityVal;

        }break;
        case 3 :{
            let scrollAniElem0 = targetElem[0].querySelectorAll('.sa');
            bg.style.backgroundColor='rgba(255,19,0,0)';
            scrollAniElem0[0].style.opacity=0;
            white[0].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '900SHU';
            targetYear.textContent = '1953';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[1].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[1].aniVal.opacity2);
            
            year.style.opacity=opacityVal;
            tri.style.opacity=opacityVal;
            scov.style.opacity=opacityVal;
            grid.style.opacity=opacityVal;
            targetBack[0].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 4 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[2].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[2].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[2].aniVal.years);
            triVal = calcAni(aniKeyFrames2[2].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[2].aniVal.scoville);

            year.style.opacity=1;
            tri.style.opacity=1;
            scov.style.opacity=1;
            grid.style.opacity=1;
            targetBack[0].style.opacity = 0;
            targetBack[1].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[0].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 5 :{
            let scrollAniElem0 = targetElem[1].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity =0;
            white[0].style.backgroundColor='rgba(255,255,255,0)';
            white[1].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '4000SHU';
            targetYear.textContent = '1983';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[3].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[3].aniVal.opacity2);
            
            targetBack[1].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 6 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[4].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[4].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[4].aniVal.years);
            triVal = calcAni(aniKeyFrames2[4].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[4].aniVal.scoville);

            targetBack[1].style.opacity = 0;
            targetBack[2].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[1].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 7 :{
            let scrollAniElem0 = targetElem[2].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[1].style.backgroundColor='rgba(255,255,255,0)';
            white[2].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '1300SHU';
            targetYear.textContent = '1986';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[5].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[5].aniVal.opacity2);
            
            targetBack[2].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 8 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[6].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[6].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[6].aniVal.years);
            triVal = calcAni(aniKeyFrames2[6].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[6].aniVal.scoville);

            targetBack[2].style.opacity = 0;
            targetBack[3].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[2].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 9 :{
            let scrollAniElem0 = targetElem[3].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity = 0;
            scrollAniElem0[2].style.opacity = 0;
            white[2].style.backgroundColor='rgba(255,255,255,0)';
            white[3].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '2300SHU';
            targetYear.textContent = '1997';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[7].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[7].aniVal.opacity2);
            
            targetBack[3].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 10 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[8].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[8].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[8].aniVal.years);
            triVal = calcAni(aniKeyFrames2[8].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[8].aniVal.scoville);

            targetBack[3].style.opacity = 0;
            targetBack[4].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[3].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 11 :{
            let scrollAniElem0 = targetElem[4].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[3].style.backgroundColor='rgba(255,255,255,0)';
            white[4].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '2000SHU';
            targetYear.textContent = '1999';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[9].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[9].aniVal.opacity2);
            
            targetBack[4].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 12 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[10].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[10].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[10].aniVal.years);
            triVal = calcAni(aniKeyFrames2[10].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[10].aniVal.scoville);

            targetBack[4].style.opacity = 0;
            targetBack[5].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[4].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 13 :{
            let scrollAniElem0 = targetElem[5].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[4].style.backgroundColor='rgba(255,255,255,0)';
            white[5].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '4000SHU';
            targetYear.textContent = '2002';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[11].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[11].aniVal.opacity2);
            
            targetBack[5].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 14 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[12].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[12].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[12].aniVal.years);
            triVal = calcAni(aniKeyFrames2[12].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[12].aniVal.scoville);

            targetBack[5].style.opacity = 0;
            targetBack[6].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[5].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 15 :{
            let scrollAniElem0 = targetElem[6].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[5].style.backgroundColor='rgba(255,255,255,0)';
            white[6].style.backgroundColor='rgba(255,255,255,1)';
            
            scov.textContent = '4404SHU';
            targetYear.textContent = '2012';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[13].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[13].aniVal.opacity2);
            
            targetBack[6].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 16 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[14].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[14].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[14].aniVal.years);
            triVal = calcAni(aniKeyFrames2[14].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[14].aniVal.scoville);

            targetBack[6].style.opacity = 0;
            targetBack[7].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[6].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 17 :{
            let scrollAniElem0 = targetElem[7].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[6].style.backgroundColor='rgba(255,255,255,0)';
            white[7].style.backgroundColor='rgba(255,255,255,1)';

            scov.textContent = '5000SHU';
            targetYear.textContent = '2013';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[15].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[15].aniVal.opacity2);
            
            targetBack[7].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
        }break;
        case 18 :{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[16].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[16].aniVal.opacity2);
            yearVal = calcAni(aniKeyFrames2[16].aniVal.years);
            triVal = calcAni(aniKeyFrames2[16].aniVal.marks);
            scovilleVal = calcAni(aniKeyFrames2[16].aniVal.scoville);

            targetBack[7].style.opacity = 0;
            targetBack[8].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            let limitedScov = Math.floor(scovilleVal);
            let limitedYear = Math.floor(yearVal);

            scov.textContent = limitedScov +"SHU";
            targetYear.textContent = limitedYear;
            tri.style.transform = 'translateX(' + triVal +'vw)';
            scov.style.transform = 'translateX(' + triVal +'vw)';
            white[7].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;

        }break;
        case 19 :{
            let scrollAniElem0 = targetElem[8].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[7].style.backgroundColor='rgba(255,255,255,0)';
            white[8].style.backgroundColor='rgba(255,255,255,1)';
            targetBack[9].style.opacity=1;

            scov.textContent = '8706SHU';
            targetYear.textContent = '2017';
            let opacityVal, opacityVal2;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[17].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[17].aniVal.opacity2);
            
            targetBack[8].style.opacity = opacityVal2;
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[2].style.opacity = opacityVal;
            tri.style.opacity=1;
            scov.style.opacity=1;
            grid.style.opacity=1;
            year.style.opacity=1;
        }break;
        case 22:{
            let yearVal, triVal, scovilleVal, opacityVal, opacityVal2;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(aniKeyFrames2[18].aniVal.opacity);
            opacityVal2 = calcAni(aniKeyFrames2[18].aniVal.opacity2);

            targetBack[8].style.opacity = 0;
            targetBack[9].style.opacity=1;
            scrollAniElem[0].style.opacity = 1;
            scrollAniElem[1].style.opacity = 1;
            scrollAniElem[2].style.opacity = 1;

            tri.style.opacity=opacityVal2;
            scov.style.opacity=opacityVal2;
            grid.style.opacity=opacityVal2;
            year.style.opacity=opacityVal2;
            white[8].style.backgroundColor='rgba(255,255,255,'+opacityVal2+')';
            scrollAniElem[0].style.opacity=opacityVal2;
            scrollAniElem[1].style.opacity = opacityVal2;
            scrollAniElem[2].style.opacity = opacityVal2;
            targetBack[9].style.opacity = opacityVal2;
            
        }break;
        case 23:{
            let scrollAniElem0 = targetElem[9].querySelectorAll('.sa');
            scrollAniElem0[0].style.opacity=0;
            scrollAniElem0[1].style.opacity =0;
            scrollAniElem0[2].style.opacity = 0;
            white[8].style.backgroundColor='rgba(255,255,255,0)';
            targetBack[9].style.opacity=0;
            tri.style.opacity=0;
            scov.style.opacity=0;
            grid.style.opacity=0;
            year.style.opacity=0;
            
        }break;
    }
}

function calcAni(value)
{
    return( relativeScrollY / pixelDuration ) * (value[1] - value[0]) +value[0] ;
}

init();