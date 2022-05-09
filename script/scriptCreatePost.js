function createPost (paragrafo){
    const newPostCreated = document.querySelector('.newPostCreated')

    const newPost = document.createElement('section')
        newPost.classList.add('blockMain', 'newPost')

    const postHeader = createPostHeader()
    const postText = createPostText(paragrafo)

    const postFooter = createPostFooter()

    newPost.append(postHeader, postText, postFooter)

    newPostCreated.after(newPost)
}

function createPostFooter() {
    const containerPostFooter = document.createElement('div')

    const numbers = createPostFooterNumbers()

    const activityIcons = createPostFooterIcons()

    containerPostFooter.append(numbers, activityIcons)

    return containerPostFooter
}

function createPostFooterIcons() {
    const icons = document.createElement('div')
        icons.classList.add('activity-icons')

    const like = document.createElement('div')
        like.classList.add('like')
    const likeIcon = document.createElement('i')
        likeIcon.classList.add('fa-solid', 'fa-heart')

    like.append(likeIcon)
    like.innerHTML += 'Like'

    const comments = document.createElement('div')
        comments.classList.add('comments')
    const commentsIcon = document.createElement('i')
        commentsIcon.classList.add('fa-solid', 'fa-comments')

    comments.append(commentsIcon)
    comments.innerHTML += 'Comment'

    const share = document.createElement('div')
        share.classList.add('share')
    const shareIcon = document.createElement('i')
        shareIcon.classList.add('fa-solid', 'fa-share')

    share.append(shareIcon)
    share.innerHTML += 'Share'

    icons.append(like, comments, share)

    return icons
}

function createPostFooterNumbers () {
    const numbersBox = document.createElement('div')
        numbersBox.classList.add('numbers-box')

    const likesNumber = document.createElement('span')
        likesNumber.textContent = '0 Likes'

    const commentsNumber = document.createElement('span')
        commentsNumber.textContent = '0 Comments'
    
    const sharesNumber = document.createElement('span')
        sharesNumber.textContent = '0 Chares'

    numbersBox.append(likesNumber, commentsNumber, sharesNumber)
    
    return numbersBox
}

function createPostHeader() {
    const postHeader = document.createElement('div')
        postHeader.classList.add('post-header')

    const userProfile = document.createElement('div')
        userProfile.classList.add('user-profile')
    const img = document.createElement('img')
        img.src = 'images/user.jpg'
        img.classList.add('user-photo')
    const info = document.createElement('div')
        info.classList.add('info')
    const user = document.createElement('p')
        user.textContent = 'Vanessa Lira'
    const timeSpan = document.createElement('span')
        timeSpan.textContent = '14 de abril às 20:18'

    info.append(user, timeSpan)
    userProfile.append(img, info)
    postHeader.append(userProfile)

    return postHeader
}

function createPostText(paragrafo) {
    const description = document.createElement('p')
        description.classList.add('post-text')
    description.textContent = paragrafo

    return description
}

let publicarBtn = document.querySelector('.postPublicar')

publicarBtn.addEventListener('click', function(){
    const textArea = document.querySelector('#textArea')

    const texto = textArea.value

    if (texto != ''){
        textArea.value = ''
        
        createPost(texto)
    }  

})
