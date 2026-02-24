export const createRaceTermsSection = async () => {
    const receTermSection = document.getElementById("race-terms");

    if (!receTermSection) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if(!contentData.raceTermsSection) {
        return;
    }

    const receTermSectionTitle = document.createElement("h2");
    const receTermsList = document.createElement("ul");

    receTermSectionTitle.classList.add("race-terms__title");
    receTermsList.classList.add("race-terms__list");

    receTermSection.appendChild(receTermSectionTitle);
    receTermSection.appendChild(receTermsList);

    receTermSectionTitle.textContent = contentData.raceTermsSection.title;

    contentData.raceTermsSection.raceTerms.forEach(term => {
        const termItem = document.createElement("li");
        const termItemTitle = document.createElement("h3");
        const termItemDesc = document.createElement("p");

        termItem.classList.add("race-terms__list-item");
        termItemTitle.classList.add("race-terms__card-title");
        termItemDesc.classList.add("race-terms__card-description");

        receTermsList.appendChild(termItem);
        termItem.appendChild(termItemTitle);
        termItem.appendChild(termItemDesc);

        termItemTitle.textContent = term.termTitle;
        termItemDesc.textContent = term.termDescription;
    });
}