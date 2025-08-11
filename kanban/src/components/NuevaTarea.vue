<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeTarea.nuevaTarea">
        <v-card  elevation="12">
                 <v-card-title class="bg-surface-light pt-4">
                    <h4>Nueva tarea</h4>
                 </v-card-title>
                
                 <v-divider></v-divider>
                 
                 <v-card-text>
                    <v-text-field clearable label="Nombre" v-model="storeTarea.tarea.nombre">
                    </v-text-field>
                    <v-combobox
                            clearable
                            label="Tipo"
                            v-model="storeTarea.tipo"
                            :items="storeTarea.lista_tipo"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Fase"
                            v-model="storeTarea.fase"
                            :items="storeTarea.lista_fases"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Responsable"
                            v-model="storeTarea.usuario"
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
                <v-btn @click="storeTarea.addTarea" 
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
</script>
