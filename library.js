
const bookDatabase = []
const books = Object.create({}, {
        author: {
            value: '',
            writable: true,
            enumerable: true
     },
        title: {
            value: '',
            writable: true,
            enumerable: true
     },
        genre: {
            value: '',
            writable: true,
            enumerable: true
    },
        language: {
            value: '',
            writable: true,
            enumerable: true
    },
        year: {
            value: '',
            writable: true,
            enumerable: true
    },
        isbn: {
            value: '',
            writable: true,
            enumerable: true
    },
        checkedOut: {
            value: '',
            writable: true,
            enumerable: true
    },
        dueDate: {
            value: '',
            writable: true,
            enumerable: true
    }})

    const bookCreate = (author, title, genre, language, year, ISBN, checkedOut) => {
        const book = Object.create(books)

        book.author = author
        book.title = title  
        book.genre = genre
        book.language = language
        book.year = year
        book.ISBN = ISBN
        book.checkedOut = false
        bookDatabase.push(book)
    }

    bookCreate('Stephen King', 'Salems Lot', 'horror', 'english','1991',43234)

    console.log(bookDatabase)
    // bookCreate('Bram Stoker','Dracula','horror','english')

        

    let aBunchOfBooks = [
        
        {
        'author': 'Stephen King',
        'title':  'Salems Lot',
        'genre':    'horror',
        'language': 'english',
        'year': '1991',
        'ISBN': '43234',
        'checkout': '',
        'DueDate':  ''
    },
    {
        'author': 'Bram Stoker',
        'title':  'Dracula',
        'genre':    'horror',
        'language': 'english',
        'year': '1986',
        'ISBN': '44442',
        'checkout': '',
        'DueDate':  ''
    },
    {
        'author': 'Thomas Harris',
        'title':  'Silence of the Lambs',
        'genre':    'horror',
        'language': 'english',
        'year': '2002',
        'ISBN': '43544',
        'checkout': '',
        'DueDate':  ''
    },
    {
        'author': 'Anne Rice',
        'title':  'Interview with a Vampire',
        'genre':    'horror',
        'language': 'english',
        'year': '2004',
        'ISBN': '43998',
        'checkout': '',
        'DueDate':  ''
    },
    {
        'author': 'Jay Anson',
        'title':  'Amityville Horror',
        'genre':    'horror',
        'language': 'english',
        'year': '1978',
        'ISBN': '43257',
        'checkout': '',
        'DueDate':  ''
    }]
    for(var i = 0; i < aBunchOfBooks.length; i++) {
        bookCreate(aBunchOfBooks[i]["author"],aBunchOfBooks[i]["title"],aBunchOfBooks[i]["genre"],aBunchOfBooks[i]["language"],aBunchOfBooks[i]["year"],aBunchOfBooks[i]["ISBN"])
    }
    const romanceDatabase = [
        {
            'author': 'Jane Austen',
            'title':  'Pride and Prejudice',
            'genre':    'romance',
            'language': 'english',
            'year': '1813',
            'ISBN': '33345',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Nicholas Sparks',
            'title':  'The Notebook',
            'genre':    'romance',
            'language': 'english',
            'year': '1996',
            'ISBN': '33325',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Margaret Mitchell',
            'title':  'Gone With The Wind',
            'genre':    'romance',
            'language': 'english',
            'year': '1936',
            'ISBN': '33398',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Louisa May Alcott ',
            'title':  'Little Women',
            'genre':    'romance',
            'language': 'english',
            'year': '1868',
            'ISBN': '33367',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Sara Gruen',
            'title':  'Water for Elephants',
            'genre':    'romance',
            'language': 'english',
            'year': '2006',
            'ISBN': '33388',
            'checkout': '',
            'DueDate':  ''
        }]
    
    const biographyDatabase = [
        {
            'author': 'Anne Frank',
            'title':  'Diary of a Young Girl',
            'genre':    'biography',
            'language': 'english',
            'year': '1947',
            'ISBN': '55589',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Jeannette Walls',
            'title':  'The Glass Castle',
            'genre':    'biography',
            'language': 'english',
            'year': '2005',
            'ISBN': '55564',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Mitch Albom',
            'title':  'Tuesdays with Morrie',
            'genre':    'biography',
            'language': 'english',
            'year': '1997',
            'ISBN': '55532',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'Elizabeth Gilbert',
            'title':  'Eat Pray Love',
            'genre':    'biography',
            'language': 'english',
            'year': '2006',
            'ISBN': '55500',
            'checkout': '',
            'DueDate':  ''
        },
        {
            'author': 'David Sedaris',
            'title':  'Me Talk Pretty One Day',
            'genre':    'biography',
            'language': 'english',
            'year': '2000',
            'ISBN': '55531',
            'checkout': '',
            'DueDate':  ''
        }]  
    