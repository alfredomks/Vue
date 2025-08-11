
<template>
    <div>
        <v-dialog   v-model="storeSprint.bol_visible_sprint"
                    max-width="500">
            
            <v-card title="Sprint">
                <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon icon="mdi-clock-time-four"></v-icon>
                        </v-avatar>
                </template>
                
                <v-card-text>
                    
                    <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ props }">
                            <v-text-field
                            v-bind="props"
                            :model-value="dateFormatInicio()"
                            label="Fecha de inicio"
                            hint="MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            ></v-text-field>
                        </template>
                        
                        <v-locale-provider locale="es">
                            <v-date-picker
                                v-model="storeSprint.sprint.str_fecha_inicio"
                                header="Calendario"
                                max="2026-01-01"
                                min="2024-06-15"
                                rounded="xl"
                                title="Fecha inicio"
                                @update:model-value="menu1 = false"
                            ></v-date-picker>
                        </v-locale-provider>
                       
                    </v-menu>

                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ props }">
                            <v-text-field
                            v-bind="props"
                            :model-value="dateFormatFin()"
                            label="Fecha de fin"
                            hint="MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            ></v-text-field>
                        </template>
                        
                        <v-locale-provider locale="es">
                            <v-date-picker
                                v-model="storeSprint.sprint.str_fecha_fin"
                                header="Calendario"
                                max="2026-01-01"
                                min="2024-06-15"
                                rounded="xl"
                                title="Fecha inicio"
                                @update:model-value="menu2 = false"
                            ></v-date-picker>
                        </v-locale-provider>
                       
                    </v-menu>

                    <v-textarea v-model="storeSprint.sprint.str_descripcion"
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
    import { useSprintStore } from '@/stores/SprintStore';
    const storeSprint = useSprintStore();
    const menu1=ref(false);
    const menu2=ref(false);
    const adapter = useDate();

    const dateFormatInicio=()=>{
        var fecha =new Date(storeSprint.sprint.str_fecha_inicio);
        return new Intl.DateTimeFormat("en-US").format(fecha);
    }
    const dateFormatFin=()=>{
        var fecha =new Date(storeSprint.sprint.str_fecha_fin);
        return new Intl.DateTimeFormat("en-US").format(fecha);
    }
    
    const guardar=()=>{
        storeSprint.bol_visible_sprint=false;
    }
    const cancelar=()=>{
        storeSprint.bol_visible_sprint=false;
    }

</script>