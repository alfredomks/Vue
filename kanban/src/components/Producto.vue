
<template>
    <div>
        <v-dialog   v-model="storeProducto.bol_visible_producto"
                    max-width="500">
            
            <v-card title="Producto">
                
                <v-card-text>
                    <v-text-field
                    v-model="storeProducto.producto.str_nombre"
                    name="input-10-1"
                    label="Nombre"
                    hint="At least 8 characters"
                    counter="100"
                    ></v-text-field>

                    <v-textarea v-model="storeProducto.producto.str_descripcion"
                                clearable 
                                label="Descripción"
                                counter="500"
                    >

                    </v-textarea>

                    <v-autocomplete
                    v-model="storeProducto.producto.str_estado"
                    label="Estado"
                    :items="['ANALISIS', 'DISEÑO', 'DESARROLLO', 'PRUEBAS', 'PRODUCCION']"
                    >
                    </v-autocomplete>
                    
                    <v-menu
                        v-model="menu2"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                        >
                        <template v-slot:activator="{ props }">
                            <v-text-field
                            v-bind="props"
                            :model-value="dateFormat()"
                            label="Fecha de inicio"
                            hint="MM/DD/YYYY"
                            persistent-hint
                            prepend-icon="mdi-calendar"
                            readonly
                            ></v-text-field>
                        </template>
                        
                        <v-locale-provider locale="es">
                            <v-date-picker
                                v-model="storeProducto.producto.str_fecha_inicio"
                                header="Calendario"
                                max="2026-01-01"
                                min="2024-06-15"
                                rounded="xl"
                                title="Fecha inicio"
                                @update:model-value="menu2 = false"
                            ></v-date-picker>
                        </v-locale-provider>
                       
                    </v-menu>

                </v-card-text>
        
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                    <v-btn
                    text="Guardar"
                    color="primary"
                    prepend-icon="mdi-content-save" 
                    elevation="8" 
                    rounded="xl" 
                    variant="elevated"
                    @click="guardar()"
                    >
                    </v-btn>

                    <v-btn
                    text="Cancelar"
                    color="error"
                    prepend-icon="mdi-close-circle" 
                    elevation="8" 
                    rounded="xl" 
                    variant="elevated"
                    @click="cancelar()"
                    >
                    </v-btn>
                </v-card-actions>
        
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import { useDate } from 'vuetify'
    import { useProductoStore } from '@/stores/ProductoStore';
    const storeProducto = useProductoStore();
    const menu2=ref(false);
    const adapter = useDate();

    const dateFormat=()=>{
        var fecha =new Date(storeProducto.producto.str_fecha_inicio);
        return new Intl.DateTimeFormat("en-US").format(fecha);
    }
    
    const guardar=()=>{
        if(storeProducto.producto.int_id==null){
            storeProducto.producto.int_id=storeProducto.lista_productos.length+1;
            storeProducto.lista_productos.push(storeProducto.producto);
        }
        storeProducto.bol_visible_producto=false;
    }
    const cancelar=()=>{
        storeProducto.bol_visible_producto=false;
    }

</script>