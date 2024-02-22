describe("App", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:5173/");
    });

    it("Should display the title", () =>{
        cy.get("h2").contains("Músicos Online");
    })
});