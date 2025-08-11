<template>
    <div>
        <v-sheet
        elevation="24"
        border
        min-height="30"
        width="95%"
        rounded="lg"
        >
             <v-row
                no-gutters
                class="justificar"
             >
             <v-combobox
                            clearable
                            label="Tipo"
                            v-model="storeTarea.tipos"
                            :items="storeTarea.lista_tipo"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            chips
                            hide-selected
                            multiple
                            >
                    </v-combobox>
                    <v-combobox
                            clearable
                            label="Fase"
                            v-model="storeTarea.fases"
                            :items="storeTarea.lista_fases"
                            item-value="id"
                            item-title="nombre"
                            :return-object="true"
                            chips
                            hide-selected
                            multiple
                            >
                    </v-combobox>
              
            </v-row>
        </v-sheet>

        <v-row
                align="center"
                no-gutters
                width="100%"
                class="justificar"
            >
            <v-col cols="6"
                    sm="4" 
                    v-for="item,index in storeTarea.lista_estados" :key="index">
                <Lista class="ma-2 pa-2" :tipo="item.nombre" ></Lista>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import {computed, ref} from 'vue';
    import { useTareaStore } from '@/stores/TareaStore';
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