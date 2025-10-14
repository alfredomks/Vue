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
                    title="Tareas"
                    value="1"
                    @click="tareas"
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
          <AdminTareas v-if="storeTarea.bol_visible"></AdminTareas>
          <Tablero     v-if="storeTarea.bol_tablero"></Tablero>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup>
  import { ref } from 'vue'
  import Tablero from './components/Tarea/Tablero.vue'
  import AdminTareas from './components/Tarea/AdminTareas.vue';

  import { useMenuStore } from './stores/MenuStore'; 
  import { useTareaStore } from './stores/TareaStore'; 

  const storeMenu = useMenuStore();
  const storeTarea = useTareaStore();

  const theme = ref('light')

  const tareas=()=>{
    storeTarea.numero_filas=10;
    storeTarea.get_lista_tipos();
    storeTarea.get_lista_estados();
    storeTarea.get_lista_usuarios();
    storeTarea.get_lista_tareas();
    storeTarea.bol_visible=true;
    storeTarea.bol_tablero=false;
  }

  const tablero=()=>{
    storeTarea.numero_filas=1000;
    storeTarea.get_lista_estados();
    storeTarea.get_lista_tipos();
    storeTarea.get_lista_usuarios();
    storeTarea.get_lista_tareas();
    storeTarea.bol_visible=false;
    storeTarea.bol_tablero=true;
  }

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>
