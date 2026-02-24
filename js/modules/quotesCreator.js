export const quotesCreator = async () => {
    const quotesSection = document.getElementById("quotes");

    if (!quotesSection) {
        return;
    }

    const res = await fetch("js/contentData.json");
    const contentData = await res.json();

    if(!contentData.quotesSection) {
        return;
    }

    const sectionTitle = document.createElement("h2");
    const quotesList = document.createElement("ul");

    sectionTitle.classList.add("quotes__title");
    quotesList.classList.add("quotes__list");
    
    sectionTitle.textContent = contentData.quotesSection.title;

    quotesSection.appendChild(sectionTitle);
    quotesSection.appendChild(quotesList);
    

    contentData.quotesSection.quotes.forEach((quote) => {
        const blockquote = document.createElement("blockquote");
        const quoteItem = document.createElement("li");
        const meaningTiltle = document.createElement("p");
        const trumeaningContainer = document.createElement("div");

        quoteItem.classList.add("quotes__list-item");

        meaningTiltle.textContent = "True meaning:";
        blockquote.textContent = quote.blockquote;

        quotesList.appendChild(quoteItem);
        quoteItem.appendChild(blockquote);

        quoteItem.appendChild(trumeaningContainer);
        trumeaningContainer.appendChild(meaningTiltle);
        trumeaningContainer.appendChild(blockquote);

    });
}