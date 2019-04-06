(function interaction (){
  // button
  let buttonTem = document.getElementById('but-tem'),
      maxFeed = document.getElementById('max-win-feed'),
      minFeed = document.getElementById('min-win-feed'),
      minFeedFull = document.getElementById('min-win-feed-full'),
      maxCom = document.getElementById('max-win-com'),
      minCom = document.getElementById('min-win-com'),
      minComFull = document.getElementById('min-win-com-full'),
      maxChat = document.getElementById('max-win-chat'),
      minChat = document.getElementById('min-win-chat'),
      minChatFull = document.getElementById('min-win-chat-full'),
      iconFeed  = document.getElementById('but-icon-tape'),
      iconCom = document.getElementById('but-icon-last-com'),
      iconChat = document.getElementById('but-icon-chat');
  // blocks
  let feedWin = document.getElementById('b-feed'),
      comWin = document.getElementById('b-com'),
      chatWin = document.getElementById('b-chat'),
      feedWinFull = document.getElementById('b-feed-full'),
      comWinFull = document.getElementById('b-com-full'),
      chatWinFull = document.getElementById('b-chat-full');

  let backgroundCol = document.getElementById("back-col");
  let colorBack = 0;

  buttonTem.onclick = function colorback() {
   if (colorBack) {
    backgroundCol.style.background = "#fff";
     colorBack = 0;
   } else {
    backgroundCol.style.background = "#000";
     colorBack = 1;
   }
  };

  function workWindow () {
    // folding
    minFeed.onclick = function () {
      feedWin.style.display = "none";
      iconFeed.style.display = "flex";
    }
    minCom.onclick = function () {
      comWin.style.display = "none";
      iconCom.style.display = "flex";
    }
    minChat.onclick = function () {
      chatWin.style.display = "none";
      iconChat.style.display = "flex";
    }
    // unfolding
    iconFeed.onclick = function () {
      feedWin.style.display = "flex";
      iconFeed.style.display = "none";
    }
    iconCom.onclick = function () {
      comWin.style.display = "flex";
      iconCom.style.display = "none";
    }
    iconChat.onclick = function () {
      chatWin.style.display = "flex";
      iconChat.style.display = "none";
    }
    // full window
    maxFeed.onclick = function () {
      feedWin.style.display = "none";
      feedWinFull.style.display = "flex";
    }
    maxCom.onclick = function () {
      comWin.style.display = "none";
      comWinFull.style.display = "flex";
    }
    maxChat.onclick = function () {
      chatWin.style.display = "none";
      chatWinFull.style.display = "flex";
    }
    // minimize full window
    minFeedFull.onclick = function () {
      feedWinFull.style.display = "none";
      feedWin.style.display = "flex";
    }
    minComFull.onclick = function () {
      comWinFull.style.display = "none";
      comWin.style.display = "flex";
    }
    minChatFull.onclick = function () {
      chatWinFull.style.display = "none";
      chatWin.style.display = "flex";
    }
  }
  workWindow ();
}());


