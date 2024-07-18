export class TodoPage{


    navegarWeb(){

        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }

    anadirTarea(){
        cy.get('.new-todo').type("comprar el pan{enter}")
    }

    completartarea(){

        cy.get('.toggle').click ()
    }


}
