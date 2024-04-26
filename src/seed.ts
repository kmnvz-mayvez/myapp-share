export const seedImage: string[] = [
    'https://res.cloudinary.com/diaej365u/image/upload/c_scale,w_400/v1713749566/lele_n0mwa0.jpg',
    'https://res.cloudinary.com/diaej365u/image/upload/c_scale,w_400/v1713750566/mas_tkuvxv.jpg',
    'https://res.cloudinary.com/diaej365u/image/upload/c_scale,w_400/v1713749745/patin_pfn49h.jpg',
    'https://res.cloudinary.com/diaej365u/image/upload/c_scale,w_400/v1713749500/nila_brklod.jpg',
    'https://res.cloudinary.com/diaej365u/image/upload/c_scale,h_250,w_400/v1713749746/gurame_e80j3l.jpg'
];

export const seedFishCategories: string[] = [
    'lele',
    'patin',
    'gurami',
    'nila',
    'mas',
    'bawal'
];

export const seedTags: string[] = [
    'benih',
    'konsumsi'
];

export const seedFirstNames = [
    'Adi', 'Agus', 'Ahmad', 'Ali', 'Amir', 'Andi', 'Anto', 'Ari', 'Budi', 'Dedi',
    'Dodi', 'Eko', 'Feri', 'Hadi', 'Iwan', 'Joko', 'Kris', 'Mulya', 'Nur', 'Rudi',
    'Sari', 'Siti', 'Siti', 'Suci', 'Tati', 'Tono', 'Wati', 'Yanto', 'Yuli', 'Yuni'
];

export const seedLastNames = [
    'Abdullah', 'Fitri', 'Hidayat', 'Kurniawan', 'Maulana', 'Pratama', 'Rahman',
    'Saputra', 'Setiawan', 'Siregar', 'Suhendra', 'Surya', 'Wibowo', 'Wijaya', 'Yulianto'
];

export const seedShopKeywords = [
    'Toko', 'Warung', 'Pusat', 'Depot', 'Gudang', 'Sentra', 'Jual', 'Beli', 'Online', 'Offline'
];

export const seedServices = [
    'penjualan ikan air tawar', 'pembelian ikan air tawar', 'pengiriman ikan air tawar', 'konsultasi ikan air tawar'
];

function generateRandomFullName(): string {
    const firstName = seedFirstNames[Math.floor(Math.random() * seedFirstNames.length)];
    const lastName = seedLastNames[Math.floor(Math.random() * seedLastNames.length)];
    return `${firstName} ${lastName}`;
}

const fullNames = [];
for (let i = 0; i < 10; i++) {
    fullNames.push(generateRandomFullName());
}

function generateRandomDescription(): string {
    const shopKeyword = seedShopKeywords[Math.floor(Math.random() * seedShopKeywords.length)];
    const fishType = seedFishCategories[Math.floor(Math.random() * seedFishCategories.length)];
    const service = seedServices[Math.floor(Math.random() * seedServices.length)];

    return `${shopKeyword} ikan air tawar ${fishType}, menyediakan layanan ${service}.`;
}

const descriptionShopSeed = [];
for (let i = 0; i < 5; i++) {
    descriptionShopSeed.push(generateRandomDescription());
}

export const shopDescriptionSeed = descriptionShopSeed;
export const fullNamesSeed = fullNames;
