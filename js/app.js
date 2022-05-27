(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (n) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let n = new Image();
      (n.onload = n.onerror =
        function () {
          e(2 == n.height);
        }),
        (n.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let n = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(n);
    });
})();

var mylatng = { lat: 45.038793, lng: 38.913182 };
var mapOptions = {
    center: mylatng,
    zoom: 7,
    mapTypeId: google.maps.mapTypeId.ROADMAP
};

//create Map

var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
