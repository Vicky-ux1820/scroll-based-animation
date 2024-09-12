function homeAnimation(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.home',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 3,
        },
    })
    tl.to(".video-div",{
     '--clip':"0%",
       ease:Power2
    },'a')
    tl.to(".marque-text",{
        scale:1,
        ease:Power2
    },'a')
    tl.to('.lft',{
        xPercent:-10,
        stagger:0.03,
        esae:Power4
    },'b')
    tl.to('.rgt',{
        xPercent:10,
        stagger:0.03,
        esae:Power4
    },'b')
}
homeAnimation();

gsap.to(".slide",{
    scrollTrigger:{
        trigger:".achievements",
        start:"top top",
        end:"bottom bottom",
        scrub:1,
    },
    xPercent:-218,
    ease:Power4,
})

document.querySelectorAll(".section").forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        onEnter:function(){
           document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);   
        }
    })
})



//for understanding for loop for an object.
// let members={
//     "member1":{
//         name:"John Doe",
//         role:"Founder",
//         image:"images/member1.jpg",
//     },
//     "member2":{
//         name:"Jane Cartwright",
//         role:"Manager",
//         image:"images/member2.jpg",
//     },
//     "member3":{
//          name:"Michael Doe",
//         role:"Developer",
//         image:"images/member3.jpg",
//     },
//     "member4":{
//         name:"Emma Doe",
//         role:"Designer",
//         image:"images/member4.jpg",
//     },
//     "member5":{
//         name:"Sarah Doe",
//         role:"Marketing",
//         image:"images/member5.jpg",
//     },
//     "member6":{
//         name:"David Doe",
//         role:"Sales",
//         image:"images/member6.jpg",
//     }
// }
// var teamContainer = document.querySelector(".team-container");
// var memberKeys = Object.keys(members);

// for (var i = 0; i < memberKeys.length; i++) {
//     var member = members[memberKeys[i]];
//     var memberHTML = `
//         <div class="member w-full flex justify-between items-center p-3 border-b border-b-black bg-blue-500">
//             <div class="member-info text-6xl w-[50%] font-[Machina] flex justify-between">
//                 <div class="sr-no"><h1>${String(i + 1).padStart(2, '0')}</h1></div>
//                 <div class="member-name "><h1>${member.name}</h1></div>
//             </div>
//             <div class="member-position text-3xl font-medium font-[Satoshi]">
//                 <h1>${member.role}</h1>
//             </div>
//         </div>
//     `;
//     teamContainer.innerHTML += memberHTML;
// }

var member=document.querySelectorAll(".member");
var clutter=" ";
member.forEach((m)=>{
    PicInfo=m.getAttribute("data-image");
    clutter+=`<div class="overlay-img w-24  -top-[110%] h-24 rounded-[50%] absolute right-[20%]">
    <img class="h-full overflow-hidden opacity-1  rounded-[50%] w-full  object-cover" src=${PicInfo} alt="">
  </div>`
  m.innerHTML+=clutter;
})

var textClutter="";
var textPara=document.querySelector(".leader-words");
var letterSplit=textPara.textContent.split("").forEach((e)=>{
      if (e===" ") textClutter+=`<span>&nbsp;</span>`
      textClutter+=`<span class="opacity-[0.1]">${e}</span>`
})
textPara.innerHTML=textClutter;
gsap.to(".leader-words span",{
    scrollTrigger:{
        trigger:".leader-mention",
        start:"top 20%",
        end:"bottom 100%",
        scrub:1,
        // markers:true
    },
    opacity:1,
    stagger:0.03,
    ease:Power4,
})