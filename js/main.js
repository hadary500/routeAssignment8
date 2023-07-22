var quetes=[
    {
        queteDesc:"Be yourself; everyone else is already taken.",
        writer:" Oscar Wilde"
    },
    {
        queteDesc:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        writer:"Albert Einstein "
    },
    {
        queteDesc:"So many books, so little time. ",
        writer:" Frank Zappa "
    },
    {
        queteDesc:"You only live once, but if you do it right, once is enough. ",
        writer:" Mae West "
    },
    {
        queteDesc:"In three words I can sum up everything I've learned about life: it goes on.",
        writer:" Robert Froste"
    },
    {
        queteDesc:"A friend is someone who knows all about you and still loves you.",
        writer:"Elbert Hubbard"
    },
    {
        queteDesc:"We accept the love we think we deserve.",
        writer:" Oscar Wilde"
    },
    {
        queteDesc:"Live as if you were to die tomorrow. Learn as if you were to live forever. ",
        writer:"  Mahatma Gandhi "
    },
    {
        queteDesc:" A day without sunshine is like, you know, night. ",
        writer:"  Steve Martin "
    },
    {
        queteDesc:"Never put off till tomorrow what may be done day after tomorrow just as well. ",
        writer:" Mark Twain "
    },
    {
        queteDesc:"That which does not kill us makes us stronger. ",
        writer:"Friedrich Nietzsche "
    },
]

function changeQuete(){
    var cartona = ""
    for (var i=0;i<quetes.length;i++){
        var x = Math.floor(Math.random()*quetes.length)  
        cartona=`
        <p class="m-3 fs-3">"${quetes[x].queteDesc}"</p>
        <p class=" fs-3">-${quetes[x].writer}</p>
        
        `
    }
    document.getElementById('demo').innerHTML=cartona
    }