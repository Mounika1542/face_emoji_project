const leftEye=document.querySelector('.lefteye');
const rightEye=document.querySelector('.righteye');
const face=document.querySelector('.face');


face.addEventListener('mousemove',(event=>{
    const faceReact=face.getBoundingClientRect();
    const leftEyeReact=leftEye.getBoundingClientRect();
    const rightEyeReact=rightEye.getBoundingClientRect();


    const isOverLeftEye=event.clientX>=leftEyeReact.left && event.clientX<=leftEyeReact.right&& event.clientY >=leftEyeReact.top && event.clientY<=leftEyeReact.bottom;
    const isOverRightEye=event.clientX>=rightEyeReact.left && event.clientX<=rightEyeReact.right && event.clientY>=rightEyeReact.top && event.clientY<=rightEyeReact.bottom;
    if(isOverLeftEye || isOverRightEye){
        leftEye.classList.add('open');
        rightEye.classList.add('open');
    }
    else{
        leftEye.classList.remove('open');
        rightEye.classList.remove('open');
    }
}));