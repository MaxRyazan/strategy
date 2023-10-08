<script setup lang="ts">
import {onMounted, ref} from "vue";

const inputType = ref('text')
const props = defineProps<{
    modelValue: any
    type?:string
    for_button?: boolean
}>()
defineEmits(['update:modelValue'])
onMounted(() => {
    if(props.type) inputType.value = props.type
})
</script>

<template>
    <div>
        <input :type="inputType"
               :value="modelValue"
               :class="{for_button}"
               @change="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<style scoped lang="scss">
.for_button{
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-right: none;
  width: 50px;
  height: 24px;
  outline: none;
  text-align: center;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>