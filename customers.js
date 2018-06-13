const customerDatabase = []
const customer = Object.create({}, {
    firstName: {
        value: '',
        enumerable: true,
        writable: true
    },
    lastName: {
        value: '',
        enumerable: true,
        writable: true
    },
    favoriteGenre: {
        value: '',
        enumerable: true,
        writable: true
    },
    Address: {
        value: '',
        enumerable: true,
        writable: true
    },
    cardNumber: {
        value: 0,
        enumerable: true,
        writable: true
    },
    bookShelf: {
        value: [],
        enumerable: true,
        writable: true
    },
    checkout: {
        value: function () { }
    },
    checkIn: {
        value: function () { }
    }
})


const customerCreate = (fName, lName, Aress, cNum, fGen) => {
    const person = Object.create(customer)

    person.firstName = fName
    person.lastName = lName
    person.Address = Aress
    person.cardNumber = cNum
    person.favoriteGenre = fGen
    customerDatabase.push(person)
}

customerCreate('Joey', 'Smith', '2323 erejje', 323432, 'horror')
customerCreate('Emily', 'Venturino', '242134 jdkdsdf', 534343, 'young adult') 
customerCreate('Aaron','Miller', '3243 dakfjdk', 534234, 'sci-fi')
customerCreate('Lauren', 'Richert', '3432 dkjfdf', 64654, 'biography')
console.log(customerDatabase);










    // {
    //     'firstName': 'Emily',
    //     'lastName':  'Venturino',
    //     'genre':    'young adult',
    //     'address': 'Nashville, TN',
    //     'cardNumber': '',
    //     'bookshelf': '',

    // },
    // {
    //     'firstName': 'Aaron',
    //     'lastName':  'Miller    ',
    //     'genre':    'sci-fi, philosophy, biography',
    //     'address': 'Nashville, TN',
    //     'cardNumber': '',
    //     'bookshelf': '',
    // },
    // {
    //     'firstName': 'Joey',
    //     'lastName':  'Smith',
    //     'genre':    'horror, science fiction',
    //     'address': 'Nashville, TN',
    //     'cardNumber': '',
    //     'bookshelf': '',
    // },
    // {
    //     'firstName': 'Lauren',
    //     'lastName':  'Richert',
    //     'genre':    'biography',
    //     'address': 'Nashville, TN',
    //     'cardNumber': '',
    //     'bookshelf': '',

    // }]
