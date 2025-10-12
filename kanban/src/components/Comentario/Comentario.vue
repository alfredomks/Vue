<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeComentario.visible">
        <v-card  elevation="12">
                 <v-card-title class="bg-surface-light pt-4">
                    <h4>Hitórico</h4>
                 </v-card-title>
                 <v-card-subtitle>
                    <h4>{{storeComentario.tarea.nombre}}</h4>
                 </v-card-subtitle>
                
                 <v-divider></v-divider>
                 
                 <v-card-text>
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
                            {{ item.usuario }}
                            </h2>
                            <div>
                            {{ item.comentario }}
                            </div>
                        </div>
                        </v-timeline-item>
                    </v-timeline>
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
</template>

<script setup>
    import { useComentarioStore } from '@/stores/ComentarioStore';
    const storeComentario = useComentarioStore();
</script>
