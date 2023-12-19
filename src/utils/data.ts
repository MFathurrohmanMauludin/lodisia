const CompanyBrand = () => [
    {
        id: 1,
        name: "Microsoft",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l11f3242118ff2add5d117cbf216f29ac578f6ba6.png"
    },
    {
        id: 2,
        name: "Google",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lfc4548375734de4aa0151bef377e72b1708b5072.png"
    },
    {
        id: 3,
        name: "Meta Platforms (Facebook)",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l0723013335c55d4193228fb0f1f0de4a4526aec0.png"
    },
    {
        id: 4,
        name: "Amazon",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l74c0fda1054b04bf3e2365d467e32a47e3feba7b.png"
    },
    {
        id: 5,
        name: "Apple",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l476432a3e85a0aa21c23f5abd2975a89b6820d63.png"
    },
    {
        id: 6,
        name: "Tesla",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lefd12553d6a4f7e57b3ac4f4927181d7a651d0d6.png"
    },
    {
        id: 7,
        name: "NVidia",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l088472395b2697109252aa04c2f12d53cf051d62.png"
    }
];

const ListPartnert = () => [
    {
        id: 1,
        name: "Kemenkumham",
        logo: "https://itjen.kemenkumham.go.id/wp-content/uploads/images/stories/data_gambar/berita_utama/Logo_Kemenkumham.jpg"
    },
    {
        id: 2,
        name: "KEMNAKER",
        logo: "https://kemnaker.go.id/assets/images/logo-color.png"
    },
    {
        id: 3,
        name: "World Health Organization",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/300px-World_Health_Organization_Logo.svg.png"
    },
    {
        id: 4,
        name: "Microsoft",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l11f3242118ff2add5d117cbf216f29ac578f6ba6.png"
    },
    {
        id: 5,
        name: "Google",
        logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lfc4548375734de4aa0151bef377e72b1708b5072.png"
    },
]

const ListWork = () => [
    {
        id: 1,
        name: 'Google Cloud Engineer',
        company: 'Google Indonesia', // mengambil data dari list perusahaan
        imgUrl: 'https://i.ibb.co/741z5Kz/google-hiring.jpg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.png',
        levelWork: 'Executive',
        styleWork: 'On-site',
        typeContract: 'Full-time',
        location: 'Jakarta Selatan',
        startDate: '12/18/2023',
        finishDate: '12/25/2023',
        jobDesc: 'deskripsi pekerjaan',
        generalCriteria: 'kriteria umum',
        importantCriteria: 'kriteria khusus/penting',
        regulations: 'persyaratan yang harus dipenuhi',
        disability: [
            {
                id: 1,
                name: "Buta Warna",
            },
            {
                id: 2,
                name: "Tuna daksa",
            }
        ],
        createdBy: 'Asuna Yuuki',
        createdAt: '12/14/2023',
    },
    {
        id: 2,
        name: 'Software Engineer',
        company: 'PT Tokopedia', // mengambil data dari list perusahaan
        imgUrl: 'https://i.ibb.co/PGR7CnK/Lowongan-Pekerjaan-Tokopedia.jpg',
        logo: 'https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp',
        levelWork: 'Mid-Senior Level',
        styleWork: 'On-site',
        typeContract: 'Full-time',
        location: 'Jakarta',
        startDate: '12/14/2023',
        finishDate: '12/21/2023',
        jobDesc: 'deskripsi pekerjaan',
        generalCriteria: 'kriteria umum',
        importantCriteria: 'kriteria khusus/penting',
        regulations: 'persyaratan yang harus dipenuhi',
        disability: [
            {
                id: 1,
                name: "Tuna daksa",
            }
        ],
        createdBy: 'Vladilena Milize',
        createdAt: '12/14/2023',
    },
    {
        id: 3,
        name: 'Frontend Developer',
        company: 'PT Shopee internasional Indonesia', // mengambil data dari list perusahaan
        imgUrl: 'https://i.ibb.co/jVyp5mW/shopee.jpg',
        logo: 'https://i.ibb.co/bryBvh9/logo-shopee.png',
        levelWork: 'Entry Level',
        styleWork: 'On-site',
        typeContract: 'Full-time',
        location: 'Jakarta Utara',
        startDate: '12/1/2023',
        finishDate: '12/19/2023',
        jobDesc: 'deskripsi pekerjaan',
        generalCriteria: 'kriteria umum',
        importantCriteria: 'kriteria khusus/penting',
        regulations: 'persyaratan yang harus dipenuhi',
        disability: [
            {
                id: 1,
                name: "Tuna daksa",
            },
            {
                id: 2,
                name: "Tuna rungu",
            },
        ],
        createdBy: 'Akihisa Yuko',
        createdAt: '12/14/2023',
    },
    {
        id: 4,
        name: 'Desain Grafis & Layout Buku',
        company: 'Penerbit Mega Cakrawala', // mengambil data dari list perusahaan
        imgUrl: 'https://i.ibb.co/CPcGhFf/poster-lowongan.jpg',
        logo: 'https://i.ibb.co/HXk4bY8/logo-mega-cakrawala-1.jpg',
        levelWork: 'Entry Level',
        styleWork: 'On-site',
        typeContract: 'Part-time',
        location: 'Yogyakarta',
        startDate: '12/1/2023',
        finishDate: '12/18/2023',
        jobDesc: 'deskripsi pekerjaan',
        generalCriteria: 'kriteria umum',
        importantCriteria: 'kriteria khusus/penting',
        regulations: 'persyaratan yang harus dipenuhi',
        disability: [
            {
                id: 1,
                name: "Tuna daksa",
            }
        ],
        createdBy: 'Akihisa Yuko',
        createdAt: '12/14/2023',
    },
    {
        id: 5,
        name: 'Desain Grafis & Layout Buku',
        company: 'Penerbit Mega Cakrawala', // mengambil data dari list perusahaan
        imgUrl: 'https://i.ibb.co/g6PrJtb/accounting-poster.jpg',
        logo: 'https://i.ibb.co/fXVD0DC/logo-win.png',
        levelWork: 'Entry Level',
        styleWork: 'On-site',
        typeContract: 'Casual',
        location: 'Yogyakarta',
        startDate: '12/1/2023',
        finishDate: '12/10/2023',
        jobDesc: 'deskripsi pekerjaan',
        generalCriteria: 'kriteria umum',
        importantCriteria: 'kriteria khusus/penting',
        regulations: 'persyaratan yang harus dipenuhi',
        disability: [
            {
                id: 1,
                name: "Tuna daksa",
            }
        ],
        createdBy: 'Akihisa Yuko',
        createdAt: '12/14/2023',
    },
];

