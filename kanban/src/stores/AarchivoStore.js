import { defineStore } from "pinia";

export const useArchivoStore=defineStore('AarchivoStore',{
    state:()=>({
        visible:false,
        archivo:null,
        pagina:1,
        numero_paginas:0,
        str_comentario:null,
        lista_archivos:[
            {"id":1,"fecha":"2025-01-12","estado":13,"str_estado":"POR HACER","usuario":20,"str_usuario":"Juan","color":"red","comentario":"Comementario de Juan "},
            {"id":2,"fecha":"2025-01-14","estado":14,"str_estado":"HACIENDO","usuario":21,"str_usuario":"Pedro","color":"blue","comentario":"Comementario de Pedro "},
            {"id":3,"fecha":"2025-01-15","estado":15,"str_estado":"HACIENDO","usuario":22,"str_usuario":"Marta","color":"yellow","comentario":"Comementario de Marta "},
            {"id":4,"fecha":"2025-01-16","estado":14,"str_estado":"POR HACER","usuario":23,"str_usuario":"Pablo","color":"orange","comentario":"Comementario de Pablo "},
        ],
    }),

    getters:{
        getLog(state){
            return state.lista_archivos;
        }
    },
    actions:{
        getArchivos(){
            var pagina=this.pagina-1;
            fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/documentos/get?tarea='+this.tarea.id+'&page='+pagina+'&size=10')
            .then(response => response.json())
            .then(data => {
                this.numero_paginas=data.totalPages;
                this.lista_archivos=data.content;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        
        addArchivo(){
            //console.log(this.str_comentario);
            var nuevo_comentario={
                "comentario":this.str_comentario,
                "usuario":this.tarea.id,
                "fecha":new Date()
            };

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(nuevo_comentario)
              };
              
              fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/documentos/'+this.tarea.id, requestOptions)
                .then(async response => {
                  const data = await response.json();
                  // check for error response
                  if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                  }
                  
                  this.postId = data.id;
                  this.getComentarios();
                })
                .catch(error => {
                  this.errorMessage = error;
                  console.error('There was an error!', error);
                });
        },
    
        delteArchivo(item){
            const url = 'http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/documentos/'+item.id;
            const requestOptions = {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary authorization headers here, e.g., 'Authorization': `Bearer ${token}`
                },
            };

            fetch(url, requestOptions)
            .then(response => {
                // Handle the response
                if (!response.ok) {
                    // Handle HTTP errors (e.g., 404, 500)
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || 'Failed to delete resource');
                    });
                }
                // If the API returns a response body (e.g., confirmation message), parse it
                // Otherwise, if no content is expected, you might just return response.status
                return response.json(); // Or response.text() if expecting plain text
            })
            .then(data => {
                // Process the successful response data
                console.log('Resource deleted successfully:', data);
                this.getComentarios();
                // Update Vue component state, e.g., remove the item from a list
            })
            .catch(error => {
                // Handle network errors or errors thrown during response processing
                console.error('Error deleting resource:', error);
                // Display an error message to the user
            });
        }
    }
})