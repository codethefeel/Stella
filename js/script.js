function talk() {
    var know = {
      Hi: "Hello",
      "How Are You?": "Great !",
      Bye: "Have A Nice Day !",
      Hello: "Hi , Whats Up",
    };
    var user = document.getElementById("userBox").value;
    //user's input rendaring
    document.getElementById("answer").innerHTML = user + "<br>";
    //bot's output rendaring
    document.getElementById("question").innerHTML = user + "<br>";
    if (user in know) {
      document.getElementById("answer").innerHTML = know[user] + "<br>";
    } else {
      document.getElementById("answer").innerHTML =
        "I do not understand .";
    }
  }