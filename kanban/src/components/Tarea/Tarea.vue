<template>
    <v-hover>
        <template  v-slot:default="{ isHovering, props }">
            <v-sheet
                v-bind="props"
                elevation="12"
                border
                min-height="30"
                width="95%"
                :color="isHovering ? 'primary' : 'yellow-accent-1'"
                class="mt-5"
                rounded="xl"
                >
                <div class="box">
                    <p align="center"><b>{{ tarea.nombre }}</b></p>

                    <v-divider  class="border-opacity-70" color="black"></v-divider>

                    <p>
                        <b>Tipo:</b> {{ tarea.str_tipo }} <br>
                        <b>Estado:</b> {{ tarea.str_estado }} <br>
                        <b>Usuario:</b> {{ tarea.str_usuario }} <br>
                        <b>Dscripción:</b> {{ tarea.descripcion }}
                    </p>
                   
               
                    <v-divider class="border-opacity-70" color="black"></v-divider>

                    <div class="container">
                        <v-btn  density="comfortable"
                                @click="storeLog.visible = true"
                                icon="mdi mdi-comment-text-multiple-outline">
                        </v-btn>
                        <v-btn  density="comfortable"
                                @click="storeLog.visible = true"
                                icon="mdi mdi-information-outline">
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn  density="comfortable"
                                @click="eliminarTarea()"
                                icon="mdi mdi-delete-circle-outline">
                        </v-btn>
                    </div>
                </div>
            </v-sheet>
            
           
        </template>
    </v-hover>
    
    <Log></Log>
</template>

<script setup>
    import { useTareaStore } from '@/stores/TareaStore';
    import { useLogStore } from '@/stores/LogStore';
    const storeTarea = useTareaStore();
    const storeLog = useLogStore();
    
    const props = defineProps(['tarea']);

    const eliminarTarea=()=>{
        const index = storeTarea.lista_tareas.indexOf(props.tarea);
        if (index > -1) {
            storeTarea.lista_tareas.splice(index, 1);
        }
    }
</script>
<style>
.box {
    margin-top: 15x;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 15px;
    }
.container {
    display: flex;
    justify-content: center;
    }

</style>