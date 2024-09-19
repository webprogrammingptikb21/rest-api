<?php
$data = file_get_contents('asus.json');
$asus = json_decode($data, true);

$asus = $asus["Labtop"];
echo $asus[0]["productName"];
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar bg-dark border-bottom border-body navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class=" container-fluid">
            <a class="navbar-brand" href="#"><img src="./menu/img/logo_unm.jpg" width="100px" height="100px" alt="unm"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">All Menu</a>
                </div>
            </div>
        </div>
    </nav>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <h1>All Menu</h1>
            </div>
        </div>
        <div class="row mt-3">
            <?php foreach ($asus as $row) : ?>
                <div class="col-md-4 text-center">
                    <div class="card mb-3" style="width: 18rem;">
                        <img src="menu/img/<?= $row["image"] ?>" class="card-img-top" alt="labtop">
                        <div class="card-body">
                            <h5><?= $row["productName"] ?></h5>
                            <p class="card-text"><?= $row["description"] ?></p>
                            <h5>Rp <?= number_format($row["price"], 0, ',', '.') ?></h5>
                            <a href="#" class="btn btn-primary mt-2">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>