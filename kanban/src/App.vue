<template>
  <v-responsive class="border rounded" >
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-app-bar-nav-icon variant="text" @click.stop="storeMenu.visible = !storeMenu.visible"></v-app-bar-nav-icon>
        <v-toolbar-title>Kanban</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        >
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
        <v-btn class="text-none" stacked>
          <v-badge color="error" content="100">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
       
      </v-app-bar>

      <v-navigation-drawer
        v-model="storeMenu.visible"
        temporary
      >
        <v-list nav>

          <v-list-item
                    prepend-icon="mdi-account-circle"
                    title="Productos"
                    value="1"
                    @click="productos"
                  >
            </v-list-item>
            
            <v-list-item
                    prepend-icon="mdi-account-circle"
                    title="Tablero"
                    value="2"
                    @click="tablero"
                  >
            </v-list-item>

            <v-list-group value="soporte">
                <template v-slot:activator="{ props }">
                  <v-list-item
                    v-bind="props"
                    prepend-icon="mdi-account-circle"
                    title="Reportes"
                     value="3"
                  ></v-list-item>
                </template>
            </v-list-group>

        </v-list>

      </v-navigation-drawer>

      <v-main>
        <v-container>
          <AdminProductos v-if="storeProducto.bol_visible"></AdminProductos>
          <Tablero        v-if="storeTarea.bol_tablero"></Tablero>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  import { ref } from 'vue'
  import Tablero from './components/Tablero.vue'
  import AdminProductos from './components/AdminProductos.vue';

  import { useMenuStore } from './stores/MenuStore'; 
  import { useProductoStore } from './stores/ProductoStore'; 
  import { useTareaStore } from './stores/TareaStore'; 

  const storeProducto = useProductoStore();
  const storeMenu = useMenuStore();
  const storeTarea = useTareaStore();

  const theme = ref('light')

  const productos=()=>{
    storeProducto.bol_visible=true;
    storeTarea.bol_tablero=false;
  }

  const tablero=()=>{
    storeProducto.bol_visible=false;
    storeTarea.bol_tablero=true;
  }

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>
