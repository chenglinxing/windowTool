<template>
  <div class="iconpark">
    <component :is="iconName" :fill="fill" :size="size"></component>
  </div>
</template>

<script>
  export default {
    props: {
      iconName: {
        type: Object,
        default: "",
      },
      fill: {
        type: [String, Object],
        default: "#17bd08",
      },
      size: {
        type: Number,
        default: 32,
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style scoped></style>
