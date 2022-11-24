
let postObj = [
    {
        id: 1,
        title: 'UI Elements 1',
        subtitle: 'Components ux/ui design',
        detail: 'The element will then take up the specified width, and the remaining space will be split equally between the two margins'
    },
    {
        id: 2,
        title: 'UI Elements 2',
        subtitle: 'Components ux/ui design',
        detail: 'The element will then take up the specified width, and the remaining space will be split equally between the two margins'
    },
    {
        id: 3,
        title: 'UI Elements 3',
        subtitle: 'Components ux/ui design',
        detail: 'The element will then take up the specified width, and the remaining space will be split equally between the two margins'
    }
]

let divMain;
let btnCreatePost;

window.onload = function () {
    initElement()
    btnCreatePost = document.getElementById('btnCreatePost')
    btnCreatePost.onclick = function(){
        toggleCreatePostButton()
        createAddPostElement()
    }
}

function initElement() {
    divMain = document.getElementById('divMain')

    for (const index in postObj) {
        const { id, title, subtitle, detail } = postObj[index]
        createPostElement(id, title, subtitle, detail)
    }
}

function createPostElement(id, title, subtitle, detail) {
    const div = document.createElement('div')
    div.className = 'box'

    const h3 = document.createElement('h3')
    h3.innerText = title

    const h4 = document.createElement('h4')
    h4.innerText = subtitle

    const p = document.createElement('p')
    p.innerText = detail

    const btnDelete = document.createElement('button')
    btnDelete.className = 'btn btn-light'
    btnDelete.innerText = 'delete'
    btnDelete.onclick = function () {
        postObj = postObj.filter(function (p) {
            return p.id != id
        })

        divMain.removeChild(div)
    }

    div.append(h3)
    div.append(h4)
    div.append(p)
    div.append(btnDelete)

    divMain.append(div)
}

function toggleCreatePostButton(isOpen) {
    if (isOpen == true) {
        btnCreatePost.style.display = 'block'
    } else {
        btnCreatePost.style.display = 'none'
    }
}

function createAddPostElement() {
    const div = document.createElement('div')
    div.className = 'box'

    const txtTile = document.createElement('input')
    txtTile.type = 'text'
    txtTile.className = 'form-control abc s'
    txtTile.placeholder = 'tittle'

    const txtSubTile = document.createElement('input')
    txtSubTile.type = 'text'
    txtSubTile.className = 'form-control'
    txtSubTile.placeholder = 'sub tittle'

    const txtADetail = document.createElement('textarea')
    txtADetail.className = 'form-control'
    txtADetail.placeholder = 'detail'

    const btnCreate = document.createElement('button')
    btnCreate.className = 'btn btn-light'
    btnCreate.innerText = 'create'
    btnCreate.onclick = function () {

        const result = {
            id: Date.now(),
            title: txtTile.value,
            subtitle: txtSubTile.value,
            detail: txtADetail.value
        }

        postObj.push(result)

        divMain.removeChild(div)
        toggleCreatePostButton(true)
        createPostElement(result.id, result.title, result.subtitle, result.detail)
    }

    div.append(txtTile)
    div.append(txtSubTile)
    div.append(txtADetail)
    div.append(btnCreate)

    divMain.append(div)
}