export const trackElementsCreator = async () => {
    const trackElementsSection = document.getElementById("track-elements");

    if (!trackElementsSection) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if(!contentData.trackElementsSection) {
        return;
    }

    const sectionTitle = document.createElement("h2");
    const trackElementsList = document.createElement("ul");

    sectionTitle.classList.add("track-elements__title");
    sectionTitle.textContent = contentData.trackElementsSection.title;
    trackElementsList.classList.add("track-elements__list");

    trackElementsSection.appendChild(sectionTitle);
    trackElementsSection.appendChild(trackElementsList);

    for (const element of contentData.trackElementsSection.elements) {
        const elementItem = document.createElement("li");
        const textContentWrapper = document.createElement("div");   
        const elementTitle = document.createElement("h3");
        const elementDescription = document.createElement("p");

        elementItem.classList.add("track-elements__list-item");
        textContentWrapper.classList.add("track-elements__card-text-wrapper");
        elementTitle.classList.add("track-elements__card-title");
        elementTitle.textContent = element.title;
        elementDescription.classList.add("track-elements__card-description");
        elementDescription.textContent = element.description;

        if (element.image) {
            const svgResponse = await fetch(element.image);
            const svgText = await svgResponse.text();

            elementItem.insertAdjacentHTML("afterbegin", svgText);
        }

        elementItem.appendChild(textContentWrapper);
        textContentWrapper.appendChild(elementTitle);
        textContentWrapper.appendChild(elementDescription);


    trackElementsList.appendChild(elementItem);
    };
}