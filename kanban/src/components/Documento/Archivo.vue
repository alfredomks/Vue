<template>
    <v-dialog max-width="500"
              persistent
              v-model="storeArchivo.visible">
        <v-card  elevation="12" title="Archivo">
                <template v-slot:prepend>
                        <v-avatar color="primary">
                            <v-icon icon="mdi mdi-folder-file"></v-icon>
                        </v-avatar>
                </template>
                 
                 <v-divider></v-divider>
                 
                 <v-card-text>

                    <v-file-input clearable label="Archivo"  show-size accept="image/*" v-model="archivo" </v-file-input>
                    <v-text-field clearable label="Descripción" v-model="storeArchivo.documento.descripcion">
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
    const archivo = ref(null);

    const guardar= async ()=>{
        if (archivo.value) {
            storeArchivo.documento.archivo= await obtenerBase64(archivo.value);
            storeArchivo.documento.nombre=archivo.value.name;
            storeArchivo.addArchivo();
            storeArchivo.visible=false;
        }
    }
    
    const obtenerArrayDeBytes = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()

            reader.onload = () => {
            const arrayBuffer = reader.result
            const byteArray = new Uint8Array(arrayBuffer)
            resolve(byteArray)
            }

            reader.onerror = () => {
            reject(new Error("Error al leer el archivo"))
            }

            reader.readAsArrayBuffer(file)
        })
    }

    const obtenerBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result.split(',')[1])
            reader.onerror = () => reject(new Error("Error al leer el archivo"))
            reader.readAsDataURL(file)
    })
}
</script>
