
import { defineStore } from "pinia";

export const useTareaStore=defineStore('tareaStore',{
    state:()=>({
        bol_visible:false,
        bol_tablero:false,
        nuevaTarea:false,
        tarea:{ "id":null,
                "nombre":null,  
                "tipo":null,
                "int_tipo":null,
                "fase":null,
                "int_fase":null,
                "estado":null,
                "int_estado":null,
                "usuario":null,
                "int_usuario":null,
                "descripcion":null
            },
        tipos:[],
        fases:[],
        tipo:null,
        fase:null,
        color:"primary",
        estado:null,
        usuario:null,
        tareaSeleccionada:null,
        lista_filtros:[
            {"int_id":1,"str_nombre":"ID"},
            {"int_id":2,"str_nombre":"NOMBRE"},
            {"int_id":3,"str_nombre":"TIPO"},
            {"int_id":4,"str_nombre":"Descripción"},
            {"int_id":5,"str_nombre":"Fecha crea"}
        ],
        cabecera_lista:[
            { title: 'Trarea',        key: 'nombre',        align: 'start' },
            { title: 'Tipo',          key: 'str_tipo',      align: 'start' },
            { title: 'Estado',        key: 'str_estado',    align: 'start' },
            { title: 'Responsable',   key: 'str_usuario',   align: 'start' },
            { title: 'Acciones',      key: 'actions',       sortable: false },
        ],
        lista_tareas:[
            {"id":1,"nombre":"Analisis del sistema agenda",    "int_tipo":1, "tipo":"POA", "int_fase":1,"fase":"ANALISIS", "int_estado":1,"estado":"POR HACER","int_usuario":1,"usuario":"marta","descripcion":"Pruebas 1"},
            {"id":2,"nombre":"Diseño del sistema agenda",      "int_tipo":1, "tipo":"SOPORTE","int_fase":1,"fase":"ANALISIS","int_estado":1,"estado":"POR HACER","int_usuario":1,"usuario":"luis","descripcion":"Pruebas 2"}
        ],
        lista_tipos:[
            {"id":1,"nombre":"REQUERIMIENTO"},
            {"id":2,"nombre":"SOPORTE"},
            {"id":3,"nombre":"POA"},
        ],
        lista_fases:[
            {"id":1,"nombre":"ANALISIS"},
            {"id":2,"nombre":"DISEÑO"},
            {"id":3,"nombre":"DESARROLLO"},
            {"id":4,"nombre":"PRUEBAS"},
            {"id":5,"nombre":"PRODUCCIÓN"}
        ],
        lista_estados:[ 
            {"id":1,"nombre":"POR HACER"},
            {"id":2,"nombre":"HACIENDO"},
            {"id":3,"nombre":"TERMINADO"}
        ],
        lista_usuarios:[ 
            {"id":1,"nombre":"Juan"},
            {"id":2,"nombre":"Pedro"},
            {"id":3,"nombre":"Pablo"},
            {"id":4,"nombre":"Andres"},
            {"id":5,"nombre":"Jose"}
        ]
    }),

    getters:{
        
    },
    actions:{
        get_lista_tipos(){
            fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/catalogos/getPorGrupo?grupo=2')
            .then(response => response.json())
            .then(data => {
                this.lista_tipos=data;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },

        get_lista_estados(){
            fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/catalogos/getPorGrupo?grupo=12')
            .then(response => response.json())
            .then(data => {
                this.lista_estados=data;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },

        get_lista_usuarios(){
            fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/catalogos/getPorGrupo?grupo=16')
            .then(response => response.json())
            .then(data => {
                this.lista_usuarios=data;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },
        
        get_lista_tareas(){
            fetch('http://localhost:8080/demo-0.0.1-SNAPSHOT/api/v1/tareas/get_all?page=0&size=10')
            .then(response => response.json())
            .then(data => {
                this.lista_tareas=data.content;
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        },

        addTarea(){
            /*
            this.tarea.tipo=this.tipo.nombre;
            this.tarea.fase=this.fase.nombre;
            this.tarea.usuario=this.usuario.nombre;

            this.lista_tareas.push(this.tarea);
            console.log(this.lista_tareas);
            this.nuevaTarea=false;
            */
        },
        setTareaSeleccionada(tarea){
            //console.log(tarea);
            this.tareaSeleccionada=tarea;
        }

    }
})