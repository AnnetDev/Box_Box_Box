export const createAside = async () => {
    const asideLinks = document.getElementById("links");

    if (!asideLinks) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if(!contentData) {
        return;
    }

    const tyresLink = document.createElement("a");
    const tyresImg = document.createElement("img");
    const tyresLinkTitle = document.createElement("h2");

    tyresLink.classList.add("links__tyres");
    tyresLink.setAttribute("id", "links__tyres");
    tyresLink.setAttribute("href", contentData.asideSection.tyresLinkHref);
    tyresLink.setAttribute("target", "_blank");
    tyresLink.setAttribute("rel", "noopener noreferrer"); 
    tyresImg.classList.add("links__tyres-img");
    tyresImg.setAttribute("src", contentData.asideSection.tyresLinkImgSrc);
    tyresImg.setAttribute("alt", contentData.asideSection.tyresLinkImgAlt);
    tyresLinkTitle.classList.add("links__tyres-title");
    tyresLinkTitle.textContent = contentData.asideSection.tyresTitle;
    
    asideLinks.appendChild(tyresLink);
    tyresLink.appendChild(tyresImg);
    tyresLink.appendChild(tyresLinkTitle);
}