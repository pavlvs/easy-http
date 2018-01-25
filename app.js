const http = new easyHTTP();

// http.get('https://jsonplaceholder.typicode.com/posts',
//     function (err, posts) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(posts);
//         }
//     });

// http.get('https://jsonplaceholder.typicode.com/posts/1',
//     function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });

// create the data

const data = {
    title: 'Custom foo',
    body: ' This is a quux baz'
};

// create post

// http.post('https://jsonplaceholder.typicode.com/posts',
//     data, function (err, post) {

//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         }
//     });

// Update post
http.put("https://jsonplaceholder.typicode.com/posts/1", data,
    function (err, post) { 
        if (err) {
            console.log(err);
        }
        else {
            console.log(post);
        }
    });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1',
    function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response);
        }
    });
