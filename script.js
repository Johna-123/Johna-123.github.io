//scrolling effects
function scrollE() {
  let pos = $(document).scrollTop();

  //header / footer
  let header_width,
      header_height,
      header_radius,
      header_rotate,
      header_opacity,
      contact,
      footer_width,
      footer_height,
      footer_radius,
      footer_rotate,
      footer_opacity;


  header_width = (50 - ((0.0025 * pos) * 50)) + "vw";
  header_height = (100 - ((0.0025 * pos) * 100)) + "vh";
  header_radius = ((0.0025 * pos) * 64) + "px";
  header_rotate = "rotate(" + ((0.0025 * pos) * 10) + "deg)";
  header_opacity = 1 - ((0.005 * pos) * 1);

  contact = pos - $(".contact").offset().top;
  footer_width = ((0.0025 * contact) * 50) + "vw";
  footer_height = ((0.0025 * contact) * 100) + "vh";
  footer_radius = (64 - ((0.0025 * contact) * 64)) + "px";
  footer_rotate = "rotate(" + (10 - ((0.0025 * contact) * 10)) + "deg)";
  footer_opacity = (0.005 * (contact - 200)) * 1;

  if (pos > 400 && contact < 0) {
    $("#nav .background").css({"width":"116px", "height":"182px", "border-bottom-left-radius":"var(--radius-large)", "transform":"rotate(10deg)"});
    $("#nav .background img").css({"opacity":"0", "display":"none"});
    $("#nav .background button").css({"opacity":"0", "display":"none"});
    $("#nav .footer").css({"opacity":"0", "display":"none"});
  } else if (contact < 0) {
    $("#nav .background").css({"width":header_width, "height":header_height, "border-bottom-left-radius":header_radius, "transform":header_rotate});
    $("#nav .background img").css({"opacity":header_opacity, "display":"block"});
    $("#nav .background button").css({"opacity":header_opacity, "display":"block"});
    $("#nav .footer").css({"opacity":"0", "display":"none"});
  } else {
    $("#nav .background").css({"width":footer_width, "height":footer_height, "border-bottom-left-radius":footer_radius, "transform":footer_rotate});
    $("#nav .background img").css({"opacity":"0", "display":"none"});
    $("#nav .background button").css({"opacity":"0", "display":"none"});
    $("#nav .footer").css({"opacity":footer_opacity, "display":"block"});
  }

  //home
  let home_margin,
      home_opacity;

  home_margin = "-" + ((0.0025 * pos) * 200) + "px";
  home_opacity = (1 - ((0.0025 * pos) * 1));

  if (pos > 400) {
    $("#home .main").css({"margin-left":"-200px", "opacity":"0"});
  } else {
    $("#home .main").css({"margin-left":home_margin, "opacity":home_opacity});
  }

  //code slide in
  for (const lang of document.querySelectorAll(".code-lang")) {
    let vh = $(window).height();
    let mh = $("#code .main").height();
    let ct = $(lang).offset().top - pos - vh + (vh/8);
    let nr;

    if (ct >= -400 && ct <= 0) {
      if ($(lang).index() == 0 || $(lang).index() % 2 == 0) {
        nr = 200 + (ct/2);
      } else {
        nr = -200 - (ct/2);
      }

      var op = ((-ct) / 400);

      $(lang).css({"right":nr, "opacity":op});
    } else if (ct < -400) {
      $(lang).css({"right":"0", "opacity":"1"});
    } else {
      $(lang).removeAttr("style");
    }
  }

  //tools slide in
  for (const tool of document.querySelectorAll(".tool")) {
    let vh = $(window).height();
    let tt = $(tool).offset().top - pos - vh + (vh/8);

    if (tt <= 0) {
      $(tool).css({"opacity":"1"});
    } else {
      $(tool).removeAttr("style");
    }
  }

  //contact
  let contact_margin,
      contact_opacity;

  contact_margin = "-" + (200 - ((0.0025 * contact) * 200)) + "px";
  contact_opacity = (0.0025 * contact) * 1;

  if (contact < 0) {
    $(".contact .main").css({"margin-left":"-200px", "opacity":"0"});
  } else {
    $(".contact .main").css({"margin-left":contact_margin, "opacity":contact_opacity});
  }
}

