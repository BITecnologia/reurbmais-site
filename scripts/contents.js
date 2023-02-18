"use strict";

function findByLatestNews() {

  const urlParams = new URLSearchParams(window.location.search);
  const idPost = urlParams.get('posts');

  fetch(`http://localhost:3333/posts-find/${idPost}`).then((res) => {
    res.json().then((response) => {

      $("#titlePost").html(response.title);
        
      var divContainerBlog = document.createElement("div");

      var divItemBlog = document.createElement("div");
      divItemBlog.classList.add("post-image");

      var description = document.createTextNode(response.description);
      var imageUrl = response.image.url;
      var body = document.createTextNode(response.body);

      var image = document.createElement("img");
      image.setAttribute('src', imageUrl);
      image.setAttribute('alt', 'Imagem do conteúdo');
      image.setAttribute('height', '80');
      divItemBlog.appendChild(image);

      var p = document.createElement("p");
      p.classList.add("exeption");
      p.appendChild(description);
      p.style.textAlign = 'justify';
      divItemBlog.appendChild(p);

      var pBody = document.createElement("p");
      pBody.appendChild(body);
      pBody.style.textAlign = 'justify';
      divItemBlog.appendChild(pBody);

      divContainerBlog.appendChild(divItemBlog);

      document.getElementById("blog-post").appendChild(divContainerBlog);       
    });
  });
}

(function() {
  $('#blog-post').empty();
  findByLatestNews();
})();
