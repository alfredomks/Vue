<template>
    <v-dialog max-width="600"
              persistent
              v-model="storeArchivo.visible">
        <v-card  elevation="12">
                 <v-card-title class="bg-surface-light pt-4">
                    <h4>Archivos</h4>
                 </v-card-title>
                 <v-card-subtitle>
                    <h4>{{storeArchivo.tarea.nombre}}</h4>
                 </v-card-subtitle>
                
                 <v-divider></v-divider>
                 <v-row>
                    <v-col
                        cols="12"
                        sm="10"
                    >
                        <v-file-input clearable label="Archivo"  show-size accept="image/*" v-model="archivo" </v-file-input>
                            <v-text-field clearable label="Descripción" v-model="storeArchivo.documento.descripcion">
                        </v-text-field>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="2"
                    >
                            <v-tooltip text="Agregar Documento">
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
                            v-for="item,index in storeArchivo.lista_archivos" 
                            :key="index"
                            :dot-color="item.color"
                            size="small"
                            fill-dot
                            >
                            <template v-slot:opposite>
                                <div
                                :class="`pt-1 headline font-weight-bold text-${item.color}`"
                                v-text="formatDateTime (item.fecha)"
                                ></div>
                            </template>
                            <div>
                                <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${item.color}`">
                                {{ item.nombre }}
                                </h2>
                                <div>
                                {{ item.descripcion }}
                                </div>
                                <div>
                                {{ item.comentario }}
                                </div>

                                <v-tooltip text="Eliminar documento">
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
                <v-btn @click="storeArchivo.visible = false" 
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
import { useArchivoStore } from '@/stores/AarchivoStore';

import { useDialogoConfirmaStore } from '@/stores/DialogoConfirmacion';
const storeDialogoConfirma = useDialogoConfirmaStore();

const storeArchivo = useArchivoStore();
const archivo = ref(null);

const guardar= async ()=>{
        if (archivo.value) {
            storeArchivo.documento.archivo= await obtenerBase64(archivo.value);
            storeArchivo.documento.nombre=archivo.value.name;
            storeArchivo.addArchivo();
            storeArchivo.getArchivos();
        }
}

const eliminar= async (item)=>{
        const confirmado = await storeDialogoConfirma.solicitarConfirmacion('¿Está seguro que desea eliminar el registro?');
        if (confirmado) {
            storeArchivo.delteArchivo(item);
        }
}

const obtenerBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result.split(',')[1])
            reader.onerror = () => reject(new Error("Error al leer el archivo"))
            reader.readAsDataURL(file)
 })
}

const formatDateTime = (fecha) =>  {
  const date =new Date(fecha);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>
