<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeComentario.visible">
        <v-card  elevation="12">
                 <v-card-title class="bg-surface-light pt-4">
                    <h4>Comentarios</h4>
                 </v-card-title>
                 <v-card-subtitle>
                    <h4>{{storeComentario.tarea.nombre}}</h4>
                 </v-card-subtitle>
                
                 <v-divider></v-divider>
                 <v-row>
                    <v-col
                        cols="12"
                        sm="10"
                    >
                        <v-textarea v-model="storeComentario.str_comentario"
                                clearable 
                                label="Comentario"
                                prepend-inner-icon="mdi-comment"
                                variant="solo"
                                rows="1"
                                auto-grow
                                counter="500">
                         </v-textarea>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="2"
                    >
                            <v-tooltip text="Agregar comentario">
                                <template v-slot:activator="{ props }" v-slot:append>
                                    <v-btn v-bind="props"
                                        @click="guardar()" 
                                        elevation="16"
                                        icon="mdi-plus-circle"
                                        color="primary"
                                        density="comfortable"
                                        >
                                    </v-btn>
                                </template>
                            </v-tooltip>
                    </v-col>
                 </v-row>
                 
               
                

                 <v-card-text>
                    <div style="width: 100%; height: 400px; overflow-y: scroll;">
                        <v-timeline  align="start" side="end">
                            <v-timeline-item
                            v-for="item,index in storeComentario.lista_comentarios" 
                            :key="index"
                            :dot-color="item.color"
                            size="small"
                            fill-dot
                            >
                            <template v-slot:opposite>
                                <div
                                :class="`pt-1 headline font-weight-bold text-${item.color}`"
                                v-text="item.fecha"
                                ></div>
                            </template>
                            <div>
                                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${item.color}`">
                                {{ item.str_usuario }}
                                </h2>
                                <div>
                                {{ item.str_estado }}
                                </div>
                                <div>
                                {{ item.comentario }}
                                </div>

                                <v-tooltip text="Eliminar comentario">
                                    <template v-slot:activator="{ props }">
                                        <v-btn v-bind="props"
                                            @click="eliminar(item)" 
                                            density="comfortable"
                                            icon="mdi-delete"
                                            color="red"
                                            elevation="16"
                                        >
                                        </v-btn>
                                    </template>
                                </v-tooltip>

                            </div>
                            </v-timeline-item>
                        </v-timeline>
                    </div>
                 </v-card-text>
            
            <v-divider></v-divider>

            <v-card-actions class="bg-surface-light pt-4">
                <v-spacer></v-spacer>
                <v-btn @click="storeComentario.visible = false" 
                        elevation="12"  
                        prepend-icon="mdi mdi-close-circle" 
                        color="error"
                        variant="flat"
                        rounded="xl">
                    Cerrar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
    <DialogoConfirmacion></DialogoConfirmacion>
</template>

<script setup>

    import DialogoConfirmacion from '../Dialogos/DialogoConfirmacion.vue';
    import { useComentarioStore } from '@/stores/ComentarioStore';
    const storeComentario = useComentarioStore();

    import { useDialogoConfirmaStore } from '@/stores/DialogoConfirmacion';
    const storeDialogoConfirma = useDialogoConfirmaStore();

    const guardar=()=>{
        storeComentario.addComentario();
    }
    const eliminar= async (item)=>{
        const confirmado = await storeDialogoConfirma.solicitarConfirmacion('¿Está seguro que desea eliminar el registro?');
        if (confirmado) {
            storeComentario.delteComentario(item);
        }
    }
</script>
