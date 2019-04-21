"use strict";
(function interaction (){
  // button
  const buttonTem = document.getElementById('but-tem'),
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
  const feedWin = document.getElementById('b-feed'),
        comWin = document.getElementById('b-com'),
        chatWin = document.getElementById('b-chat'),
        feedWinFull = document.getElementById('b-feed-full'),
        comWinFull = document.getElementById('b-com-full'),
        chatWinFull = document.getElementById('b-chat-full');

  const backgroundCol = document.getElementById("back-col");
  let colorBack = 0;

  buttonTem.onclick = function colorback() {
   if (colorBack) {
    backgroundCol.style.background = "#fff";
     colorBack = 0;
   } else {
    backgroundCol.style.background = "#000";
     colorBack = 1;
   }
  }

  function workWindow () {

    function hideShow (hide, show) {
      hide.style.display = "none";
      show.style.display = "flex";
    }
    // folding
    minFeed.onclick = function () {
      hideShow (feedWin, iconFeed);
    }
    minCom.onclick = function () {
      hideShow (comWin, iconCom);
    }
    minChat.onclick = function () {
      hideShow (chatWin, iconChat);
    }
    // unfolding
    iconFeed.onclick = function () {
      hideShow (iconFeed, feedWin);
    }
    iconCom.onclick = function () {
      hideShow (iconCom, comWin);
    }
    iconChat.onclick = function () {
      hideShow (iconChat, chatWin);
    }
    // full window
    maxFeed.onclick = function () {
      hideShow (feedWin, feedWinFull);
    }
    maxCom.onclick = function () {
      hideShow (comWin, comWinFull);
    }
    maxChat.onclick = function () {
      hideShow (chatWin, chatWinFull);
    }
    // minimize full window
    minFeedFull.onclick = function () {
      hideShow (feedWinFull, feedWin);
    }
    minComFull.onclick = function () {
      hideShow (comWinFull, comWin);
    }
    minChatFull.onclick = function () {
      hideShow (chatWinFull, chatWin);
    }
  }
  workWindow ();
}());


