// $(function () {


// $.ajax({
//     type: "GET",
//     url: "https://jsonplaceholder.typicode.com/todos",
//     dataType: "json",
//     // Доступні типи даних: text, html, xml, json, jsonp i script.
//     success: function(data) {
//         console.log(data)
//     }
// })

//     $('#btn').on('click', function () {
//         $.ajax({
//             type: "GET",
//             url: "https://jsonplaceholder.typicode.com/todos",
//             dataType: "json",
//             data: {
//                 userId: $('#userid').val().trim()
//             },
//             success: function(data) {
//                 if (data.length > 0) console.log(data)
//                 else console.log("Інформації по даному запиту не знайдено")
//             }
//         })
//     })
// })


// https://www.omdbapi.com/?i=tt3896198&apikey=43d09314

$(function () {
    $('#btn').on('click', function () {
        let filmTitle = $("#filmTitle").val();
        let filmType = $("#filmType").val();

        $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/",
            dataType: "json",
            data: {
                apikey: "43d09314",
                s: filmTitle,
                type: filmType,
            },
            success: function (data) {
                console.log(data)
                $("#film-list").empty()
                data.Search.forEach(element => {
                    $("#film-list").append(`
                        <div class="card" style="width: 12rem;">
                        <img src="${element.Poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${element.Type}</p>
                            <h5 class="card-title">${element.Title}</h5>
                            <p class="card-text">${element.Year}</p>
                            <a href="" class="btn btn-primary">Details</a>
                        </div>
                        </div>
                    `)
                });
            },
            error: function (error) {
                console.log("Error:", error)
            }
        })
    })

})