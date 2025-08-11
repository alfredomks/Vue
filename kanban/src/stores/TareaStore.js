
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
            
            { title: 'Tipo',          key: 'tipo',      align: 'start' },
            { title: 'Nombre',        key: 'nombre',    align: 'start' },
            { title: 'Fase',          key: 'fase',      align: 'start' },
            { title: 'Estado',        key: 'estado',    align: 'start' },
            { title: 'Responsable',   key: 'usuario',   align: 'start' },
            { title: 'Acciones',      key: 'actions',   sortable: false },
        ],
        lista_tareas:[
            {"id":1,"nombre":"Analisis del sistema agenda",    "int_tipo":1, "tipo":"POA", "int_fase":1,"fase":"ANALISIS", "int_estado":1,"estado":"POR HACER","int_usuario":1,"usuario":"marta","descripcion":"Pruebas 1"},
            {"id":2,"nombre":"Diseño del sistema agenda",      "int_tipo":1, "tipo":"SOPORTE","int_fase":1,"fase":"ANALISIS","int_estado":1,"estado":"POR HACER","int_usuario":1,"usuario":"luis","descripcion":"Pruebas 2"},
            {"id":3,"nombre":"Desarrollo del sistema agenda",  "int_tipo":1, "tipo":"SOPORTE","int_fase":1,"fase":"ANALISIS","int_estado":1,"estado":"HACIENDO","int_usuario":1,"usuario":"pablo","descripcion":"Pruebas 3"},
            {"id":4,"nombre":"Pruebas del sistema agenda",     "int_tipo":1, "tipo":"SOPORTE","int_fase":2,"fase":"DISEÑO","int_estado":1,"estado":"HACIENDO","int_usuario":2,"usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":5,"nombre":"Producción del sistema agenda",  "int_tipo":2, "tipo":"SOPORTE","int_fase":2,"fase":"DISEÑO","int_estado":2,"estado":"HACIENDO","int_usuario":2,"usuario":"juan","descripcion":"Pruebas 5"},
            {"id":6,"nombre":"Analisis del sistema agenda",    "int_tipo":2, "tipo":"SOPORTE","int_fase":2,"fase":"PRUEBAS","int_estado":2,"estado":"POR HACER","int_usuario":2,"usuario":"marta","descripcion":"Pruebas 1"},
            {"id":7,"nombre":"Diseño del sistema agenda",      "int_tipo":2, "tipo":"POA","int_fase":3,"fase":"PRUEBAS","int_estado":2,"estado":"HACIENDO","fase":"ANALISIS","int_usuario":2,"usuario":"luis","descripcion":"Pruebas 2"},
            {"id":8,"nombre":"Desarrollo del sistema agenda",  "int_tipo":2, "tipo":"POA","int_fase":3,"fase":"PRUEBAS","int_estado":2,"estado":"HACIENDO","int_usuario":3,"usuario":"pablo","descripcion":"Pruebas 3"},
            {"id":9,"nombre":"Pruebas del sistema agenda",     "int_tipo":3, "tipo":"POA","int_fase":3,"fase":"DESARROLLO","int_estado":2,"estado":"HACIENDO","int_usuario":3,"usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":10,"nombre":"Producción del sistema agenda", "int_tipo":3, "tipo":"POA","int_fase":4,"fase":"DESARROLLO","int_estado":3,"estado":"HACIENDO","int_usuario":3,"usuario":"juan","descripcion":"Pruebas 5"},
            {"id":11,"nombre":"Pruebas del sistema agenda",    "int_tipo":3, "tipo":"POA","int_fase":4,"fase":"PRODUCCIÓN","int_estado":3,"estado":"POR HACER","int_usuario":4,"usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":12,"nombre":"Producción del sistema agenda", "int_tipo":3, "tipo":"POA","int_fase":5,"fase":"PRODUCCIÓN","int_estado":2,"estado":"POR HACER","int_usuario":4,"usuario":"juan","descripcion":"Pruebas 5"},
            {"id":14,"nombre":"Pruebas del sistema agenda",    "int_tipo":3, "tipo":"POA","int_fase":5,"fase":"PRODUCCIÓN","int_estado":2,"estado":"HACIENDO","int_usuario":4,"usuario":"pedro","descripcion":"Pruebas 4"},
            {"id":15,"nombre":"Producción del sistema agenda", "int_tipo":3, "tipo":"POA","int_fase":5,"fase":"PRODUCCIÓN","int_estado":2,"estado":"HACIENDO","int_usuario":4,"usuario":"juan","descripcion":"Pruebas 5"}
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
        get_lista_tareas(state){
            state.lista_tareas;
        },
        get_lista_estados(state){
            state.lista_estados;
        }
    },
    actions:{
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