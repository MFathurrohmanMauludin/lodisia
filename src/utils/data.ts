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

const ListWork = () => [
    {
        id: 1,
        name: '',
        company: 1, // mengambil data dari list perusahaan
        createdAt: '',
    }
];

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

export { CompanyBrand, ListWork, PopularFieldWork, Oppurtunity };