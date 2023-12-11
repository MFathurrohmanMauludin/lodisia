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

export { CompanyBrand, ListWork, PopularFieldWork };