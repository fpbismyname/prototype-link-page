import type { MenuItem } from "./datas";

export interface SiteInfoInterface {
    name: string;
    description: string;
    slogan: string;
    picture: string;
    socials: Array<MenuItem>;
}

export type ListMenuType = Array<{
    name: string;
    price: number;
    picture: string;
}>;

export type ListProductsType = Array<{
    id: string;
    title: string;
    description: string;
    image: Array<string>;
}>;

export const siteInfo = {
    name: "Selama kopi",
    description: "Kopi selamanya dari cianjur kota",
    slogan: "Ngopi selalu dan selamanya",
    picture: "/brand/logo.jpg",
    bgCover: "/brand/cover-bg.jpg",
    numberWhatsapp: "0895404545040",
    linkMaps: "https://google.maps.com",
    socials: [
        {
            label: "Reservasi",
            href: "https://wa.me/0895404545040",
            type: "btn-secondary",
            external: true,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>`,
        },
        {
            label: "Lokasi kami",
            href: "https://wa.me/0895404545040",
            type: "",
            external: true,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>`,
        },
        {
            label: "Instagram",
            href: "https://instagram.com/selamacafe",
            type: "",
            external: true,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.9 2.9 0 0 0-1.08.703a2.9 2.9 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.9 2.9 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.9 2.9 0 0 0-.703-1.08a2.9 2.9 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122s-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06s-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153a4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12s.01-3.056.06-4.122s.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2" />
</svg>`,
        },
        {
            label: "Tiktok",
            href: "https://tiktok.com/selamacafe",
            type: "",
            external: true,
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
	<path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
</svg>`,
        },
    ] as Array<MenuItem>,
};

export const listProducts = [
    {
        id: "coffee",
        title: "Coffee",
        description: "Hot & classic coffee based drinks",
        image: ["/list-menu/menu1.jpg", "/list-menu/menu2.jpg"],
    },
    {
        id: "milk-based-coffee",
        title: "Milk Based Coffee",
        description: "Coffee mixed with milk and flavor",
        image: ["/list-menu/menu3.jpg"],
    },
    {
        id: "manual-brew",
        title: "Manual Brew",
        description: "Hand-brewed single origin coffee",
        image: ["/list-menu/menu4.jpg", "/list-menu/menu5.jpg"],
    },
    {
        id: "non-coffee",
        title: "Non Coffee",
        description: "No caffeine drinks",
        image: ["/list-menu/menu6.jpg"],
    },
    {
        id: "breeds-and-snacks",
        title: "Breads & Snacks",
        description: "Fresh bakery and light snacks",
        image: ["/list-menu/menu7.jpg"],
    },
] as ListProductsType;
