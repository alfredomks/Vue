<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeTarea.nuevaTarea">
        <v-card  elevation="12" title="Nueva tarea">
                <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon icon="mdi-calendar-check"></v-icon>
                        </v-avatar>
                </template>
                 
                 <v-divider></v-divider>
                 
                 <v-card-text>
                    <v-text-field clearable label="Nombre" v-model="storeTarea.tarea.nombre">
                    </v-text-field>
                    <v-combobox
                            clearable
                            label="Tipo"
                            v-model="storeTarea.tarea.int_tipo"
                            :items="storeTarea.lista_tipos"
                            item-value="id"
                            item-title="nombre"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Fase"
                            v-model="storeTarea.tarea.int_fase"
                            :items="storeTarea.lista_fases"
                            item-value="id"
                            item-title="nombre"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Estado"
                            v-model="storeTarea.tarea.int_estado"
                            :items="storeTarea.lista_estados"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Responsable"
                            v-model="storeTarea.tarea.int_usuario"
                            :items="storeTarea.lista_usuarios"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            >
                    </v-combobox>
                 </v-card-text>
            
            <v-divider></v-divider>

            <v-card-actions class="bg-surface-light pt-4">
                <v-spacer></v-spacer>
                <v-btn @click="guardar()" 
                        elevation="12"  
                        prepend-icon="mdi mdi-content-save"
                        color="primary"
                        variant="flat"
                        rounded="xl">
                    Guardar
                </v-btn>
                <v-btn @click="storeTarea.nuevaTarea = false" 
                        elevation="12"  
                        prepend-icon="mdi mdi-close-circle"
                        color="error"
                        variant="flat"
                        rounded="xl">
                    Cancelar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
    import { useTareaStore } from '@/stores/TareaStore';
    const storeTarea = useTareaStore();

    const guardar=()=>{
        console.log('Nueva tarea');
        if(storeTarea.tarea.id==null){
            storeTarea.tarea.id=storeTarea.lista_tareas.length+1;
            storeTarea.lista_tareas.push(storeTarea.tarea);
        }
        storeTarea.nuevaTarea=false;
    }
</script>
