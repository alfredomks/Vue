import { defineStore } from "pinia";

export const useProductoStore=defineStore('productoStore',{
    state:()=>({
        bol_visible:false,
        bol_cargando:false,
        bol_visible_producto:false,
        producto:{
            "int_id":null,
            "str_nombre":null,
            "str_descripcion":null,
            "str_fecha_crea":null,
            "str_fecha_inicio":null,
            "str_fecha_fin":null
        },
        cabecera_lista:[
              { title: 'ID',            key: 'int_id', align: 'start',  sortable: true,},
              { title: 'Nombre',        key: 'str_nombre', align: 'start' },
              { title: 'Estado',        key: 'str_estado', align: 'start' },
              { title: 'Descripción',   key: 'str_descripcion', align: 'start' },
              { title: 'Fecha crea',    key: 'str_fecha_crea', align: 'start',dataType: "Date" },
              { title: 'Fecha inicio',  key: 'str_fecha_inicio', align: 'start',dataType: "Date" },
              { title: 'Fecha fin',     key: 'str_fecha_fin', align: 'start',dataType: "Date" },
              { title: 'Acciones',      key: 'actions', sortable: false },
        ],
        lista_productos:[
            {"int_id":1,"str_nombre":"CUENTA DIGITAL","str_estado":"Aanalisis","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
            {"int_id":2,"str_nombre":"CREDIO DIGITAL","str_estado":"Diseño","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
            {"int_id":3,"str_nombre":"DPF DIGITAL","str_estado":"Desarrollo","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
            {"int_id":4,"str_nombre":"APP MOVIL","str_estado":"Pruebas","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
            {"int_id":5,"str_nombre":"APP WEB","str_estado":"Producción","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
            {"int_id":6,"str_nombre":"SISTEMA DE GESTION","str_estado":"Soporte","str_descripcion":"Cuenta que se crea en linea","str_fecha_crea": new Date("01/01/2025"),"str_fecha_inicio": new Date("01/01/2025"),"str_fecha_fin": new Date("01/01/2026")},
        ],
        
    }),

    actions:{
        addProducto(){
            
        },
        updateProducto(item){
            console.log(item);
        },
        deleteProducto(item){
            console.log(item);
        }
    }
})