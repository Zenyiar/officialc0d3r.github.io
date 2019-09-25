var data = [
    {
        blogTitle: 'My first blog post!',
        blogBody: 'This is my first blog post!!!',
        blogDate: 'September 25th, 2019'
    }
]
var blog = document.querySelector('#blog');

for (i = 0; i < data.length; i++){
    blog.innerHTML += `
        <div class="custom-card">
            <div class="custom-card-body">
                <h5>${data[i].blogTitle}</h5>
                <p>${data[i].blogBody}</p>
                <h6>${data[i].blogDate}</h6>
            </div>
        </div>
    `;
}