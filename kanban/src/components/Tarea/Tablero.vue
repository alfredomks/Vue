<template>
    <div>

        <v-row
                align="center"
                no-gutters
                width="100%"
                class="justificar"
            >
            <v-col cols="6"
                    sm="4" 
                    v-for="item,index in storeTarea.lista_estados" :key="index">
                <Lista class="ma-2 pa-2" :tipo="item" ></Lista>
            </v-col>
        </v-row>
    </div>
    <NuevaTarea></NuevaTarea>
    <Comentario></Comentario>
    <DialogoConfirmacion></DialogoConfirmacion>
</template>

<script setup>
    import {computed, ref} from 'vue';
    import { useTareaStore } from '@/stores/TareaStore';
    
    import NuevaTarea from './NuevaTarea.vue';
    import Comentario from '../Comentario/Comentario.vue';
    import DialogoConfirmacion from '../Dialogos/DialogoConfirmacion.vue';

    const storeTarea = useTareaStore();
    const toggle=null;
</script>
<style>
.row {
    margin-left: auto;
    margin-right: auto;
    width: (less than 100%) or in px
}
.justificar {
  display: flex;
  justify-content: space-around;
}
.block {
  width: 100px;
}
</style>