//projects
function projects(project) {
  /*const projectsData = {
    jvkomplete: {
      name: "JVKomplete",
      work: "Coded entire site",
      lang: "HTML, PHP, CSS, JavaScript, jQuery",
      date: "April 2023",
      link: "https://jvkomplete.com",
      image: "./images/projects/jvkomplete.png"
    },
  
    crazychickengirl: {
      name: "Crazy Chicken Girl",
      work: "Designed & coded entire site",
      lang: "HTML, CSS, JavaScript, Node.JS, React.JS, MySQL",
      date: "April 2023",
      link: "https://crazy-chicken-girl.22web.org",
      image: "./images/projects/crazychickengirl.png"
    }
  };*/

  const projectsData = {
    jvkomplete: {
      name: "Lorem Ipsum",
      work: "Coded entire site",
      lang: "HTML, PHP, CSS, JavaScript, jQuery",
      date: "April 2023",
      link: "",
      image: "https://placehold.co/1920x1080/f6dec6/704d29/png"
    },
  
    crazychickengirl: {
      name: "Lorem Ipsum",
      work: "Designed & coded entire site",
      lang: "HTML, CSS, JavaScript, Node.JS, React.JS, MySQL",
      date: "April 2023",
      link: "",
      image: "https://placehold.co/1920x1080/f6dec6/704d29/png"
    }
  };

  $(".project img").css("opacity", "0");
  setTimeout(() => {
    $(".project img").removeAttr("src")
    $(".project img").attr("alt", projectsData[project].name);
    $(".project img").attr("src", projectsData[project].image);
    $(".project h2").text(projectsData[project].name);
    $(".project h4").text(projectsData[project].lang);
    $(".project p.work").text("Work: " + projectsData[project].work);
    $(".project p.date").text("Date Completed: " + projectsData[project].date);
    $(".project a").attr("href", projectsData[project].link);
    $(".project img").css("opacity", "1");
  }, 500);
}

//calculate age
function age() {
  const today = [new Date().getDate(), new Date().getMonth() + 1, new Date().getFullYear()];
  const birthday = [30, 9, 2007];

  if (today[1] < birthday[1]) {
    return today[2] - birthday[2] - 1;
  } else if (today[1] > birthday[1]) {
    return today[2] - birthday[2];
  } else if (today[1] == birthday[1]) {
    if (today[0] < birthday[0]) {
      return today[2] - birthday[2] - 1;
    } else {
      return today[2] - birthday[2];
    }
  }
}

//remove focus when clicked
function focusE() {
  $("*").click(function() {
    if ($(this).hasClass("focus")) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  })
}

//contact form
emailjs.init("HSWm-0ddlOS8g8Qa0");

function contact() {
  document.getElementById("contact").addEventListener("submit", function(e) {
    $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-loading)", "animation":"load 0.5s infinite ease-in-out"});

    e.preventDefault();
    try {
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm("service_mj69gb7", "template_hnpa1kl", this).then(function() {
        $(".contact input").val("");
        $(".contact textarea").val("");
        $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-success)", "animation":"none"});
        $(".contact input[type='submit']").attr("disabled");
        setTimeout(() => {
          $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-default)"});
          $(".contact input[type='submit']").removeAttr("disabled");
        }, 2500);
      }, function(error) {
        console.log("Sending message failed. Error: " + error);
        $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-failed)", "animation":"none"});
        setTimeout(() => {
          $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-default)"});
          $(".contact input[type='submit']").removeAttr("disabled");
        }, 2500);
      });
    } catch (error) {
      console.log("Sending message failed. Error: " + error);
      $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-failed)", "animation":"none"});
      setTimeout(() => {
        $(".contact input[type='submit']").css({"background-image":"var(--arrow-coral-default)"});
        $(".contact input[type='submit']").removeAttr("disabled");
      }, 2500);
    }
  });
}

