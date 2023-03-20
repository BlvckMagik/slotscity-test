<template>
  <div class="layout">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import 'normalize.css';
@import './styles/index.scss';

.layout {
  position: relative;
  min-height: 100dvh;
  height: 100%;
  background-color: #141416;
  overflow: hidden;
}
</style>