const CompanyList = () => [
    {
        id: 1,
        name: 'PT Tokopedia',
        banner: 'https://i.ibb.co/f0cZkX8/tokopedia.jpg',
        logo: 'https://www.slawipos.com/wp-content/uploads/2023/07/Logo-Tokopedia-2023-hijau.webp',
        jobs: 1,
        posts: 5,
        about: 'Tokopedia merupakan salah satu situs jual beli online di Indonesia yang perkembangannya terhitung cepat dan memiliki tujuan untuk memudahkan setiap masyarakat',
    },
    {
        id: 2,
        name: 'PT Pertamina (Persero)',
        banner: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/PertaminaHO1.jpg/500px-PertaminaHO1.jpg',
        logo: 'https://static.republika.co.id/uploads/images/inpicture_slide/pertamina-_131128123540-120.jpg',
        jobs: 7,
        posts: 5,
        about: 'tentang perusahaan',
    },
    {
        id: 3,
        name: 'PT Kereta Api Indonesia',
        banner: 'https://emitennews.com/uploads/news/image_1675772735.png',
        logo: 'https://keretaapikita.com/wp-content/uploads/2020/09/Logo-Baru-PT-KAI.jpg',
        jobs: 4,
        posts: 3,
        about: 'tentang perusahaan',
    },
    {
        id: 4,
        name: 'PT PLN (Persero)',
        banner: 'https://www.tambang.co.id/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-06-at-13.05.51.jpeg',
        logo: 'https://pln24.files.wordpress.com/2013/07/perusahaan_listrik_negara.png',
        jobs: 4,
        posts: 3,
        about: 'tentang perusahaan',
    },
]

const PopularFieldWork = () => [
    {
        id: 1,
        name: 'IT & Software',
        icon: 'faCode'
    },
    {
        id: 2,
        name: 'Keuangan & Akuntasi',
        icon: 'faCalculator'
    },
    {
        id: 3,
        name: 'Desain & Arsitektur',
        icon: 'faPalette'
    },
    {
        id: 4,
        name: 'Pemasaran & Periklanan',
        icon: 'faMagnifyingGlassChart'
    },
    {
        id: 5,
        name: 'Kesehatan & Kecantikan',
        icon: 'faHandHoldingMedical'
    }
];

