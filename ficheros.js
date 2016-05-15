$(document).ready(function() {

  $("#grabToken").click(function(){
    $("#repo").show()

    var token =   $("#token").val();
    github =  new Github({token:token, auth: "oauth"});
    console.log("github creado")
      
    $("#grabRepo").click(function(){
      var reponame =   $("#repositorio").val();
      var username =   $("#username").val()
      var fich = $("#fich").val()
      var text = $("#text").val()
      console.log("USERNAME : " + username)
      console.log("REPO: " + reponame)
      var repo = github.getRepo(username, reponame);

      repo.write('master', fich, text, 'fichero de prueba', function(err) {});

  });


  $("#getInfo").click(function(){
    var reponame =   $("#repositorio").val();
    var username =   $("#username").val()
    console.log("USERNAME : " + username)
    console.log("REPO: " + reponame)
    var repo = github.getRepo(username, reponame);
    var info = $("#info")
        info.html("<p>Repo data:</p>" +
          "<ul><li>Full name: " + repo.full_name + "</li>" +
          "<li>Description: " + repo.description + "</li>" +
          "<li>Created at: " + repo.created_at + "</li>" +
          "</ul>")
      });
    });

});