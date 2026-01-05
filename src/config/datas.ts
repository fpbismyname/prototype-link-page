import { listProducts, siteInfo } from "./siteInfo";

export type ListMenuType = Array<MenuItem>;
export type MenuItem = {
    label: string;
    href: string;
    icon: string;
    type?: string;
    external: boolean;
    onClick?: () => void;
};

export type BlocksType = Array<{
    id: string;
    label: string;
    href: string;
    icon: string;
    sections: Array<{
        id: string;
        icon?: string;
        type: "header" | "links" | "footer" | "list-grid" | "header-horizontal" | "fab";
        title: string;
        href?: string;
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
            {
                id: crypto.randomUUID(),
                href: "#",
                type: "fab",
                icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-icon lucide-arrow-up"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,
            },
        ],
    },
] as BlocksType;

export const shareOptions = [
    {
        label: "Bagikan Link",
        external: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share2-icon lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`,
        onClick() {
            const currentUrl = window.location.href;
            const textCopyButtonElement = document.getElementById("Bagikan Link");
            if (navigator.share) {
                navigator.share({
                    title: siteInfo.name,
                    text: siteInfo.description,
                    url: currentUrl,
                });
            } else {
                navigator.clipboard.writeText(currentUrl);
                textCopyButtonElement.innerText = "Disalin";
                const copyButtonElement = textCopyButtonElement.parentElement as HTMLButtonElement;
                copyButtonElement.disabled = true;
                setTimeout(() => {
                    textCopyButtonElement.innerText = "Bagikan Link";
                    copyButtonElement.disabled = false;
                }, 1000);
            }
        },
    },
    {
        label: "Bagikan ke Whatsapp",
        external: true,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
</svg>`,
        type: "",
        href: `https://wa.me/?text='${encodeURI(window.location.href)}'`,
    },
] as ListMenuType;
