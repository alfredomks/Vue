
<template>
            <v-card title="Tareas">
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        <v-icon icon="mdi-calendar-check"></v-icon>
                    </v-avatar>
                </template>
                <v-card-item>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title><v-icon color="primary" icon="mdi mdi-magnify"></v-icon>Buscar</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <div class="container">
                                    <v-autocomplete
                                    label="Tipo"
                                    item-title="str_nombre"
                                    item-value="int_id"
                                    :items="storeTareas.lista_filtros"
                                    >
                                    </v-autocomplete>
                                    
                                    <v-text-field
                                    name="input-10-1"
                                    label="Texto"
                                    hint="At least 8 characters"
                                    counter="100"
                                    ></v-text-field>
                                    <v-spacer></v-spacer>
                                    <v-tooltip text="Buscar tareas">
                                        <template v-slot:activator="{ props }">
                                            <v-btn  v-bind="props" 
                                                     prepend-icon="mdi-magnify" 
                                                     elevation="8"
                                                     rounded="xl" 
                                                     @click="buscar()"
                                                     color="primary">
                                            Buscar
                                            </v-btn>
                                        </template>
                                    </v-tooltip>
                                </div>
                            </v-expansion-panel-text>
                            
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <div class="container">
                        <div class="center">
                            <v-tooltip text="Nuevo producto">
                                <template v-slot:activator="{ props }">
                                    <v-btn  v-bind="props" 
                                            prepend-icon="mdi-plus-circle" 
                                            elevation="8" 
                                            rounded="xl" 
                                            @click="nuevo()"
                                            color="primary">
                                    Nuevo
                                    </v-btn>
                                </template>
                            </v-tooltip>
                        </div>
                    </div>

                </v-card-item>

                <v-card-text>
                    <v-data-table 
                        :headers="storeTareas.cabecera_lista"
                        :items="storeTareas.lista_tareas"
                        hide-default-footer
                        >
                        <template v-slot:item.actions="{item }">
                           
                            <v-tooltip text="Comentarios">
                                <template v-slot:activator="{ props }">
                                    <v-icon
                                        v-bind="props"
                                        class="me-2"
                                        color="primary"
                                        @click="comentarios(item)"
                                    >
                                    mdi mdi-message-text
                                    </v-icon>
                                </template>
                            </v-tooltip>

                            <v-tooltip text="Documentos">
                                <template v-slot:activator="{ props }">
                                    <v-icon
                                        v-bind="props"
                                        class="me-2"
                                        color="primary"
                                        @click="documentos(item)"
                                    >
                                    mdi mdi-folder-file-outline
                                    </v-icon>
                                </template>
                            </v-tooltip>

                            <v-tooltip text="Editar">
                                <template v-slot:activator="{ props }">
                                    <v-icon
                                        v-bind="props"
                                        class="me-2"
                                        size="small"
                                        @click="editar(item)"
                                    >
                                        mdi-pencil
                                    </v-icon>
                                </template>
                            </v-tooltip>

                            <v-tooltip text="Eliminar">
                                <template v-slot:activator="{ props }">
                                    <v-icon
                                        v-bind="props"
                                        size="small"
                                        color="red"
                                        @click="eliminar(item)"
                                    >
                                    mdi-delete
                                    </v-icon>
                                </template>
                            </v-tooltip>
                        </template>

                        </v-data-table>
                </v-card-text>
                
                <div class="text-center pt-2">
                        <v-pagination
                            v-model="storeTareas.pagina"
                            :length="storeTareas.numero_paginas"
                            :total-visible="10"
                            rounded="circle"
                            color="primary"
                            @next="paginaSiguiente"
                            @prev="paginaAnterior"
                            @click="storeTareas.get_lista_tareas()"
                        ></v-pagination>
                </div>
            </v-card>
    <NuevaTarea></NuevaTarea>
    <Comentarios></Comentarios>
</template>

<script setup>
    import {ref} from 'vue';
    import { useDate } from 'vuetify'
   
    import NuevaTarea from './NuevaTarea.vue';
    import Comentarios from './Comentarios.vue';

    import { useTareaStore } from '@/stores/TareaStore';
    const storeTareas = useTareaStore();

    import { useComentarioStore } from '@/stores/ComentarioStore';
    const storeComentario = useComentarioStore();

    const nuevo=()=>{
        var tarea={ 
                "id":null,
                "nombre":null,  
                "tipo":null,
                "estado":null,
                "usuario":null,
                "descripcion":null,
                "fecha_crea":new Date()
            };
        storeTareas.tarea=tarea;
        storeTareas.nuevaTarea=true;
    }
    const comentarios=(item)=>{
        storeComentario.tarea=item;
        storeComentario.getComentarios();
        storeComentario.visible=true;
    }
    const documentos=(item)=>{
        storeTareas.tarea=item;
        storeTareas.nuevaTarea=true;
    }
    const buscar=()=>{
        console.log('Buscar tareas');
    }
    const editar=(item)=>{
        storeTareas.tarea=item;
        storeTareas.nuevaTarea=true;
    }
    const  eliminar= (item)=>{
         storeTareas.deleteTarea(item);
    }

    const paginaSiguiente=()=>{
        storeTareas.get_lista_tareas();
    }
    const paginaAnterior=()=>{
        storeTareas.get_lista_tareas();
    }
</script>