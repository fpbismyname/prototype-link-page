import Alpine from "alpinejs";
import { blocks, shareOptions } from "./datas";

document.addEventListener("alpine:init", () => {
    Alpine.data("appData", () => ({
        currentMenu: "home",
        blocks,
        shareOptions,
        init() {
            history.replaceState(null, "", window.location.pathname);
        },
        maskPrice(value) {
            return new Intl.NumberFormat("id-ID").format(value);
        },
        setMenu(selectedMenu) {
            this.currentMenu = selectedMenu;
            history.replaceState("", null, window.location.pathname);
        },
    }));
});
