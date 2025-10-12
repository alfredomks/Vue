<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeTarea.nuevaTarea">
        <v-card  elevation="12" title="Tarea">
                <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon icon="mdi-calendar-check"></v-icon>
                        </v-avatar>
                </template>
                 
                 <v-divider></v-divider>
                 
                 <v-card-text>
                    <v-text-field clearable label="Nombre" v-model="storeTarea.tarea.nombre">
                    </v-text-field>
                    <v-text-field clearable label="Descripción" v-model="storeTarea.tarea.descripcion">
                    </v-text-field>
                    <v-combobox
                            clearable
                            label="Padre"
                            v-model="storeTarea.tarea.padre"
                            :items="storeTarea.lista_tareas"
                            item-value="id"
                            item-title="nombre"
                            :return-object="false"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Tipo"
                            v-model="storeTarea.tarea.tipo"
                            :items="storeTarea.lista_tipos"
                            item-value="id"
                            item-title="nombre"
                            :return-object="false"
                            >
                    </v-combobox>
                    
                    <v-combobox
                            clearable
                            label="Estado"
                            v-model="storeTarea.tarea.estado"
                            :items="storeTarea.lista_estados"
                            item-value="id"
                            item-title="nombre"
                            :return-object="false"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Responsable"
                            v-model="storeTarea.tarea.usuario"
                            :items="storeTarea.lista_usuarios"
                            item-value="id"
                            item-title="nombre"
                            :return-object="false"
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
        storeTarea.addTarea();
        storeTarea.nuevaTarea=false;
    }
</script>
