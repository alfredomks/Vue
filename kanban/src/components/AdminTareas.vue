
<template>
    <div>
        <v-dialog   v-model="storeTareas.bol_visible"
                    max-width="1000">
            
            <v-card title="Tareas">
                
                <v-card-item>
                    <v-expansion-panels>
                        <v-expansion-panel
                            title="Buscar"
                        >
                            <v-expansion-panel-text>
                                <div class="container">
                                    <v-autocomplete
                                    label="Tipo"
                                    :items="['ID', 'Nombre', 'Descripción', 'Fecha crea', 'Fecha inicio', 'Fecha fin']"
                                    >
                                    </v-autocomplete>
                                    
                                    <v-text-field
                                    name="input-10-1"
                                    label="Texto"
                                    hint="At least 8 characters"
                                    counter="100"
                                    ></v-text-field>
                                    <v-spacer></v-spacer>
                                    <v-tooltip text="Nuevo Recurso">
                                        <template v-slot:activator="{ props }">
                                            <v-btn  v-bind="props"  prepend-icon="mdi-magnify" elevation="8" rounded="xl" color="primary">
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
                                        @click="eliminar(item)"
                                    >
                                    mdi-delete
                                    </v-icon>
                                </template>
                            </v-tooltip>
                        </template>

                        </v-data-table>
                </v-card-text>
        
                <v-card-actions>
                    
                </v-card-actions>
        
            </v-card>
        </v-dialog>
    </div>
    <NuevaTarea></NuevaTarea>
</template>

<script setup>
    import {ref} from 'vue';
    import { useDate } from 'vuetify'
    import { useTareaStore } from '@/stores/TareaStore';
import NuevaTarea from './NuevaTarea.vue';
    const storeTareas = useTareaStore();

    const nuevo=()=>{
        storeTareas.nuevaTarea=true;
    }
    const editar=()=>{
        storeTareas.nuevaTarea=true;
    }
    const eliminar=()=>{
        console.log('Eliminar sprint');
    }
</script>