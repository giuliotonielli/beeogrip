(function () {
    const menuToggle = document.getElementById("menu-toggle");
    const siteNav = document.getElementById("site-nav");
    const siteHeader = document.getElementById("site-header");
    const navLinks = document.querySelectorAll("#site-nav a");

    function closeMenu() {
        if (!siteNav || !menuToggle) {
            return;
        }

        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    }

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", function () {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        navLinks.forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 900) {
                closeMenu();
            }
        });
    }

    if (siteHeader) {
        let lastScrollY = 0;

        window.addEventListener(
            "scroll",
            function () {
                const currentScrollY = window.scrollY || 0;
                const isDown = currentScrollY > lastScrollY;

                siteHeader.classList.toggle("is-scrolled", currentScrollY > 12);

                if (currentScrollY > 160 && isDown) {
                    siteHeader.classList.add("is-hidden");
                } else {
                    siteHeader.classList.remove("is-hidden");
                }

                lastScrollY = currentScrollY;
            },
            { passive: true }
        );
    }
})();