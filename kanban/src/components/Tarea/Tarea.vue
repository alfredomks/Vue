<template>
        <v-tooltip>
            <template v-slot:activator="{ props }">
            <v-expansion-panels>
                <v-expansion-panel v-bind="props"class="ml-2 mr-2 mt-2" :title=tarea.nombre  rounded="xl">
                    <v-expansion-panel-text>
                        <div class="box">
                                
                                <p>
                                    <b>Tipo:</b> {{ tarea.str_tipo }} <br>
                                    <b>Estado:</b> {{ tarea.str_estado }} <br>
                                    <b>Usuario:</b> {{ tarea.str_usuario }} <br>
                                    <b>Dscripción:</b> {{ tarea.descripcion }}
                                </p>
                                <v-divider class="border-opacity-70" color="black"></v-divider>

                                <div class="container">
                                    <v-btn  density="comfortable"
                                            color="primary"
                                            @click="comentarios"
                                            icon="mdi mdi-comment-text-multiple-outline">
                                    </v-btn>
                                    <v-btn  density="comfortable"
                                            color="primary"
                                            @click="storeLog.visible = true"
                                            icon="mdi mdi-information-outline">
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                    <v-btn  density="comfortable"
                                            color="red"
                                            @click="eliminar()"
                                            icon="mdi mdi-delete-circle-outline">
                                    </v-btn>
                                </div>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
            </template>
            <span>
                <p>
                    <b>Tipo:</b> {{ tarea.str_tipo }} <br>
                    <b>Estado:</b> {{ tarea.str_estado }} <br>
                    <b>Usuario:</b> {{ tarea.str_usuario }} <br>
                </p>
            </span>
        </v-tooltip>
</template>

<script setup> 
    import { useTareaStore } from '@/stores/TareaStore';
    import { useDialogoConfirmaStore } from '@/stores/DialogoConfirmacion';
    import { useComentarioStore } from '@/stores/ComentarioStore';
    
    const storeDialogoConfirma = useDialogoConfirmaStore();
    const storeTarea = useTareaStore();
    const storeComentario = useComentarioStore();

    const props = defineProps(['tarea']);

    const  eliminar= async ()=>{
        var objeto=toRaw(props.tarea);
        //console.log(objeto);
        const confirmado = await storeDialogoConfirma.solicitarConfirmacion('¿Está seguro que desea eliminar el registro?');
        if (confirmado) {
            storeTarea.deleteTarea(objeto);
        }
    }
    const comentarios=()=>{
        var objeto=toRaw(props.tarea);
        storeComentario.tarea=objeto;
        storeComentario.getComentarios();
        storeComentario.visible=true;
    }
</script>
<style>
.meregnesTarea {
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    }
.box {
    margin-top: 10x;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    }
.container {
    display: flex;
    justify-content: center;
    }

</style>