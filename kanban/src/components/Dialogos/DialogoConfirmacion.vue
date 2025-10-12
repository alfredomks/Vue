<template>
    <div>
      <v-dialog v-model="storeDialogoConfirma.visible" max-width="400">
        <v-card>
          <v-card-title class="text-h6">Confirmar</v-card-title>
          <v-card-text>
            {{storeDialogoConfirma.mensaje}}
          </v-card-text>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn  color="primary"
                    variant="flat"
                    rounded="xl"
                    @click="storeDialogoConfirma.confirmar">Si</v-btn>
            <v-btn    color="primary"
                      variant="flat"
                      rounded="xl"
                      @click="storeDialogoConfirma.cancelar">No</v-btn>
            
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script setup>
 import { useDialogoConfirmaStore } from '@/stores/DialogoConfirmacion';
 const storeDialogoConfirma = useDialogoConfirmaStore();
</script>