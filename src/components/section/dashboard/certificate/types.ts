import { ImageCertificate } from "../../../../assets/images"

export interface certificate {
    id: number | string
    title: string
    desc: string
    image: string
}


export const dataCertificate: certificate[] = [
    {
        id: 1,
        title: "Dicoding Javascript Dasar",
        desc: "Sertifikat ini diperoleh setelah menyelesaikan kursus JavaScript dasar di Dicoding, mencakup konsep dasar pemrograman dan penerapan JavaScript dalam pengembangan aplikasi.",
        image: ImageCertificate.dicodingJs
    },
    {
        id: 2,
        title: "Dicoding React JS",
        desc: "Sertifikat ini diberikan setelah berhasil memahami dan mengaplikasikan konsep React JS untuk membangun antarmuka pengguna yang dinamis dan responsif.",
        image: ImageCertificate.dicodingReact
    },
    {
        id: 3,
        title: "Web Design Amikom",
        desc: "Sertifikat ini diperoleh setelah mengikuti lomba desain web di Amikom, menunjukkan kemampuan dalam menciptakan desain web yang inovatif dan menarik.",
        image: ImageCertificate.iitc
    },
];
