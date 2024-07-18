/// <reference types="cypress" />
import {TodoPage} from '../page-objects/todo'



describe('test de todo', () => {
    const todoPage = new TodoPage()


    it('Añadir tarea', () =>{
        todoPage.navegarWeb()
        todoPage.anadirTarea()
    })

})
