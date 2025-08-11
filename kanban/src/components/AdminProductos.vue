<template>
    <v-card
        class="mx-auto"
        hover
        title="Productos"
    >
        <template v-slot:prepend>
                <v-avatar color="primary">
                    <v-icon icon="mdi mdi-package-variant-closed"></v-icon>
                </v-avatar>
        </template>

        <v-card-item>
            <v-card-subtitle>
                Lista de productos
            </v-card-subtitle>

            <v-expansion-panels>
                <v-expansion-panel>
                    <v-expansion-panel-title><v-icon color="primary" icon="mdi mdi-magnify"></v-icon>Buscar</v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="container">
                            <v-autocomplete
                            label="Tipo"
                            item-title="str_nombre"
                            item-value="int_id"
                            :items="storeProducto.lista_filtros"
                            >
                            </v-autocomplete>
                            
                            <v-text-field
                            name="input-10-1"
                            label="Texto"
                            hint="At least 8 characters"
                            counter="100"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-tooltip text="Nuevo producto">
                                <template v-slot:activator="{ props }">
                                    <v-btn  v-bind="props"  prepend-icon="mdi-magnify" elevation="8" rounded="xl" color="primary">
                                    Buscar
                                    </v-btn>
                                </template>
                            </v-tooltip>
                        </div>
                    </v-expansion-panel-text>
                    
                </v-expansion-panel>
            </v-expansion-panels>
        </v-card-item>

        <div class="container">
            <div class="center">
                <v-tooltip text="Nuevo producto">
                    <template v-slot:activator="{ props }">
                        <v-btn  v-bind="props" 
                                prepend-icon="mdi-plus-circle" 
                                elevation="8" 
                                rounded="xl" 
                                @click="nuevo()"
                                color="primary">
                        Nuevo
                        </v-btn>
                    </template>
                </v-tooltip>
            </div>
        </div>
            
        <v-card-text>
            <v-data-table 
            :headers="storeProducto.cabecera_lista"
            :items="storeProducto.lista_productos"
            hide-default-footer
            >

            <template v-slot:item.str_fecha_crea="{ item }">
                <span>{{ new Date(item.str_fecha_crea).toISOString().slice(0, 10) }}</span>
            </template>

            <template v-slot:item.str_fecha_inicio="{ item }">
                <span>{{ new Date(item.str_fecha_inicio).toLocaleDateString('en-CA') }}</span>
            </template>

            <template v-slot:item.str_fecha_fin="{ item }">
                <span>{{ new Date(item.str_fecha_fin).toLocaleDateString('en-CA') }}</span>
            </template>

            <template v-slot:item.actions="{item }">
                
                <v-tooltip text="Objetivos">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            color="primary"
                            @click="objetivos(item)"
                        >
                        mdi-crosshairs-gps
                        </v-icon>
                    </template>
                </v-tooltip>

                <v-tooltip text="Recursos">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            color="primary"
                            @click="recursos(item)"
                        >
                        mdi-account-group
                        </v-icon>
                    </template>
                </v-tooltip>

                <v-tooltip text="Tareas">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            color="primary"
                            @click="tareas(item)"
                        >
                        mdi-calendar-check
                        </v-icon>
                    </template>
                </v-tooltip>

                <v-tooltip text="Sprints">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            color="primary"
                            @click="sprints(item)"
                        >
                        mdi-clock-time-four
                        </v-icon>
                    </template>
                </v-tooltip>

                <v-tooltip text="Editar">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            size="small"
                            @click="actualizar(item)"
                        >
                            mdi-pencil
                        </v-icon>
                    </template>
                </v-tooltip>

                <v-tooltip text="Eliminar">
                    <template v-slot:activator="{ props }">
                        <v-icon
                            v-bind="props"
                            class="me-2"
                            color="red"
                            @click="eliminar(item)"
                        >
                        mdi-delete
                        </v-icon>
                    </template>
                </v-tooltip>
            </template>

            </v-data-table>

            <div class="text-center pt-2">
                <v-pagination
                    v-model="pagina"
                    rounded="circle"
                    color="primary"
                    :length="5"
                ></v-pagination>
            </div>
        </v-card-text>
    </v-card>

    <Producto></Producto>
    <AdminObjetivos></AdminObjetivos>
    <AdminRecuros></AdminRecuros>
    <AdminTareas></AdminTareas>
    <AdminSprints></AdminSprints>
</template>

<script setup>
    import {ref} from 'vue';
    import { useProductoStore } from '@/stores/ProductoStore';
    import { useObjetivoStore } from '@/stores/ObjetivoStore';
    import { useRecursoStore } from '@/stores/RecursoStore';
    import { useTareaStore } from '@/stores/TareaStore';
    import { useSprintStore } from '@/stores/SprintStore';
    
    import AdminObjetivos from './AdminObjetivos.vue';
    import AdminRecuros from './AdminRecursos.vue';
    import AdminTareas from './AdminTareas.vue';
    import AdminSprints from './AdminSprints.vue';

    const storeProducto = useProductoStore();
    const storeObjetivo = useObjetivoStore();
    const storeRecurso = useRecursoStore();
    const storeTareas = useTareaStore();
    const storeSprint = useSprintStore();

    const pagina=ref(1);

    const objetivos=(item)=>{
        storeObjetivo.bol_visible=true;
    }

    const recursos=(item)=>{
        storeRecurso.bol_visible=true;
    }

    const tareas=(item)=>{
        storeTareas.bol_visible=true;
    }

    const sprints=(item)=>{
        storeSprint.bol_visible=true;
    }

    const nuevo=()=>{
        var producto={
            "int_id":null,
            "str_nombre":null,
            "str_descripcion":null,
            "str_fecha_crea":null,
            "str_fecha_inicio":null,
            "str_fecha_fin":null
        };
        storeProducto.producto=producto;
        storeProducto.bol_visible_producto=true;
    }

    const actualizar=(item)=>{
        storeProducto.producto=item;
        storeProducto.bol_visible_producto=true;
    }
    const eliminar=(item)=>{
        storeProducto.lista_productos.splice(item.int_id-1, 1);
        storeProducto.deleteProducto(item);
    }
</script>