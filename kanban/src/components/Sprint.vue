
<template>
    <div>
        <v-dialog   v-model="storeSprint.bol_visible_sprint"
                    max-width="500">
            
            <v-card title="Sprint">
                
                <v-card-text>
                    <v-text-field
                    v-model="storeSprint.sprint.str_nombre"
                    name="input-10-1"
                    label="Nombre"
                    hint="At least 8 characters"
                    counter="100"
                    ></v-text-field>

                    <v-textarea v-model="storeSprint.sprint.str_descripcion"
                                clearable 
                                label="Descripción"
                                counter="500"
                    >

                    </v-textarea>

                    <v-autocomplete
                    v-model="storeSprint.sprint.str_estado"
                    label="Estado"
                    :items="['ANALISIS', 'DISEÑO', 'DESARROLLO', 'PRUEBAS', 'PRODUCCION']"
                    >
                    </v-autocomplete>
                    
                    

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
    import { useSprintStore } from '@/stores/SprintStore';
    const storeSprint = useSprintStore();
    const menu2=ref(false);
    const adapter = useDate();

    const dateFormat=()=>{
        var fecha =new Date(storeSprint.sprint.str_fecha_inicio);
        return new Intl.DateTimeFormat("en-US").format(fecha);
    }
    
    const getDate=()=>{
        var fecha =adapter.parseISO(storeSprint.sprint.str_fecha_inicio);
        return fecha;
    }
    const guardar=()=>{
        storeSprint.bol_visible_sprint=false;
    }
    const cancelar=()=>{
        storeSprint.bol_visible_sprint=false;
    }

</script>