//about
function more(text) {
  if (text == "about") {
    $(".more .inner").html("\
      <h2>More About Me</h2>\
      <p>Hi there! I'm Johnathan Verstraaten, a <span class='age'>" + age() + "</span> year old Christian home-schooler with a strong passion for programming.</p>\
      <br />\
      <p>I'm half Dutch and half Ghanaian, born in The Netherlands. I currently live on a rubber plantation in Liberia, but have lived in Ghana, Ivory Coast, Cameroon and The Netherlands before that.</p>\
      <br />\
      <p>Right now I'm doing IGCSE Biology, Chemistry, & Computer Science, and have done English, Maths, Additional Maths, Physics & Environmental Management.</p>\
      <br />\
      <p>Apart from coding, I enjoy keeping and taking care of animals, cooking, playing tennis and will occasionally do work in the garden and play the piano.</p>\
      <a><button style='margin-top: 32px;' onclick='more(\"close\")'><i>&larr; Back</i><div class='nav-underline'></div></button></a>\
    ");

    $("html").css("overflowY", "hidden");

    $("#nav .background").css({"width":"116px", "height":"182px", "border-bottom-left-radius":"var(--radius-large)", "transform":"rotate(10deg)", "transition":"0.5s"});
    $("#nav .background img").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    $("#nav .background button").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    $("#nav .footer").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    
    $("#home .main").css({"margin-left":"-200px", "opacity":"0", "transition":"0.2s"});

    $(".more").css({"opacity":"1", "left":"0", "z-index":"1", "transition":"0.5s"});
  } else if (text == "code") {
    $(".more .inner").html("\
      <h2>My Coding Journey</h2>\
      <p>Hi there! I'm Johnathan Verstraaten, a <span class='age'>" + age() + "</span> year old Christian home-schooler with a strong passion for programming.</p>\
      <br />\
      <p>I started programming in early 2020, at the age of 12. At the time, I was interested in Desktop Application and Game Development, so I started learning C++ using <a href='https://w3schools.com' target='_blank'>W3Schools</a>.</p>\
      <br />\
      <p>Because I had no previous coding experience, learning C++ was difficult, so I later decided to go for something easier and started to learn HTML and CSS, transitioning from Game Development to Web Development.</p>\
      <br />\
      <p>Later in 2021, I decided to take coding more seriously and added JavaScript to my skills, and improved my CSS knowledge.</p>\
      <br />\
      <p>Early 2022, after having some decent knowledge in the 3 main frontend languages (HTML, CSS and JavaScript), I started learning PHP and SQL, to get into the server side of websites too. Later the same year I learnt the basics of Python, as part of IGCSE Computer Science.</p>\
      <br />\
      <p>I got my first freelance job in 2022<!--, making the <a href='https://jvkomplete.com' target='_blank'>JVKomplete</a> site-->. It did take longer than it should have to complete the site, but I did learn a lot of new things while working on it.</p>\
      <br />\
      <p>This year, I started learning more modern web technologies, including Node.js, React.js, React Native and SCSS.</p>\
      <br />\
      <p>I'm currently focusing on Full Stack Web Development and UI/UX Design, mostly doing freelance work, but I hope to expand my skillset and learn Desktop and Mobile App Development, and possibly get into Game Development as well.</p>\
      <a><button style='margin-top: 32px;' onclick='more(\"close\")'><i>&larr; Back</i><div class='nav-underline'></div></button></a>\
    ");

    $("html").css("overflowY", "hidden");

    $("#nav .background").css({"width":"116px", "height":"182px", "border-bottom-left-radius":"var(--radius-large)", "transform":"rotate(10deg)", "transition":"0.5s"});
    $("#nav .background img").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    $("#nav .background button").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    $("#nav .footer").css({"opacity":"0", "display":"none", "transition":"0.5s"});
    
    $("#home .main").css({"margin-left":"-200px", "opacity":"0", "transition":"0.2s"});

    $(".more").css({"opacity":"1", "left":"0", "z-index":"1", "transition":"0.5s"});
  } else if (text == "close") {
    $("#nav .background img").css("display", "block");
    $("#nav .background button").css("display", "block");
    $("html").css("overflowY", "auto");

    setTimeout(() => {
      $("#nav .background").css({"width":"50vw", "height":"100vh", "border-bottom-left-radius":"0", "transform":"none", "transition":"0.5s"});
      $("#nav .background img").css({"opacity":"1", "display":"block", "transition":"0.5s"});
      $("#nav .background button").css({"opacity":"1", "display":"block", "transition":"0.5s"});
      $("#nav .footer").css({"opacity":"0", "display":"none", "transition":"0.5s"});
      
      $("#home .main").css({"margin-left":"0", "opacity":"1", "transition":"0.5s"});

      $(".more").css({"opacity":"0", "left":"424px", "z-index":"-1", "transition":"0.2s"});

      setTimeout(() => {
        more();
      }, 500);
    }, 100);
  } else {
    $(".more .inner").html("");

    $("html").css("overflowY", "auto");
    $("#nav .background").css("transition", "0s");
    $("#nav .background img").css("transition", "0.3s background-position");
    $("#nav .background button").css("transition", "0.3s background-position");
    $("#nav .footer").css("transition", "0s");
    
    $("#home .main").css("transition", "0s");

    $(".more").css({"opacity":"0", "left":"424px", "z-index":"-1", "transition":"0s"});

    scrollE();
  }
}
