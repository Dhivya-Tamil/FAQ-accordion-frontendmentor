const data = [
    {
        questions: "What is Frontend Mentor, and how will it help me?",
        answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."

    },
    {
        questions: "Is Frontend Mentor free?",
        answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        questions: "Can I use Frontend Mentor projects in my portfolio?",
        answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        questions: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
]


const dataInfo = document.querySelector('.data-info');

const toggleText = (faq) => {
    const answer = faq.querySelector('.answer');
    const image = faq.querySelector('.accordion-image');

    faq.classList.toggle('active');

    if (faq.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        image.src = "./assets/images/icon-minus.svg";
    } else {
        answer.style.maxHeight = 0;
        image.src = "./assets/images/icon-plus.svg";
    }
}



function displayQuestions(){
    data.map((ques,i)=>{
        const question = document.createElement('div')
        question.innerHTML = `<div class='faq'>
        <div class='question'>
            <p>${ques.questions}</p>          
            <span onclick="toggleText(this.parentNode.parentNode)">
                <img src="./assets/images/icon-plus.svg" class="accordion-image" alt="icon-star">
            </span>        
        </div>
        <div class='answer'>
            <p>${ques.answer}</p>
        </div>
        </div>`

        dataInfo.appendChild(question);

    })
}

displayQuestions();

