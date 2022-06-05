const movies = [
    {
        poster: './assets/movie2.png',
        title: 'Red Notice',
        director: 'Rawson Marshall Thurber',
        writter: 'Rawson Marshall Thurber',
        cinematography: 'Markus Forderer',
        production: 'Flynn Picture Company Seven Bucks Productions Bad Version, Inc.',
        released: '(2021)',
        duration: '118 Min.',
        producers: 'Beau Flynn, Dany Garcia, Hiram Garcia',
        aired: 'November 12, 2021',
        distributor: 'Netflix',
        rate: '0.00',
        scores: [],
        genre: ['Action', 'Comedy', 'Thriller'],
        country: 'United States',
        language: 'English',
        rating: 'PG-13',
        p1: 'An Interpol agent successfully tracks down the world\'s most wanted art thief, with help from a rival thief. But nothing is as it seems, as a series of double-crosses ensue.',
        p2: 'When an Interpol-issued Red Notice the highest level warrant to hunt and capture the world\'s most wanted goes out, the FBI\'s top profiler John Hartley (Dwayne Johnson) is on the case. His global pursuit finds him smack dab in the middle of a daring heist where he\'s forced to partner with the world\'s greatest art thief Nolan Booth (Ryan Reynolds) in order to catch the world\'s most wanted art thief, "The Bishop" (Gal Gadot). The high-flying adventure that ensues takes the trio around the world, across the dance floor, trapped in a secluded prison, into the jungle and, worst of all for them, constantly into each other\'s company.'
    },
    {
        poster: './assets/movie9.png',
        title: 'Spiderman: No Way Home',
        director: 'Jon Watts',
        writter: 'Chris McKenna, Erik Sommers',
        cinematography: 'Mauro Fiore',
        production: 'Columbia Pictures, Marvel Studios, Pascal Pictures',
        released: '(2021)',
        duration: '148 Min.',
        producers: 'Kevin Feige, Amy Pascal',
        aired: 'December 15, 2021',
        distributor: 'Sony Pictures Releasing',
        rate: '8.30',
        scores: [8.30],
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        country: 'United States',
        language: 'English',
        rating: 'PG-13',
        p1: 'Spider-Man No Way Home mengisahkan tentang kegelisahan Peter Parker yang diperankan Tom Holland karena difitnah.Siapa pemfitnahnya? ialah Mysterio (Jake Gyllenhaal) yang malah mati duluan sebelum masalah bisa diluruskan.Mysterio memang sudah meninggal, akan tetapi fitnah yang dilempar ke publik berkembang menjadi banyak spekulasi yang tudingan kepada Peter Parker.Berita tentang tudingan demi tudingan tentang Parker yang identitasnya telah terbongkar tersebut kian memanas karena adanya campur tangan koran The Daily Bugle yang dipimpin J Jonah Jameson (JK Simmons).Dalam sebuah berita yang diterbitkan, Spider-Man alias Peter Parker ini difitnah menjadi dalang pembunuhan Mysterio.Karena hal ini, Parker tak lagi punya privasi. Rumahnya selalu menjadi objek amatan masyarakat dan media. Kondisi tersebut membuat Peter Parker tersudutkan. Secara tidak langsung, rumor tersebut pun mempengaruhi hubungan Peter dengan MJ (Zendaya) yang baru berusia seumur jagung.',
        p2: 'Peter Parker gamang dan membuka pintu lintas semesta Karena tidak kuat menahan cemoohan-cemoohan sendirian, Parker pun mulai mencari ide untuk bisa meluruskan rumor tak sedap yang berkembang. Ia mendatangi Doctor Strange yang pernah sama-sama berjuang melawan Thanos. Ia meminta kepada Doctor Strange agar membuat masyarakat lupa jika dirinya adalah Spider-Man. Strange (Benedict Cumberbatch) sebenarnya sempat diberi peringatan oleh Wong (Benedict Wong), tapi ia tetap memilih membantu Peter Parker. Ketika Strange mulai merapal mantra, Parker malah berulah. Ia berubah pikiran. Hal tersebut membuat Strange marah dan malah salah dalam merapal mantra. Kesalahan ini membuat batas lintas-semesta menjadi terbuka dan menarik sejumlah pihak dari semesta lain masuk dalam semesta yang saat ini dihuni Peter dan Strange. Dan benar saja, mahluk-mahluk tersebut memburu Peter Parker. Padahal, Peter Parker yang ada di dunia ini bukanlah yang mereka kenal. Doctor Strange memerintahkan Parker mengumpulkan mahluk-mahluk tersebut untuk nantinya dikembalikan ke alam asli mereka. Namun ada saja tantangan yang harus dihadapi.'
    },
    {
        poster: './assets/image 2.png',
        title: 'Morbius',
        director: '',
        writter: '',
        cinematography: '',
        production: '',
        released: '(2022)',
        duration: '108 Min.',
        producers: 'Avi Arad, Emma Ludbrook, Matt Tolmach, Lucas Foster',
        aired: 'March 30, 2022',
        distributor: '',
        rate: '5.20',
        scores: [5.20],
        genre: ['Action', 'Horror'],
        country: '',
        language: 'English',
        rating: 'PG-13',
        p1: 'Film Morbius berpusat di sekitar karakter Dr. Michael Morbius, ahli biologi dan biokimia Yunani yang menderita penyakit darah langka. Dia mencoba obat berbahaya yang justru mengubahnya jadi seperti vampir.Saat bepergian ke New York, Morbius berusaha menemukan obat untuk penyakit langka yang dideritanya seumur hidup. Untuk melakukan itu, Morbius bereksperimen dengan pengobatan radikal yang melibatkan DNA kelelawar vampir dan terapi kejut listrik.',
        p2: 'Alih-alih sembuh, Morbius malah menderita penyakit yang jauh lebih buruk, membuatnya haus darah seperti vampir. Namun dia juga mendapatkan kemampuan persis makhluk supernatural tersebut.'
    },
    {
        poster: './assets/image 4.png',
        title: 'Venom',
        director: '',
        writter: '',
        cinematography: '',
        production: '',
        released: '(2022)',
        duration: '108 Min.',
        producers: 'Avi Arad, Emma Ludbrook, Matt Tolmach, Lucas Foster',
        aired: 'March 30, 2022',
        distributor: '',
        rate: '5.20',
        scores: [5.20],
        genre: ['Action', 'Horror'],
        country: '',
        language: 'English',
        rating: 'PG-13',
        p1: 'Film Morbius berpusat di sekitar karakter Dr. Michael Morbius, ahli biologi dan biokimia Yunani yang menderita penyakit darah langka. Dia mencoba obat berbahaya yang justru mengubahnya jadi seperti vampir.Saat bepergian ke New York, Morbius berusaha menemukan obat untuk penyakit langka yang dideritanya seumur hidup. Untuk melakukan itu, Morbius bereksperimen dengan pengobatan radikal yang melibatkan DNA kelelawar vampir dan terapi kejut listrik.',
        p2: 'Alih-alih sembuh, Morbius malah menderita penyakit yang jauh lebih buruk, membuatnya haus darah seperti vampir. Namun dia juga mendapatkan kemampuan persis makhluk supernatural tersebut.'
    },
    {
        poster: './assets/image 5.png',
        title: 'Uncharted',
        director: '',
        writter: '',
        cinematography: '',
        production: '',
        released: '(2022)',
        duration: '116 Min.',
        producers: 'Charles Roven, Avi Arad, Alex Gartner, Arthur Marcum, Ari Arad',
        aired: 'February 16, 2022',
        distributor: '',
        rate: '6.40',
        scores: [6.40],
        genre: ['Action'],
        country: '',
        language: 'English',
        rating: 'PG-13',
        p1: 'Uncharted menceritakan dua saudara kandung, Nathan dan Sam Drake yang ditangkap karena mencuri peta pertama yang dibuat setelah ekspedisi Magellan.Sam berhasil melarikan diri, tetapi Nathan dikembalikan ke panti asuhan mereka. Sebelum berpisah, Sam memberikan cincin milik leluhur mereka kepada Nathan. Ia juga berjanji akan kembali.Lima belas tahun kemudian, Nathan (Tom Holland) bekerja sebagai bartender sekaligus pencopet.Ia lalu bertemu Victor \'Sully\' Sullivan (Mark Wahlberg) yang sempat bekerja sama dengan Sam dalam mencari harta karun yang disembunyikan kru Magellan.Sully menjelaskan kepada Nathan bahwa Sam menghilang saat membantunya mencuri buku harian Juan Sebastian Elcano. Nathan lalu setuju bergabung dengan Sully untuk mencari harta karun sekaligus menemukan saudaranya. Nathan dan Sully memulai perjalanan dengan mencuri salib emas yang terkait dengan kru Magellan.',
        p2: 'Namun mereka harus berhadapan dengan Santiago Moncada keturunan terakhir keluarga Moncada dan Jo Braddock, tentara yang disewa keluarga Moncada Nathan dan Sully lalu melanjutkan perjalanan Barcelona, tempat harta karun itu seharusnya disembunyikan. Namun Nathan menemukan peta yang menunjukkan bahwa harta karun itu berada di Filipina. Nathan dan Sully kembali melanjutkan perjalanan untuk mencari harta karun, tetapi mereka kembali diganggu oleh Braddock.'
    }
];

export {movies};