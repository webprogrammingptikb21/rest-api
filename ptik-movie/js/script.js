function searcMovie() {
  $("#movie-list").html("");
  $.ajax({
    url: "https://api.themoviedb.org/3/search/movie", // URL endpoint TMDB yang benar
    type: "get",
    dataType: "json",
    data: {
      api_key: "7c2ce6576ef91731f126b4972a8bce25",
      query: $("#search-input").val(),
    },
    success: function (result) {
      if (result.results.length > 0) {
        let movies = result.results;
        $.each(movies, function (index, data) {
          $("#movie-list").append(
            `<div class="col-md-4">
                <div class="card mb-3">
                    <img src="https://image.tmdb.org/t/p/w500/` +
              data.poster_path +
              `" class="card-img-top" alt="` +
              data.title +
              `">
                    <div class="card-body">
                    <h5 class="card-title">` +
              data.title +
              `</h5>
              <a href="#" class="card-link card-Link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="` +
              data.id +
              `">See Details</a>
              `
          );
        });
        $("#search-input").val("");
      } else {
        $("#movie-list").html(
          `
      <div class="col">
        <h1 class="text-center text-danger">Error: ` +
            result.Error +
            `</h1>
        <p class="text-center">Maaf, film yang Anda cari tidak ditemukan.</p>
      </div>`
        );
      }
    },
    error: function (xhr, status, error) {
      console.error("Error: " + status + " - " + error); // Menampilkan error jika request gagal
    },
  });
}

$("#search-button").on("click", function () {
  searcMovie();
});

$("#search-input").on("keyup", function (e) {
  if (e.keyCode === 13) {
    searcMovie();
  }
});
$(document).on("click", ".card-Link", function () {
  const movieId = $(this).data("id");
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    type: "get",
    dataType: "json",
    data: {
      api_key: "7c2ce6576ef91731f126b4972a8bce25",
    },
    success: function (movie) {
      $("#exampleModalLabel").text(movie.title);
      $("#modal-body").html(`
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid mb-3" alt="${movie.title}">
                </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><p><strong>Release Date:</strong> ${movie.release_date}</p></li>
                            <li class="list-group-item"><p><strong>Runtime:</strong> ${movie.runtime} minutes</p></li>
                            <li class="list-group-item"><p><strong>Rating:</strong> ${movie.vote_average}/10</p></li>
                            <li class="list-group-item"><p><strong>Overview:</strong> ${movie.overview}</p></li>
                        </ul>
                    </div>
            </div>
        </div>
      `);
    },
    error: function (xhr, status, error) {
      console.error("Error: " + status + " - " + error);
    },
  });
});
