function tampilkanSemuaMenu() {
  $.getJSON("asus.json", function (data) {
    var laptops = $.extend(true, [], data.Labtop);
    $.each(laptops, function (index, labtop) {
      $("#daftar-menu").append(
        '<div class="col-md-4 text-center"><div class="card mb-3" style="width: 18rem;"><img src="menu/img/' +
          labtop.image +
          '" class="card-img-top" alt="labtop"><div class="card-body"><h5>' +
          labtop.productName +
          '</h5><p class="card-text">' +
          labtop.description +
          "</p><h5>Rp." +
          labtop.price +
          '</h5> <a href="#" class="btn btn-primary mt-2">Pesan Sekarang</a> </div></div></div>'
      );
    });
  });
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function (e) {
  e.preventDefault();
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON("data/asus.json", function (data) {
    var laptops = $.extend(true, [], data.Labtop);
    let content = "";

    $.each(laptops, function (index, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4 text-center"><div class="card mb-3" style="width: 18rem;"><img src="menu/img/' +
          data.image +
          '" class="card-img-top" alt="labtop"><div class="card-body"><h5>' +
          data.productName +
          '</h5><p class="card-text">' +
          data.description +
          "</p><h5>Rp." +
          data.price +
          '</h5> <a href="#" class="btn btn-primary mt-2">Pesan Sekarang</a> </div></div></div>';
      }
    });
    $("#daftar-menu").html(content);
  });
});
