const select = document.querySelector('#slct');

const apiRequest =  async () => {
    const request = await fetch('https://cataas.com/api/tags')
    const resRequest = await request.json();
    // console.log(resRequest);
    const tag1 = resRequest.slice(5 , 10);
    console.log(tag1);
    const tag2  = resRequest.slice(15 , 20);
    console.log(tag2);
    const arrTags = tag1.concat(tag2);
    // console.log(arrTags);

    arrTags.forEach(el => {
        const option = document.createElement('option');
        option.textContent = el;
        option.value = el;
        select.appendChild(option)
    });
    const contentHtml = document.querySelector('.contentImg');
    select.addEventListener('change',async () => {
        const request = await fetch(`https://cataas.com/cat/${select.value}?json=true`);
        const resRequest = await request.json();
        console.log(resRequest);
        const img = document.createElement('img');
        img.src = `https://cataas.com/${resRequest.url}`;
        const removeImg = () => {document.querySelectorAll('img').forEach((el) => {
            el.remove();
            });
        }

        removeImg()
        contentHtml.appendChild(img)
    });

};
    
apiRequest();