<template>
   <v-card 
        elevation="12"
        max-width="500"
        height="750"
        rounded="lg"
        >
        <v-card-title>
            <div class="container">
                <v-badge color="error" :content="getNumeroTareasLista()">
                    <h3> 
                        <v-progress-circular :model-value="getPorcentaje()" :size="45" :width="5">
                            <h4>{{ getPorcentaje() }}</h4> 
                        </v-progress-circular>
                        {{ tipo }}                
                    </h3>
                </v-badge>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-plus" size="small"  @click="nuevaTarea()"  >
                </v-btn>
               
            </div>
            <v-text-field label="Buscar" v-model="txt_buscar"></v-text-field>
        </v-card-title>

        <container  align="center">
               <div 
                    class="w-100 d-inline-block"
                    style="height: 650px; overflow-y: scroll; background-color: rgba(0,0,255,.1)"
                    :draggable="true"
                    @dragover="handleDragOver"
                    @drop="handleDrop(index)"
                    @dragend="handleDragEnd"
                    >
                    <div
                    v-for="item,index in storeTarea.lista_tareas"
                    :key="index"
                    :draggable="true"
                    @dragstart="handleDragStart(index)"                  
                    >
                    <Tarea v-if="validarTarea(item)"
                            :tarea="item" 
                            >
                    </Tarea>
                </div>
               </div>
                
        </container>
        <NuevaTarea></NuevaTarea>
    </v-card> 
</template>

<script setup>
    import {ref} from 'vue';
    import { useTareaStore } from '@/stores/TareaStore';
    const storeTarea = useTareaStore();
    const txt_buscar=ref("");
    const dragedItem=ref(0);
    const props = defineProps(['tipo']);
    
    const validarTarea=(tarea)=>{
        var valido=false;
        //console.log(tarea);
        if(tarea.str_estado!=null){
            if( tarea.str_estado.toLowerCase().includes(props.tipo.toLowerCase()) 
            //&&  storeTarea.lista_tipos.find(({ nombre }) => nombre === tarea.str_tipo) 
            && (tarea.nombre.toLowerCase().includes(txt_buscar.value.toLowerCase()) || 
                tarea.str_usuario.toLowerCase().includes(txt_buscar.value.toLowerCase()) ||
                tarea.str_tipo.toLowerCase().includes(txt_buscar.value.toLowerCase())
                )
            ){
                valido=true;
            }
        }
        return valido;
    }

    const getNumeroTareasLista=()=>{
        var numero=0;
        for (let i = 0; i < storeTarea.lista_tareas.length; i++) {
           var t=storeTarea.lista_tareas[i];
           if(validarTarea(t)){
            numero++;
           }
        }
        return numero;
    }
    const getNumeroTareasTablero=()=>{
        var numero=0;
        for (let i = 0; i < storeTarea.lista_tareas.length; i++) {
           var t=storeTarea.lista_tareas[i];
           if( storeTarea.lista_tipos.find(({ nombre }) => nombre === t.str_tipo) &&
               storeTarea.lista_estados.find(({ nombre }) => nombre === t.str_estado) 
            ){
            numero++;
           }
        }
        return numero;
    }
    const getPorcentaje=()=>{
        var porcentaje=0;
        if(getNumeroTareasTablero()>0)
            porcentaje=(getNumeroTareasLista()/getNumeroTareasTablero())*100;
        else
            porcentaje==0;

        return Math.round(porcentaje,0);
    }
    const handleDragStart=(index)=>{       
        dragedItem.value=index;
        storeTarea.setTareaSeleccionada(storeTarea.lista_tareas[index]);
    }

    const handleDragOver=(event)=>{
        event.preventDefault()
    }

    const handleDrop=(index)=>{
        //console.log(storeTarea.tareaSeleccionada);
        if(storeTarea.tareaSeleccionada!=null){
            storeTarea.tareaSeleccionada.str_estado=props.tipo;
        }
        const dropItem=storeTarea.lista_tareas.splice(dragedItem.value,1)[0];
        storeTarea.lista_tareas.splice(index,0,dropItem)
        dragedItem.value=0;
        props.tarea=null;
    }
    const handleDragEnd=()=>{
        dragedItem.value=0;
        props.tarea=null;
    }
    const load=({done})=>{
        setTimeout(() => {
          done('ok');
        }, 2000)
    }

    const nuevaTarea=()=>{
        var tarea={ 
                "id":null,
                "nombre":null,  
                "tipo":null,
                "estado":null,
                "usuario":null,
                "descripcion":null,
                "fecha_crea":new Date()
            };
        storeTarea.tarea=tarea;
        storeTarea.nuevaTarea=true;
    }
</script>
<style>
    .row {
        width: 100%;
        text-align: center; 
    }
    .container {
        display: flex;
        justify-content: center;
    }
</style>