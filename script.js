function generate(){
    var quotes = {
       "William Shakespeare" : '"Love sees with the heart and not with the eyes."',
       "Edgar Allan Poe" : '"I was never insane except upon occasions when my heart was touched."',
       "Nicholas Sparks" : '"You always have a choice. It´s just that some people make the wrong one."',
       "Theodore Roosevelt" : '"Believe you can and you’re halfway there. "',
       "Oscar Wilde" : '"Every saint has a past, and every sinner has a future."',
       "Walt Disney" : '"Laughter is timeless. Imagination has no age. And dreams are forever."',
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}