// احصل على عنصر الإدخال من نوع الملف
var input = document.getElementById ('file-input');

// اضف حدث تغيير للعنصر
input.addEventListener ('change', function () {
  // احصل على الملف الذي اختاره المستخدم
  var file = this.files [0];

  // تحقق من نوع الملف
  if (file.type.startsWith ('image/')) {
    // إذا كان الملف صورة، أنشئ عنصر <img>
    var img = document.createElement ('img');

    // أنشئ عنوان URL مؤقت للملف
    var url = URL.createObjectURL (file);

    // اضبط خاصية src للعنصر <img> إلى عنوان URL المؤقت
    img.src = url;

    // أضف العنصر <img> إلى الصفحة
    document.body.appendChild (img);
  } else if (file.type.startsWith ('video/')) {
    // إذا كان الملف فيديو، أنشئ عنصر <video>
    var video = document.createElement ('video');

    // أنشئ عنوان URL مؤقت للملف
    var url = URL.createObjectURL (file);

    // اضبط خاصية src للعنصر <video> إلى عنوان URL المؤقت
    video.src = url;

    // اضبط خاصية controls للعنصر <video> إلى true لعرض أزرار التحكم
    video.controls = true;

    // أضف العنصر <video> إلى الصفحة
    document.body.appendChild (video);
  } else if (file.type.startsWith ('text/')) {
    // إذا كان الملف نص، أنشئ عنصر <p>
    var p = document.createElement ('p');

    // أنشئ كائن FileReader لقراءة محتوى الملف
    var reader = new FileReader ();

    // اضبط حدث load للكائن FileReader
    reader.onload = function () {
      // احصل على النص من الكائن FileReader
      var text = reader.result;

      // اضبط خاصية innerHTML للعنصر <p> إلى النص
      p.innerHTML = text;

      // أضف العنصر <p> إلى الصفحة
      document.body.appendChild (p);
    };

    // اقرأ الملف كنص
    reader.readAsText (file);
  } else {
    // إذا كان نوع الملف غير معروف، أظهر رسالة خطأ
    alert ('غير الملف يا روح امك');
  }
});

particlesJS("particles", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



var scrollToElement = function(el, ms){
    var speed = (ms) ? ms : 600;
    $('html,body').animate({
        scrollTop: $(el).offset().top
    }, speed);
}

$(document).ready(function() {
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var el = $(this).attr('href');
    scrollToElement(el);
  });
  
  $(window).scroll(function() {
    var x = $(window).scrollTop();

    if (x >= 42) {
      $("#navbar").fadeIn(300);
    } else {
      $("#navbar").fadeOut(300);
    }

  });
});




(function () {
   'use strict';
	
	// WAIT FOR ALL TO BE LOADED
	window.onload = function() {
		
		// add loaded class to html
		var root = document.documentElement;
		root.className += ' loaded';

		// TYPING EFFECT
		Typed.new('#typed', {
            stringsElement: document.getElementById('typed-strings'),
			loop: true,
			typeSpeed: 7,
			backSpeed: 2,
			startDelay: 1000,
			backDelay: 1200
        });
	}; // all loaded
	
	  
}());





/*
	PLUGINS
*/



! function(t, s, e) {
	"use strict";
	var i = function(t, s) {
		var i = this;
		this.el = t, this.options = {}, Object.keys(r).forEach(function(t) {
			i.options[t] = r[t]
		}), Object.keys(s).forEach(function(t) {
			i.options[t] = s[t]
		}), this.isInput = "input" === this.el.tagName.toLowerCase(), this.attr = this.options.attr, this.showCursor = !this.isInput && this.options.showCursor, this.elContent = this.attr ? this.el.getAttribute(this.attr) : this.el.textContent, this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, e && this.options.stringsElement instanceof e ? this.stringsElement = this.options.stringsElement[0] : this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
	};
	i.prototype = {
		constructor: i,
		init: function() {
			var t = this;
			t.timeout = setTimeout(function() {
				for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
				t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
			}, t.startDelay)
		},
		build: function() {
			var t = this;
			if (this.showCursor === !0 && (this.cursor = s.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)), this.stringsElement) {
				this.strings = [], this.stringsElement.style.display = "none";
				var e = Array.prototype.slice.apply(this.stringsElement.children);
				e.forEach(function(s) {
					t.strings.push(s.innerHTML)
				})
			}
			this.init()
		},
		typewrite: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.typeSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					var e = 0,
						r = t.substr(s);
					if ("^" === r.charAt(0)) {
						var o = 1;
						/^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
					}
					if ("html" === i.contentType) {
						var n = t.substr(s).charAt(0);
						if ("<" === n || "&" === n) {
							var a = "",
								h = "";
							for (h = "<" === n ? ">" : ";"; t.substr(s + 1).charAt(0) !== h && (a += t.substr(s).charAt(0), s++, !(s + 1 > t.length)););
							s++, a += h
						}
					}
					i.timeout = setTimeout(function() {
						if (s === t.length) {
							if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
							i.timeout = setTimeout(function() {
								i.backspace(t, s)
							}, i.backDelay)
						} else {
							0 === s && i.options.preStringTyped(i.arrayPos);
							var e = t.substr(0, s + 1);
							i.attr ? i.el.setAttribute(i.attr, e) : i.isInput ? i.el.value = e : "html" === i.contentType ? i.el.innerHTML = e : i.el.textContent = e, s++, i.typewrite(t, s)
						}
					}, e)
				}, e)
			}
		},
		backspace: function(t, s) {
			if (this.stop !== !0) {
				var e = Math.round(70 * Math.random()) + this.backSpeed,
					i = this;
				i.timeout = setTimeout(function() {
					if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
						for (var e = "";
							"<" !== t.substr(s - 1).charAt(0) && (e -= t.substr(s).charAt(0), s--, !(s < 0)););
						s--, e += "<"
					}
					var r = t.substr(0, s);
					i.attr ? i.el.setAttribute(i.attr, r) : i.isInput ? i.el.value = r : "html" === i.contentType ? i.el.innerHTML = r : i.el.textContent = r, s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
				}, e)
			}
		},
		shuffleArray: function(t) {
			var s, e, i = t.length;
			if (i)
				for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
			return t
		},
		reset: function() {
			var t = this;
			clearInterval(t.timeout);
			this.el.getAttribute("id");
			this.el.textContent = "", "undefined" != typeof this.cursor && "undefined" != typeof this.cursor.parentNode && this.cursor.parentNode.removeChild(this.cursor), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, this.options.resetCallback()
		}
	}, i["new"] = function(t, e) {
		var r = Array.prototype.slice.apply(s.querySelectorAll(t));
		r.forEach(function(t) {
			var s = t._typed,
				r = "object" == typeof e && e;
			s && s.reset(), t._typed = s = new i(t, r), "string" == typeof e && s[e]()
		})
	}, e && (e.fn.typed = function(t) {
		return this.each(function() {
			var s = e(this),
				r = s.data("typed"),
				o = "object" == typeof t && t;
			r && r.reset(), s.data("typed", r = new i(this, o)), "string" == typeof t && r[t]()
		})
	}), t.Typed = i;
	var r = {
		strings: ["These are the default values", "Try them", "Use your own!", ".."],
		stringsElement: null,
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		shuffle: !1,
		backDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	}
}(window, document, window.jQuery);





