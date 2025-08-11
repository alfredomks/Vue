
import { defineStore } from "pinia";

export const useTareaStore=defineStore('tareaStore',{
    state:()=>({
        bol_visible:false,
        bol_tablero:false,
        nuevaTarea:false,
        tarea:{ "id":1,
                "nombre":"Analisis del sistema agenda",  
                "tipo":"POA",
                "fase":"ANALISIS",
                "estado":"POR HACER",
                "usuario":"marta",
                "descripcion":"Pruebas 1"
            },
        tipos:[],
        fases:[],
        tipo:null,
        fase:null,
        color:"primary",
        estado:null,
        usuario:null,
        tareaSeleccionada:null,
        cabecera_lista:[
            { title: 'ID',            key: 'id',        align: 'start',  sortable: true,},
            { title: 'Tipo',          key: 'tipo',      align: 'start' },
            { title: 'Nombre',        key: 'nombre',    align: 'start' },
            { title: 'Fase',          key: 'fase',      align: 'start' },
            { title: 'Estado',        key: 'estado',    align: 'start' },
            { title: 'Responsable',   key: 'usuario',   align: 'start' },
            { title: 'Acciones',      key: 'actions',   sortable: false },
        ],
        lista_tareas:[
            {"id":1,"nombre":"Analisis del sistema agenda",     "tipo":"POA","fase":"ANALISIS","estado":"POR HACER","usuario":"marta","descripcion":"Pruebas 1"},
            {"id":2,"nombre":"Diseño del sistema agenda",       "tipo":"SOPORTE","fase":"ANALISIS","estado":"POR HACER","usuario":"luis","descripcion":"Pruebas 2"},
            {"id":3,"nombre":"Desarrollo del sistema agenda",   "tipo":"SOPORTE","fase":"ANALISIS","estado":"HACIENDO","usuario":"pablo","descripcion":"Pruebas 3"},
            {"id":4,"nombre":"Pruebas del sistema agenda",      "tipo":"SOPORTE","fase":"DISEÑO","estado":"HACIENDO","usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":5,"nombre":"Producción del sistema agenda",   "tipo":"SOPORTE","fase":"DISEÑO","estado":"HACIENDO","usuario":"juan","descripcion":"Pruebas 5"},
            {"id":6,"nombre":"Analisis del sistema agenda",     "tipo":"SOPORTE","fase":"PRUEBAS","estado":"POR HACER","usuario":"marta","descripcion":"Pruebas 1"},
            {"id":7,"nombre":"Diseño del sistema agenda",       "tipo":"POA","fase":"PRUEBAS","estado":"HACIENDO","fase":"ANALISIS","usuario":"luis","descripcion":"Pruebas 2"},
            {"id":8,"nombre":"Desarrollo del sistema agenda",   "tipo":"POA","fase":"PRUEBAS","estado":"HACIENDO","usuario":"pablo","descripcion":"Pruebas 3"},
            {"id":9,"nombre":"Pruebas del sistema agenda",      "tipo":"POA","fase":"DESARROLLO","estado":"HACIENDO","usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":10,"nombre":"Producción del sistema agenda",  "tipo":"POA","fase":"DESARROLLO","estado":"HACIENDO","usuario":"juan","descripcion":"Pruebas 5"},
            {"id":11,"nombre":"Pruebas del sistema agenda",     "tipo":"POA","fase":"PRODUCCIÓN","estado":"POR HACER","usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":12,"nombre":"Producción del sistema agenda",  "tipo":"POA","fase":"PRODUCCIÓN","estado":"POR HACER","usuario":"juan","descripcion":"Pruebas 5"},
            {"id":14,"nombre":"Pruebas del sistema agenda",     "tipo":"POA","fase":"PRODUCCIÓN","estado":"HACIENDO","usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":15,"nombre":"Producción del sistema agenda",  "tipo":"POA","fase":"PRODUCCIÓN","estado":"HACIENDO","usuario":"juan","descripcion":"Pruebas 5"}
        ],
        lista_tipo:[
            {"id":"1","nombre":"REQUERIMIENTO"},
            {"id":"2","nombre":"SOPORTE"},
            {"id":"3","nombre":"POA"},
        ],
        lista_fases:[
            {"id":"1","nombre":"ANALISIS"},
            {"id":"2","nombre":"DISEÑO"},
            {"id":"3","nombre":"DESARROLLO"},
            {"id":"4","nombre":"PRUEBAS"},
            {"id":"5","nombre":"PRODUCCIÓN"}
        ],
        lista_estados:[ 
            {"id":1,"nombre":"POR HACER"},
            {"id":2,"nombre":"HACIENDO"},
            {"id":3,"nombre":"TERMINADO"}
        ],
        lista_usuarios:[ 
            {"id":1,"nombre":"Juan"},
            {"id":2,"nombre":"Pedro"},
            {"id":3,"nombre":"Pablo"}
        ]
    }),

    getters:{
        get_lista_tareas(state){
            state.lista_tareas;
        },
        get_lista_estados(state){
            state.lista_estados;
        }
    },
    actions:{
        addTarea(){
            this.tarea.tipo=this.tipo.nombre;
            this.tarea.fase=this.fase.nombre;
            this.tarea.usuario=this.usuario.nombre;

            this.lista_tareas.push(this.tarea);
            console.log(this.lista_tareas);
            this.nuevaTarea=false;
        },
        setTareaSeleccionada(tarea){
            //console.log(tarea);
            this.tareaSeleccionada=tarea;
        }

    }
})