export const createFooter = async () => {
    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    const footerNavLinksList = document.createElement("ul");
    footerNavLinksList.classList.add("footer__quick-links");

    footer.appendChild(footerNavLinksList);


    contentData.footerSection.quickLinks.forEach((link) => {
        const footerNavLinkItem = document.createElement("li");
        const footerNavLink = document.createElement("a");

        footerNavLinkItem.classList.add("footer__nav-link-item");
        footerNavLink.setAttribute("href", link.href);
        footerNavLink.textContent = link.label;

        footerNavLinkItem.appendChild(footerNavLink);

        footerNavLinksList.appendChild(footerNavLinkItem);
    });

    const tyresLinkItem = document.createElement("li");
    const tyresLink = document.createElement("a");
    tyresLink.classList.add("footer__quick-links-item");
    tyresLink.setAttribute("href", "https://www.formula1.com/en/latest/article/pirelli-confirm-2026-tyre-compounds-as-f1-gets-set-for-a-new-era-of.6la0zKVsCYwWk9AAISz4Yw");
    tyresLink.textContent = "Tyres";
    tyresLink.setAttribute("target", "_blank");
    tyresLink.setAttribute("rel", "noopener noreferrer");

    footerNavLinksList.appendChild(tyresLinkItem);
    tyresLinkItem.appendChild(tyresLink);



    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer__links");

    footer.appendChild(footerLinks);

    contentData.footerSection.externalLinks.forEach((link) => {
        const footerLink = document.createElement("a");

        footerLink.textContent = link.label;
        footerLink.setAttribute("class", link.class);
        footerLink.setAttribute("href", link.href);
        footerLink.setAttribute("target", link.target);
        footerLink.setAttribute("rel", link.rel);

        footerLinks.appendChild(footerLink);

    });

};