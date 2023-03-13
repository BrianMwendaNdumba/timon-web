window.onload = function (){
  document.getElementById('preloader').style.display = 'none';

}
function toggleFullScreen(id) {
        document.getElementById(id).requestFullscreen()
      }
let box = document.getElementById('box'),
    box2 = document.getElementById('box1'),
    box3 = document.getElementById('box3'),
    box4 = document.getElementById('box4'),
    btn = document.querySelector('.dropdownbutton'),

    btn2 = document.querySelector('.dropdownimg'),
    btn3 = document.querySelector('.dropdownimg3'),
    btn4 = document.querySelector('.dropdownimg4');

btn.addEventListener('click', function () {
  box.classList.toggle('show');
}, false);
btn2.addEventListener('click', function () {
  box2.classList.toggle('show');
}, false);
btn3.addEventListener('click', function () {
  box3.classList.toggle('show');
}, false);
btn4.addEventListener('click', function () {
  box4.classList.toggle('show');
}, false);


function openWhatsApp1() {
  "whatsapp://send?text=Hello, I am impressed with your work and would love to get your services&phone=+254721607765"
   window.open('whatsapp://send?text= https://brianmwenda.github.io/timon/images/member.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
    }

function openWhatsApp2() {
   window.open('whatsapp://send?text= https://brianmwenda.github.io/timon/images/dedicated.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
    }

function openWhatsApp3() {
   window.open('whatsapp://send?text= https://brianmwenda.github.io/timon/images/private.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
    }

    function deskWhatsApp1() {

       window.open('https://web.whatsapp.com://send?text= https://brianmwenda.github.io/timon/images/member.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
        }

    function deskWhatsApp2() {
       window.open('https://web.whatsapp.com://send?text= https://brianmwenda.github.io/timon/images/dedicated.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
        }

    function deskWhatsApp3() {
       window.open('https://web.whatsapp.com://send?text= https://brianmwenda.github.io/timon/images/private.JPG Hello, I am impressed with your work and would love to get your services&phone=+254721607765');
        }


document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-float').classList.add('fixed-top');

        // add padding top to show content behind navbar
        var navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      }
      else {
        document.getElementById('navbar-float').classList.remove('fixed-top');

         // remove padding top from body
        document.body.style.paddingTop = '0';
      }
     //  if (window.scrollY > 80) {
     //   document.querySelector('.botcontainer').style.display = "none";
     // }
  });
});

// chat bot START

// const inputField = document.getElementById("input");
//
// addChatEntry('', 'Hello!...');
// inputField.addEventListener("keydown", (e) => {
//   if (e.code === "Enter") {
//     let input = inputField.value;
//     inputField.value = "";
//     output(input);
//   }
// });
//
// function output(input) {
//   let product;
//   let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
//   text = text
//     .replace(/ a /g, " ")
//     .replace(/whats/g, "what is")
//     .replace(/please /g, "")
//     .replace(/ please/g, "")
//     .replace(/r u/g, "are you");
//     let utterances = ["hello","hey"];
//     answers = ["Hellow","Hey,how are you?"];
//     let alternatives = ["Thanks for visiting our website, how can we be of service","Are you looking for a gravesite attendant?"];
//
//
//   if (compare(utterances, answers, text)) {
//     // Search for exact match in triggers
//     product = compare(utterances, answers, text);
//   }
//   else {
//     product = alternatives[Math.floor(Math.random() * alternatives.length)];
//   }
//
//   addChatEntry(input, product);
// }
//
// function compare(utterancesArray, answersArray, string) {
//   let reply;
//   let replyFound = false;
//   for (let x = 0; x < utterancesArray.length; x++) {
//     for (let y = 0; y < utterancesArray[x].length; y++) {
//       if (utterancesArray[x][y] === string) {
//         let replies = answersArray[x];
//         reply = replies[Math.floor(Math.random() * replies.length)];
//         replyFound = true;
//         break;
//       }
//     }
//     if (replyFound) {
//       break;
//     }
//   }
//   return reply;
// }
//
// function addChatEntry(input, product) {
//   const messagesContainer = document.getElementById("messages");
//   let userDiv = document.createElement("div");
//   userDiv.id = "user";
//   userDiv.className = "user response";
//   userDiv.innerHTML = `<span>${input}</span>`;
//   messagesContainer.appendChild(userDiv);
//
//   let botDiv = document.createElement("div");
//   let botText = document.createElement("span");
//   botDiv.id = "bot";
//   botDiv.className = "bot response";
//   botText.innerText = "Typing...";
//   botDiv.appendChild(botText);
//   messagesContainer.appendChild(botDiv);
//
//   messagesContainer.scrollTop =
//     messagesContainer.scrollHeight - messagesContainer.clientHeight;
//
//   setTimeout(() => {
//
//     botText.innerText = `${product}`;
//   }, 2000);
// }

// chat bot end

function validateContactForm() {
        var valid = true;

        $(".info").html("");
        $(".input-field").css('border', '#e0dfdf 1px solid');
        var userName = $("#userName").val();
        var userEmail = $("#userEmail").val();

        var content = $("#content").val();

        if (userName == "") {
            $("#userName-info").html("Required.");
            $("#userName").css('border', '#e66262 1px solid');
            valid = false;
        }
        if (userEmail == "") {
            $("#userEmail-info").html("Required.");
            $("#userEmail").css('border', '#e66262 1px solid');
            valid = false;
        }
        if (!userEmail.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/))
        {
            $("#userEmail-info").html("Invalid Email Address.");
            $("#userEmail").css('border', '#e66262 1px solid');
            valid = false;
        }


        if (content == "") {
            $("#userMessage-info").html("Required.");
            $("#content").css('border', '#e66262 1px solid');
            valid = false;
        }
        return valid;
    }
