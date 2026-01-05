import { listProducts, siteInfo } from "./siteInfo";

export type ListMenuType = Array<MenuItem>;
export type MenuItem = {
    label: string;
    href: string;
    icon: string;
    type?: string;
    external: boolean;
};

export type BlocksType = Array<{
    id: string;
    label: string;
    href: string;
    icon: string;
    sections: Array<{
        id: string;
        type: "header" | "links" | "footer" | "list-grid" | "header-horizontal";
        title: string;
        subtitle?: string;
        picture?: string;
        children?: Array<Record<string, any>>;
    }>;
}>;

export const blocks = [
    {
        id: crypto.randomUUID(),
        label: "Beranda",
        href: "home",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,
        sections: [
            {
                id: crypto.randomUUID(),
                type: "header",
                title: siteInfo.name,
                subtitle: siteInfo.slogan,
                picture: siteInfo.picture,
            },
            {
                id: crypto.randomUUID(),
                type: "links",
                children: siteInfo.socials,
            },
            {
                id: crypto.randomUUID(),
                type: "footer",
                title: `Copyright @ ${new Date().getFullYear()} - ${siteInfo.name}`,
            },
        ],
    },
    {
        id: crypto.randomUUID(),
        label: "Menu",
        href: "menu",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
        sections: [
            {
                id: crypto.randomUUID(),
                type: "header-horizontal",
                title: "Daftar menu",
                dropdown: {
                    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`,
                    children: listProducts.map((item) => ({ label: item.title, value: item.id })),
                },
            },
            {
                id: crypto.randomUUID(),
                type: "list-grid",
                children: listProducts,
            },
        ],
    },
] as BlocksType;
