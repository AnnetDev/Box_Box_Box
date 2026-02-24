export const heroCreator = async () => {
    const hero = document.getElementById("hero");

    if (!hero) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if (!contentData || !contentData.heroSection) {
        return;
    }

    const heroContentWrapper = document.createElement("div");

    const heroTitle = document.createElement("h1");
    const heroSubtitle = document.createElement("h2");
    const heroDescription = document.createElement("p");
    const subtitleContainer = document.createElement("div");
    const logoImg = document.createElement("img");
    const arrowBtn = document.createElement("a");
    const exploreBtn = document.createElement("a");

    const arrowSvg = `<svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="m0 4.2 1.24-1.2 3.76 3.62 3.76-3.62 1.24 1.2-5 4.8-5-4.8Z" fill="#e9e9e9" />
                    </svg>`

    heroContentWrapper.classList.add("hero__content-wrapper");
    heroContentWrapper.classList.add("container");

    heroTitle.classList.add("hero__title");
    heroTitle.textContent = contentData.heroSection.title;
    subtitleContainer.classList.add("hero__subtitle-container");
    heroSubtitle.classList.add("hero__subtitle");
    heroSubtitle.textContent = contentData.heroSection.subtitle;
    logoImg.classList.add("hero__subtitle-logo");
    logoImg.setAttribute("src", contentData.heroSection.imgSrc);
    logoImg.setAttribute("alt", contentData.heroSection.imgAlt);
    heroDescription.classList.add("hero__description");
    heroDescription.textContent = contentData.heroSection.description;
    exploreBtn.classList.add("hero__button");
    exploreBtn.classList.add("button");
    exploreBtn.setAttribute("href", "#race-terms");
    arrowBtn.classList.add("hero__arrow-btn");
    arrowBtn.classList.add("button");
    arrowBtn.setAttribute("href", "#race-terms");
    exploreBtn.textContent = "Explore F1";

    hero.appendChild(heroContentWrapper);
    heroContentWrapper.appendChild(heroTitle);
    heroContentWrapper.appendChild(subtitleContainer);
    subtitleContainer.appendChild(logoImg);
    subtitleContainer.appendChild(heroSubtitle);
    heroContentWrapper.appendChild(heroDescription);
    heroContentWrapper.appendChild(exploreBtn);
    heroContentWrapper.appendChild(arrowBtn);
    arrowBtn.innerHTML = arrowSvg; 
}
