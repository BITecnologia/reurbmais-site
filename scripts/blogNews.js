"use strict";

function findByLatestNews() {
  fetch('http://localhost:3333/posts-latest').then((res) => {
    res.json().then((response) => {
      response.forEach((data, i) => {
  
        var divContainerBlog = document.createElement("div");
        divContainerBlog.classList.add("col-sm-6", "col-md-4", "wow", "fadeInLeft");
        divContainerBlog.setAttribute('data-wow-delay', i + 's');
        divContainerBlog.addEventListener('click', function() {
          window.location='blog.html#posts';
        })
        divContainerBlog.style.cursor = "pointer";

        var divItemBlog = document.createElement("div");
        divItemBlog.classList.add("blurb-image");
  
        var id = document.createTextNode(data.id);
        var title = document.createTextNode(data.title);
        var description = document.createTextNode(data.description.slice(0, 100) + '...');
        var imageUrl = data.image.url;
  
        var image = document.createElement("img");
        image.setAttribute('src', imageUrl);
        image.setAttribute('alt', 'Imagem do post');
        image.setAttribute('height', '80');
        divItemBlog.appendChild(image);
  
        var h6 = document.createElement("h6");
        h6.classList.add("title");
        h6.appendChild(title);
        divItemBlog.appendChild(h6);
  
        var p = document.createElement("p");
        p.classList.add("exeption");
        p.appendChild(description);
        divItemBlog.appendChild(p);
  
        divContainerBlog.appendChild(divItemBlog);
  
        document.getElementById("blog-post").appendChild(divContainerBlog);       
      });
    });
  });
}

function timeBlog() {
  setInterval(() => {
    $('#blog-post').empty();
    findByLatestNews();
  }, 30000);
}

(function() {
  findByLatestNews();
  timeBlog();
})();
