
<template>
    <div>
        <v-dialog   v-model="storeRecurso.bol_visible"
                    max-width="800">
            
            <v-card title="Recursos">
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        <v-icon icon="mdi-account-group"></v-icon>
                    </v-avatar>
                </template>

                <v-card-item>
                    <v-expansion-panels>
                        <v-expansion-panel
                            title="Buscar"
                        >
                            <v-expansion-panel-text>
                                <div class="container">
                                    <v-autocomplete
                                    label="Tipo"
                                    item-title="str_nombre"
                                    item-value="int_id"
                                    :items="storeRecurso.lista_filtros"
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
                        :headers="storeRecurso.cabecera_lista"
                        :items="storeRecurso.lista_recursos"
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
        
                <v-card-actions>
                    
                </v-card-actions>
        
            </v-card>
        </v-dialog>
    </div>
    <Recurso></Recurso>
</template>

<script setup>
    import {ref} from 'vue';
    import { useDate } from 'vuetify'
    import { useRecursoStore } from '@/stores/RecursoStore';
import Recurso from './Recurso.vue';
    const storeRecurso = useRecursoStore();

    
    const cancelar=()=>{
        storeRecurso.bol_visible=false;
    }

    const nuevo=()=>{
        var recurso={
            "itn_id":null,
            "itn_tipo":null,
            "str_nombre":null,
            "str_descripcion":null
        };
        storeRecurso.recurso=recurso;
        storeRecurso.bol_visible_recurso=true;
    }
    const editar=(item)=>{
        storeRecurso.recurso=item;
        storeRecurso.bol_visible_recurso=true;
    }
    const eliminar=(item)=>{
        storeRecurso.lista_recursos.splice(item.int_id-1, 1);
    }
</script>