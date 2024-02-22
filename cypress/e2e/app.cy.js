describe("App", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:5173/");
    });

    it("Should display the title", () =>{
        cy.get("h1").contains("box music");
    })
});