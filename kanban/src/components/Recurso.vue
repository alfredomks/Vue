
<template>
    <div>
        <v-dialog   v-model="storeRecurso.bol_visible_recurso"
                    max-width="500">
            
            <v-card title="Recurso">
                
                <v-card-text>
                    <v-text-field
                    v-model="storeRecurso.recurso.str_nombre"
                    name="input-10-1"
                    label="Nombre"
                    hint="At least 8 characters"
                    counter="100"
                    ></v-text-field>
                    
                    <v-autocomplete
                    v-model="storeRecurso.recurso.itn_tipo"
                    label="Tipo"
                    :items="storeRecurso.lista_tipo"
                    item-value="int_id"
                    item-title="str_nombre"
                    >
                    </v-autocomplete>

                    <v-textarea v-model="storeRecurso.recurso.str_descripcion"
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
    import { useRecursoStore } from '@/stores/RecursoStore';
    const storeRecurso = useRecursoStore();
    const menu2=ref(false);
    const adapter = useDate();

    const dateFormat=()=>{
        var fecha =new Date(storeRecurso.recurso.str_fecha_inicio);
        return new Intl.DateTimeFormat("en-US").format(fecha);
    }
    
    const getDate=()=>{
        var fecha =adapter.parseISO(storeRecurso.recurso.str_fecha_inicio);
        return fecha;
    }
    const guardar=()=>{
        if(storeRecurso.recurso.int_id==null){
            storeRecurso.recurso.int_id=storeRecurso.lista_recursos.length+1;
            storeRecurso.lista_recursos.push(storeRecurso.recurso);
        }
        storeRecurso.bol_visible_recurso=false;
    }
    const cancelar=()=>{
        storeRecurso.bol_visible_recurso=false;
    }

</script>