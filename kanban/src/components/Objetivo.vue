
<template>
    <div>
        <v-dialog   v-model="storeObjetivo.bol_visible_objetivo" max-width="500">

            <v-card title="Objetivo">
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        <v-icon icon="mdi-crosshairs-gps"></v-icon>
                    </v-avatar>
                </template>

                <v-card-text>
                    
                    <v-autocomplete
                    v-model="storeObjetivo.objetivo.int_tipo"
                    label="Tipo"
                    item-title="str_nombre"
                    item-value="int_id"
                    :items=storeObjetivo.lista_tipo
                    >
                    </v-autocomplete>
                    
                    
                    <v-textarea v-model="storeObjetivo.objetivo.str_descripcion"
                                clearable 
                                label="Descripción"
                                counter="500"
                    >
                    </v-textarea>

                </v-card-text>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn
                    text="Guardar"
                    color="primary"
                    prepend-icon="mdi-content-save" 
                    elevation="8" 
                    rounded="xl" 
                    variant="elevated"
                    @click="guardar()"
                    >
                    </v-btn>

                    <v-btn
                    text="Cancelar"
                    color="error"
                    prepend-icon="mdi-close-circle" 
                    elevation="8" 
                    rounded="xl" 
                    variant="elevated"
                    @click="cancelar()"
                    >
                    </v-btn>
                </v-card-actions>
        
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import { useDate } from 'vuetify'
    import { useObjetivoStore } from '@/stores/ObjetivoStore';
    const storeObjetivo = useObjetivoStore();
    
    const guardar=()=>{
        if(storeObjetivo.objetivo.int_id==null){
            storeObjetivo.objetivo.int_id=storeObjetivo.lista_objetivos.length+1;
            storeObjetivo.lista_objetivos.push(storeObjetivo.objetivo);
        }
        storeObjetivo.bol_visible_objetivo=false;
    }
    const cancelar=()=>{
        storeObjetivo.bol_visible_objetivo=false;
    }

</script>