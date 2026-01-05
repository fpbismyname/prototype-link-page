import Alpine from "alpinejs";
import { blocks } from "./datas";

document.addEventListener("alpine:init", () => {
    Alpine.data("appData", () => ({
        currentMenu: "home",
        blocks,
        maskPrice(value) {
            return new Intl.NumberFormat("id-ID").format(value);
        },
        setMenu(selectedMenu) {
            this.currentMenu = selectedMenu;
        },
        copyLink() {
            console.log("copylinks");
        },
        shareToWhatsapp() {
            console.log("share to Whatsapp");
        },
    }));
});
