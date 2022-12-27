function addPhoto(thumbnailUrl) {
    const img = document.createElement('img'); //создаем блок для картинки
    img.src = thumbnailUrl;//передаем картинку ссылочкой
    document.querySelector('.main_gallery').appendChild(img);// добавляем картинку в дерево
}

let currentPage = Math.ceil(Math.random()*600);

async function addPage(currentPage) {
    document.querySelector('.preloader').setAttribute('style', 'display: inline;');
    await sleep(5 * 1000);
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=1&_page=' + currentPage)
        .then(response => response.json())
        .then(data => {
                for (let item of data) {
                    addPhoto(item['thumbnailUrl'])
                }
                document.querySelector('.preloader').setAttribute('style', 'display: none;'); //скрыть котика
                document.querySelector('.error').setAttribute('style', 'display: none;');
            }
        ).catch((error) => {
        console.log(error);
        document.querySelector('.error').setAttribute('style', 'display: inline;')
    });
}

addPage(currentPage);//добавляем первый раз

document.querySelector('.more').addEventListener("click", function () { //по нажатию кнопочки
    let currentPage = Math.ceil(Math.random()*600); //случайная страница
    addPage(currentPage); //добавляем на страницу
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}