const Oppurtunity = () => [
    {
        id: 1,
        icon: 'faHandHoldingHeart',
        title: 'Akses Gratis',
        description: 'Kami sediakan semua akses untuk para penyandang disabilitas secara gratis atau tidak dipungut biaya apapun.',
    },
    {
        id: 2,
        icon: 'faHandshake',
        title: 'Kredibilitas Tinggi',
        description: 'Untuk meningkatkan kepercayaan anda terhadap Lodisia, kami bekerja sama dengan Kemenkumham untuk menemukan perusahaan yang terdata secara resmi atau legal untuk Anda.',
    },
    {
        id: 3,
        icon: 'faStar',
        title: 'Dipercaya perusahaan terkemuka',
        description: 'Kepercayaan mereka terhadap kami telah membuka peluang yang luas pekerja bagi para penyandang disabilitas',
    },
    {
        id: 4,
        icon: 'faGlobe',
        title: 'Memiliki jejaring perusahaan yang luas',
        description: 'Dengan jejaring yang luas, kami dapat terus menyediakan lowongan pekerjaan bagi para penyandang disabilitas sampai saat ini.',
    },
    {
        id: 5,
        icon: 'faTrophy',
        title: 'Telah memiliki banyak penghargaan',
        description: 'Penghargaan yang kami dapatkan merupakan hasil perjuangan kami dalam membantu para penyandang disabilitas untuk melewati rintangan hidup dengan memberikan pekerjaan yang sesuai dengan kapabilitas dan keterbatasan.',
    },
    {
        id: 6,
        icon: 'faArrowTrendDown',
        title: 'Penurunan angka pengangguran lebih dari 5% setiap tahunnya',
        description: 'Melalui data yang kami terima dari Kemnaker, kami berhasil menurunkan angka pengangguran untuk para penyandang disabilitas.',
    },
]

const ListTestimony = () => [
    {
        id: 1,
        username: 'Anita Prasmawati',
        company: 'PT Shopee International Indonesia',
        profecy: 'Software Engineer',
        photo: "https://i.ibb.co/VM7nJxJ/Rectangle-2.png",
        story: `Awalnya saya berpikir bahwa kehidupan saya akan seperti ini hingga akhir hayat saya, tetapi tuhan berkehendak lain. 
        Saya mencoba untuk mempelajari pemrograman yang diketahui pekerjaan tersebut tidak mengharuskan banyak bergerak tetapi berpikir atau logika. 
        Setelah beberapa tahun silam, saya mencoba untuk mendaftar lowongan pekerjaan di Lodisia. Puji syukur tuhan, saya tidak menyangka dapat bekerja di salah satu perusahaan decacorn yang ada 
        di Indonesia. Terima kasih untuk tuhan dan Lodisia yang telah mengubah hidup saya.`,
        disability: [
            {
                id: 1,
                name: 'Tunarungu',
            },
            {
                id: 2,
                name: 'Tunawicara',
            },
            {
                id: 3,
                name: 'Tunadaksa',
            },
        ],
    },
    {
        id: 2,
        username: 'Sri Wahyuni',
        company: 'PT Pertamina (Persero)',
        profecy: 'Data Center Technician',
        photo: 'https://i.ibb.co/8rwj8n2/Rectangle-3.png',
        story: `Awalnya saya berpikir bahwa kehidupan saya akan seperti ini hingga akhir hayat saya, tetapi tuhan berkehendak lain. 
        Saya mencoba untuk mempelajari pemrograman yang diketahui pekerjaan tersebut tidak mengharuskan banyak bergerak tetapi berpikir atau logika. 
        Setelah beberapa tahun silam, saya mencoba untuk mendaftar lowongan pekerjaan di Lodisia. Puji syukur tuhan, saya tidak menyangka dapat bekerja di salah satu perusahaan decacorn yang ada 
        di Indonesia. Terima kasih untuk tuhan dan Lodisia yang telah mengubah hidup saya.`,
        disability: [
            {
                id: 1,
                name: 'Tunarungu',
            },
            {
                id: 2,
                name: 'Tunawicara',
            },
        ],
    },
    {
        id: 3,
        username: 'Budi Utomo',
        company: 'Google Indonesia',
        profecy: 'Customer Service',
        photo: 'https://i.ibb.co/92hVtpj/Rectangle-1.png',
        story: `Awalnya saya berpikir bahwa kehidupan saya akan seperti ini hingga akhir hayat saya, tetapi tuhan berkehendak lain. 
        Saya mencoba untuk mempelajari pemrograman yang diketahui pekerjaan tersebut tidak mengharuskan banyak bergerak tetapi berpikir atau logika. 
        Setelah beberapa tahun silam, saya mencoba untuk mendaftar lowongan pekerjaan di Lodisia. Puji syukur tuhan, saya tidak menyangka dapat bekerja di salah satu perusahaan decacorn yang ada 
        di Indonesia. Terima kasih untuk tuhan dan Lodisia yang telah mengubah hidup saya.`,
        disability: [
            {
                id: 1,
                name: 'Tunanetra',
            },
        ],
    },
]

export { CompanyBrand, CompanyList, ListPartnert, ListWork, PopularFieldWork, Oppurtunity, ListTestimony };