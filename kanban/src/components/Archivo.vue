<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeArchivo.visible">
        <v-card  elevation="12" title="Archivo">
                <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon icon="mdi-calendar-check"></v-icon>
                        </v-avatar>
                </template>
                 
                 <v-divider></v-divider>
                 
                 <v-card-text>
                    <v-text-field clearable label="Código" v-model="storeArchivo.archivo.codigo_documento">
                    </v-text-field>
                   
                    <v-text-field clearable label="Descripción" v-model="storeArchivo.archivo.descripcion">
                    </v-text-field>

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
                <v-btn @click="storeArchivo.visible = false" 
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
    import { useArchivoStore } from '@/stores/AarchivoStore';
    const storeArchivo = useArchivoStore();

    const guardar=()=>{
        storeArchivo.addArchivo();
        storeArchivo.visible=false;
    }
</script>
