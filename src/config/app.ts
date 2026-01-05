import Alpine from "alpinejs";
import { blocks, shareOptions } from "./datas";

document.addEventListener("alpine:init", () => {
    Alpine.data("appData", () => ({
        currentMenu: "home",
        blocks,
        shareOptions,
        maskPrice(value) {
            return new Intl.NumberFormat("id-ID").format(value);
        },
        setMenu(selectedMenu) {
            this.currentMenu = selectedMenu;
        },
        copyLink() {
            navigator.clipboard.writeText(window.location.href);
            const copyButtonText = document.getElementById("copyButtonText");
            const prevCopyButtonText = "Salin link";
            const copyButtonEl = copyButtonText.parentElement as HTMLButtonElement;
            copyButtonEl.disabled = true;
            copyButtonText.innerText = "Disalin";

            if (copyButtonText.innerText == "Disalin") {
                setTimeout(() => {
                    copyButtonText.innerText = prevCopyButtonText;
                    copyButtonEl.disabled = false;
                }, 1000);
            }
        },
    }));
});
