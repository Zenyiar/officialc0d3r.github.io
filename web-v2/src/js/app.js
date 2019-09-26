var data = [
    {
        blogTitle: 'Updated this page!',
        blogBody: 'I updated the background and font sizes of this page + added time to date posted! Also, put the date above the body text and made it bold.',
        blogDate: 'Edited on September 26th, 2019 @ 5:33 AM'
    },
    {
        blogTitle: 'My first blog post!',
        blogBody: 'This is my first blog post!!!',
        blogDate: 'September 25th, 2019 @ ?????'
    }
]
var blog = document.querySelector('#blog');

for (i = 0; i < data.length; i++){
    blog.innerHTML += `
        <div class="custom-card">
            <div class="custom-card-body">
                <h5>${data[i].blogTitle}</h5>
                <h6><b>${data[i].blogDate}</b></h6>
                <p>${data[i].blogBody}</p>
            </div>
        </div>
    `;
}
