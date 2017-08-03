function PostManager() {
  this.posts = [];
  this.postCount = 0;

  this.addPost = function(text,type) {
    this.posts.push({
      id: this.postCount,
      text: text,
      type: type
    });
    this.postCount++;
  }

  this.postsToHTML = function(parent) {
    parent.innerHTML = "";
    this.posts.forEach(function(post) {
      parent.appendChild(this.createHTMLPost(post.text,post.id));
    },this);
  }

  this.createHTMLPost = function(text,id) {
    var post = document.createElement('div');
    post.setAttribute('data-id',id)
    var p = document.createElement('p');
    p.innerHTML = text;

    var editar = document.getElementById("editar");
    editar.addEventListener('click',function(e) {
      e.preventDefault();
      if (e.target.getAttribute('data-edit-mode') === 'false') {
        var editText = e.target.parentNode.getElementsByTagName('p')[0].innerHTML;

        var editTextarea = document.createElement('textarea');
        editTextarea.value = editText;
        e.target.parentNode.insertBefore(editTextarea,p);
        e.target.parentNode.insertBefore(document.createElement('br'),e.target);
        e.target.parentNode.removeChild(p);
      }
      var postId = e.target.parentNode.getAttribute('data-id');

    });

    var eliminar = document.getElementById("eliminar");
    eliminar.addEventListener('click',function(e) {
      e.preventDefault();
      var postId = e.target.parent.getAttribute('data-id');


    });
    
    posts.appendChild(p);
    return post;
  }
}

window.addEventListener('load',function() {

  var postManager = new PostManager();

  var publicarPostButton = document.getElementById('publicar');
  publicarPostButton.addEventListener('click',function() {

    var postTextarea = document.getElementById('postText');
    var postTypeSelect = document.getElementById('postType');
    var postType = postTypeSelect.options[postTypeSelect.selectedIndex].value;

    postManager.addPost(postTextarea.value,postType);
    postManager.postsToHTML(document.getElementById('posts'));
  });
});
